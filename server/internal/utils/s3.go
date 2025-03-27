package utils

import (
	"context"
	"io"
	"os"
	"sync"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

var (
	s3Once   sync.Once
	instance *S3
)

type ContentType string

func (c ContentType) String() string {
	return string(c)
}

const (
	ContentTypeImageJpg ContentType = "image/jpg"
	ContentTypeImagePng ContentType = "image/png"
)

type S3 struct {
	client          *s3.Client
	preSignedClient *s3.PresignClient
	bucketName      string
	baseURL         string
}

func GetS3Client() *S3 {
	s3Once.Do(func() {
		accessKeyId := os.Getenv("S3_ACCESS_KEY_ID")
		secretAccess := os.Getenv("S3_SECRET_ACCESS")
		region := os.Getenv("S3_REGION")
		bucket := os.Getenv("S3_BUCKET")
		baseURL := os.Getenv("S3_BASE_URL")

		s3Options := s3.Options{
			Region:      region,
			Credentials: credentials.NewStaticCredentialsProvider(accessKeyId, secretAccess, ""),
		}

		client := s3.New(s3Options)
		instance = &S3{
			client:          client,
			preSignedClient: s3.NewPresignClient(client),
			bucketName:      bucket,
			baseURL:         baseURL,
		}
	})

	return instance
}

func (s *S3) GetObject(c context.Context, key string) (*s3.GetObjectOutput, error) {
	return s.client.GetObject(c, &s3.GetObjectInput{
		Bucket: aws.String(s.bucketName),
		Key:    aws.String(key),
	})
}

func (s *S3) PutObject(c context.Context, key string, file io.Reader, contentType ContentType, isPublic bool) (*s3.PutObjectOutput, error) {
	/* if isPublic {
		return s.client.PutObject(c, &s3.PutObjectInput{
			Bucket:      aws.String(s.bucketName),
			Key:         aws.String(key),
			Body:        file,
			ContentType: aws.String(contentType.String()),
			//ACL:         "public-read",
		})
	} else {
		return s.client.PutObject(c, &s3.PutObjectInput{
			Bucket:      aws.String(s.bucketName),
			Key:         aws.String(key),
			Body:        file,
			ContentType: aws.String(contentType.String()),
		})
	} */
	input := &s3.PutObjectInput{
		Bucket:      aws.String(s.bucketName),
		Key:         aws.String(key),
		Body:        file,
		ContentType: aws.String(contentType.String()),
	}

	return s.client.PutObject(c, input)

}

func (s *S3) DeleteObject(c context.Context, key string) (*s3.DeleteObjectOutput, error) {
	return s.client.DeleteObject(c, &s3.DeleteObjectInput{
		Bucket: aws.String(s.bucketName),
		Key:    aws.String(key),
	})
}

func (s *S3) PresignGetObject(c context.Context, key string) (string, error) {
	presignedUrl, err := s.preSignedClient.PresignGetObject(c, &s3.GetObjectInput{
		Bucket: aws.String(s.bucketName),
		Key:    aws.String(key),
	},
		s3.WithPresignExpires(time.Hour*24*7-1))
	if err != nil {
		return "", err
	}
	return presignedUrl.URL, nil
}

func (s *S3) GetObjectPublicURL(key string) string {
	return s.baseURL + "/" + key
}
