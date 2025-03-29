package auth

import (
	"hackathon/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type SignUpRequest struct {
	FullName  string `json:"full_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	UserRole  string `json:"user_role"`
	RankPoint int64  `json:"rank_point"`
	Point     int64  `json:"point"`
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
		FullName:  req.FullName,
		Email:     req.Email,
		Password:  string(hashed),
		UserRole:  req.UserRole,
		RankPoint: req.RankPoint,
		Point:     req.Point,
	}
	if err := r.UserRepo.AddOne(c, &newUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
