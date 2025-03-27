package s3

import (
	"fmt"
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
)

func Upload(c *gin.Context) {
	file, header, err := c.Request.FormFile("file")
	if err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{"error": "Missing file"})
		return
	}
	defer file.Close()

	s3 := utils.GetS3Client()
	key := "uploads/" + header.Filename
	contentType := utils.ContentType(header.Header.Get("Content-Type"))

	_, err = s3.PutObject(c, key, file, contentType, true)
	if err != nil {
		fmt.Println(err)
		c.JSON(500, gin.H{"error": "Upload failed"})
		return
	}

	c.JSON(200, gin.H{
		"message":  "Uploaded!",
		"file_url": s3.GetObjectPublicURL(key),
	})
}
