package usercontest

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type AddUserContestRequest struct {
	ContestID string `json:"contest_id"`
	UserID    string `json:"user_id"`
}

func (r *Resolver) AddUserContest(c *gin.Context) {
	var req AddUserContestRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	contest_id, _ := uuid.Parse(req.ContestID)
	user_id, _ := uuid.Parse(req.UserID)

	model := models.UserContest{
		ContestID: contest_id,
		UserID:    user_id,
	}

	if err := r.UserContestRepo.AddOne(c, &model); err != nil {
		c.JSON(400, gin.H{"message": "แย่แล้วววววววว"})
	}

	c.JSON(200, gin.H{"message": "รู้เรื่อง"})
	return
}
