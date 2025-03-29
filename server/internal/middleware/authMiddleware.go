package middleware

import (
	"fmt"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		fmt.Println("Auth Header: ", authHeader)
		if authHeader == "" || !strings.HasPrefix(authHeader, "Bearer ") {
			c.JSON(401, gin.H{"message": "Authorization header missing or malformed"})
			c.Abort()
			return
		}

		tokenString := strings.Split(authHeader, " ")[1]

		//Parse token
		parsedResult, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SECRET_KEY")), nil
		})
		if err != nil || !parsedResult.Valid {
			println(err.Error())
			println(parsedResult.Valid)
			c.JSON(401, gin.H{
				"message": "Invalid or expired token",
			})
			c.Abort()
			return
		}

		//Get token's payload
		claims, ok := parsedResult.Claims.(jwt.MapClaims)
		if ok && parsedResult.Valid {
			c.Set("id", claims["id"])
			c.Set("role", claims["role"])
		} else {
			c.JSON(401, gin.H{"message": "Invalid token claims"})
			c.Abort()
			return
		}

		c.Next()
	}
}
