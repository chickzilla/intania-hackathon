package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RequireRoles(allowedRoles ...string) gin.HandlerFunc {
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

		for _, allowed := range allowedRoles {
			if roleFromContext == allowed {
				c.Next()
				return
			}
		}

		c.JSON(http.StatusForbidden, gin.H{"message": "You don't have permission to access this resource"})
		c.Abort()
	}
}
