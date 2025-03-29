package user

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type AddPointRequest struct {
	Point int `json:"point" binding:"required"`
}

func (r *Resolver) AddPoint(c *gin.Context) {
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

	var req AddPointRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": "invalid request"})
		return
	}

	user, err := r.UserRepo.FindOneByID(c, idParsed)
	if err != nil {
		c.JSON(404, gin.H{"error": "user not found"})
		return
	}

	user.Point += int64(req.Point)

	// Save back to DB
	if err := r.UserRepo.UpdateOne(c, user); err != nil {
		c.JSON(500, gin.H{"error": "failed to update user"})
		return
	}

	c.JSON(200, gin.H{"result": user})
}
