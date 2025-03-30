package reward

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type ClaimRewardRequest struct {
	RewardID uuid.UUID `json:"reward_id"`
	Point int `json:"point" binding:"required"`
}


func (r *Resolver) Claim(c *gin.Context) {
	var request ClaimRewardRequest
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(400, gin.H{"error": "invalid request"})
		return
	}

	reward, err := r.RewardRepo.FindOneByID(c, request.RewardID)
	if err != nil || reward == nil {
		c.JSON(404, gin.H{"error": "reward not found"})
		return
	}

	
	if reward.IsClaimed {
		c.JSON(400, gin.H{"error": "reward already claimed"})
		return
	}

	
	reward.IsClaimed = true
	if err := r.RewardRepo.UpdateOne(c, reward); err != nil {
		c.JSON(500, gin.H{"error": "could not update reward status"})
		return
	}

	idStr, exists := c.Get("id")
	if !exists {
		c.JSON(400, gin.H{"error": "user ID not found"})
		return
	}
	idParsed, err := uuid.Parse(idStr.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid user ID"})
		return
	}


	user, err := r.UserRepo.FindOneByID(c, idParsed)
	if err != nil {
		c.JSON(404, gin.H{"error": "user not found"})
		return
	}

	user.Point -= int64(request.Point)

	// Save back to DB
	if err := r.UserRepo.UpdateOne(c, user); err != nil {
		c.JSON(500, gin.H{"error": "failed to update user"})
		return
	}

	c.JSON(200, gin.H{"message": "reward marked as claimed"})
}
