package achievement

import (
	"github.com/gin-gonic/gin"
)

func (r *Resolver) FindAllAchievement(c *gin.Context) {
	model, err := r.AchievementRepo.FindAll(c)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"result": *model})
	return
}
