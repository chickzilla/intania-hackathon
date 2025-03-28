package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RequireRole(role string) gin.HandlerFunc {
	return func(c *gin.Context) {
		rawRole, exists := c.Get("role")
		if !exists {
			c.JSON(http.StatusForbidden, gin.H{"message": "Missing role in context"})
			c.Abort()
			return
		}

		roleFromContext, ok := rawRole.(string)
		if !ok {
			c.JSON(http.StatusForbidden, gin.H{"message": "Invalid role format"})
			c.Abort()
			return
		}

		println("role in context:", roleFromContext)

		if roleFromContext != role {
			c.JSON(http.StatusForbidden, gin.H{"message": "You don't have permission to access this resource"})
			c.Abort()
			return
		}

		c.Next()
	}
}
