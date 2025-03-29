package reward

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type ClaimRewardRequest struct {
	RewardID uuid.UUID `json:"reward_id"`
}

func (r *Resolver) Claim(c *gin.Context) {
	var request ClaimRewardRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(400, gin.H{"error": "invalid request"})
		return
	}

	idStr, _ := c.Get("id")
	idParsed, err := uuid.Parse(idStr.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid user ID"})
		return
	}

	reward, err := r.RewardRepo.FindOneByID(c, request.RewardID)
	if err != nil || reward == nil {
		c.JSON(404, gin.H{"error": "reward not found"})
		return
	}

	newUserReward := models.UserReward{
		UserID:   idParsed,
		RewardID: reward.ID,
	}

	if err := r.UserReward.AddOne(c, &newUserReward); err != nil {
		c.JSON(500, gin.H{"error": "could not claim reward"})
		return
	}

	c.JSON(200, gin.H{"message": "reward claimed successfully"})
}
