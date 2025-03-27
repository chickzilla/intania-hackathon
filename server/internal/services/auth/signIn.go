package auth

import (
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type SignInRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (r *Resolver) SignIn(c *gin.Context) {
	var req SignInRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	user, err := r.UserRepo.FindByEmail(c, req.Email)
	if err != nil {
		c.JSON(400, gin.H{"error": "User not found!"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		c.JSON(400, gin.H{"error": "Invalid password!"})
		return
	}

	token, err := utils.GenerateKey(user.Email)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": token})
}
