package userachievement

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindAchievementById(c *gin.Context) {
	u_id, exist := c.Get("id")

	if !exist {
		c.JSON(400, gin.H{"error": "id not found"})
		return
	}

	user_id, _ := uuid.Parse(u_id.(string))

	model, err := r.UserAchievementRepo.FindAchievementById(c, user_id)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	var achievementIds []uuid.UUID
	for _, element := range *model {
		achievementIds = append(achievementIds, (element).AchievementID)
	}

	result, err := r.AchievementRepo.FindByIDs(c, achievementIds)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
	}

	c.JSON(200, gin.H{"result": result})
	return

}
