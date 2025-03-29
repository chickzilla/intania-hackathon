package userachievement

import (
	"hackathon/internal/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type UserGetAchievementRequest struct {
	AchievementID string `json:"achievement_id"`
	UserID        string `json:"user_id"`
}

func (r *Resolver) UserGetAchievement(c *gin.Context) {
	var req UserGetAchievementRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	user_id, _ := uuid.Parse(req.UserID)
	achievement_id, _ := uuid.Parse(req.AchievementID)

	if !r.UserAchievementRepo.IsExist(c, achievement_id) {
		c.JSON(400, gin.H{"error": "achievement_id is not exist"})
		return
	}

	model := models.UserAchievement{
		UserID:        user_id,
		AchievementID: achievement_id,
		CreatedAt:     time.Now(),
	}
	if err := r.UserAchievementRepo.AddOne(c, &model); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success"})
	return
}
