package course

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type CreateCourseRequest struct {
	Name   string `json:"name" binding:"required"`
	Detail string `json:"detail"`
}

func (r *Resolver) Create(c *gin.Context) {
	var req CreateCourseRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	idStr, _ := c.Get("id")
	idParsed, err := uuid.Parse(idStr.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid user ID"})
		return
	}

	newCourse := models.Courses{
		Name:       req.Name,
		Detail:     req.Detail,
		LecturerID: idParsed,
		Created_by: idParsed,
	}
	if err := r.CourseRepo.AddOne(c, &newCourse); err != nil {
		c.JSON(500, gin.H{"error": "could not create course"})
		return
	}

	c.JSON(200, newCourse)
}
