package auth

import (
	"hackathon/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type SignUpRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (r *Resolver) SignUp(c *gin.Context) {

	var req SignUpRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	if _, err := r.UserRepo.FindByEmail(c, req.Email); err == nil {
		c.JSON(400, gin.H{"error": "Email already exists!"})
		return
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Password), 10)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	newUser := models.User{
		Email:    req.Email,
		Password: string(hashed),
	}
	if err := r.UserRepo.AddOne(c, &newUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create user"})
		return
	}

}
