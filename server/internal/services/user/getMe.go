package user

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) GetMe(c *gin.Context) {
	u_id, _ := c.Get("id")
	user_id, err := uuid.Parse(u_id.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	model, err := r.UserRepo.FindOneByID(c, user_id)
	if err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"result": *model})
	return
}
