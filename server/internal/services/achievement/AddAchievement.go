package achievement

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
)

type AddAchievementRequest struct {
	Name   string `json:"name"`
	Detail string `json:"detail"`
}

// only Admin can use this function
func (r *Resolver) AddAchievement(c *gin.Context) {
	var req AddAchievementRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	model := models.Achievement{
		Name:   req.Name,
		Detail: req.Detail,
	}

	if err := r.AchievementRepo.AddOne(c, &model); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success"})
	return
}
