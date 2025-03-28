package reward

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindByID(c *gin.Context) {
	rewardIDStr := c.Query("id")
	if rewardIDStr == "" {
		c.JSON(400, gin.H{"error": "id is required"})
		return
	}

	rewardID, err := uuid.Parse(rewardIDStr)
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid rewardID"})
		return
	}

	reward, err := r.RewardRepo.FindOneByID(c, rewardID)
	if err != nil {
		c.JSON(404, gin.H{"error": "reward not found"})
		return
	}

	c.JSON(200, reward)
}
