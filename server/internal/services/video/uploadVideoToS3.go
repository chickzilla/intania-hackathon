package video

import (
	"fmt"
	"hackathon/internal/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)

type UploadVideoRequest struct {
	CourseName string `json:"course_name"`
	ModuleName string `json:"module_name"`
	VideoName  string `json:"video_name"`
}

func (r *Resolver) UploadVideo(c *gin.Context) {
	var req UploadVideoRequest
	file, err := c.FormFile("video")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "File not provided"})
		return
	}

	src, err := file.Open()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to open file"})
		return
	}
	defer src.Close()
	s3Client := utils.GetS3Client()
	url, err := s3Client.PutObject(c, fmt.Sprintf("%s/%s/%s", req.CourseName, req.ModuleName, req.VideoName), src, "mp4", false)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to upload to S3"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"url": url})
}
