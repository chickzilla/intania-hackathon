package utils

import (
	"errors"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
)

func GenerateKey(email string) (string, error) {

	key := os.Getenv("SECRET_KEY")
	if key == "" {
		return "", errors.New("SECRET_KEY not found")
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": email,
		"exp":   time.Now().Add(time.Hour * 72).Unix(),
	})

	tokenSting, err := claims.SignedString([]byte(key))

	if err != nil {
		return "", err
	}

	return tokenSting, nil
}

// Validate and return email

func ValidateJWTToken(tokenString string) string {

	key := os.Getenv("SECRET_KEY")
	if key == "" {
		return ""
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("unexpected signing method")
		}
		return []byte(key), nil
	})

	if err != nil {
		return ""
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		email := claims["email"].(string)
		return email
	}

	return ""
}
