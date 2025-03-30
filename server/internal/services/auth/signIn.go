package auth

import (
	"errors"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
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

	token, err := GenerateKey(user.ID, user.UserRole)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"token": token, "id": user.ID, "role": user.UserRole, "point": user.Point, "rankingPoint": user.RankPoint, "name": user.FullName, "email": user.Email})
}

func GenerateKey(id uuid.UUID, userRole string) (string, error) {

	key := os.Getenv("SECRET_KEY")
	if key == "" {
		return "", errors.New("SECRET_KEY not found")
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":   id,
		"role": userRole,
		"exp":  time.Now().Add(time.Hour * 72).Unix(),
	})

	tokenSting, err := claims.SignedString([]byte(key))

	if err != nil {
		return "", err
	}

	return tokenSting, nil
}
