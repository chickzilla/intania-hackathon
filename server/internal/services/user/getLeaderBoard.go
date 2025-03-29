package user

import (
	"github.com/gin-gonic/gin"
)

func (r *Resolver) GetLeaderBoard(c *gin.Context) {

	user, err := r.UserRepo.FindAllOrderedByRank(c)

	if err != nil {
		println("error", err.Error())
		c.JSON(500, gin.H{"error": "Could not get rank"})
		return
	}

	c.JSON(200, gin.H{"result": user})
}
