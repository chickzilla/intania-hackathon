package module

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type CreateModuleRequest struct {
	Name     string `json:"name"`
	Detail   string `json:"detail"`
	Order    int    `json:"order"`
	CourseID string `json:"course_id"`
}

func (r *Resolver) Create(c *gin.Context) {
	var req CreateModuleRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	courseID, err := uuid.Parse(req.CourseID)
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid course ID"})
		return
	}

	newModule := models.Modules{
		Name:     req.Name,
		Detail:   req.Detail,
		Order:    uint8(req.Order),
		CourseID: courseID,
	}

	if err := r.ModuleRepo.AddOne(c, &newModule); err != nil {
		c.JSON(500, gin.H{"error": "could not create module"})
		return
	}

	c.JSON(200, newModule)
}
