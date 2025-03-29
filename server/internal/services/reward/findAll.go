package reward

import (
	"github.com/gin-gonic/gin"
)

func (r *Resolver) FindAll(c *gin.Context) {
	reward, err := r.RewardRepo.FindAll(c)
	if err != nil {
		c.JSON(404, gin.H{"error": "could not find rewards"})
		return
	}

	c.JSON(200, reward)
}
