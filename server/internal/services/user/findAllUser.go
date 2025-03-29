package user

import (
	"github.com/gin-gonic/gin"
)

func (r *Resolver) FindAllUser(c *gin.Context) {
	models, err := r.UserRepo.FindAll(c)

	if err != nil {
		c.JSON(400, gin.H{"error": "Cant find all user"})
		return
	}
	c.JSON(200, gin.H{"result": *models})

	return

}
