package course

import (
	"github.com/gin-gonic/gin"
)

func (r *Resolver) FindAll(c *gin.Context) {

	models, err := r.CourseRepo.FindAll(c)

	if err != nil {
		c.JSON(400, gin.H{"error": "Cant find all courses"})
		return
	}
	c.JSON(200, gin.H{"result": *models})

	return
}
