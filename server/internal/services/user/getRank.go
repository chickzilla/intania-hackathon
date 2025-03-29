package user

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) GetRank(c *gin.Context) {
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

	user, err := r.UserRepo.FindOneByID(c, userID)
	if err != nil {
		c.JSON(400, gin.H{"error": "User not found!"})
		return
	}

	count, err := r.UserRepo.GetRankPositionByRankPoint(c, user.RankPoint)

	if err != nil {
		println("error", err.Error())
		c.JSON(500, gin.H{"error": "Could not get rank"})
		return
	}

	c.JSON(200, gin.H{"rank": count})
}
