package reward

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindAllByUserId(c *gin.Context) {
	userIDStr := c.Query("user_id")
	if userIDStr == "" {
		c.JSON(400, gin.H{"error": "userID is required"})
		return
	}

	userID, err := uuid.Parse(userIDStr)
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid userID"})
		return
	}

	reward, err := r.RewardRepo.FindAllByUserID(c, userID)
	if err != nil {
		c.JSON(404, gin.H{"error": "reward not found"})
		return
	}

	c.JSON(200, reward)
}
