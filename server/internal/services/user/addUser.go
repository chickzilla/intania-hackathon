package user

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
)

type AddUserRequest struct {
	Name      string `json:"name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	UserRole  string `json:"user_role"`
	RankPoint int64  `json:"rank_point"`
	Point     int64  `json:"point"`
}

func (r *Resolver) AddUser(c *gin.Context) {
	var req AddUserRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	model := models.User{
		Name:      req.Name,
		Email:     req.Email,
		Password:  req.Password,
		UserRole:  req.UserRole,
		RankPoint: req.RankPoint,
		Point:     req.Point,
		CreatedAt: nil,
		UpdatedAt: nil,
	}

	if err := r.UserRepo.AddOne(c, &model); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"message": "okay"})
	return
}
