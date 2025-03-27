package routes

import (
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func ConfigRouters(server *gin.Engine) {
	// auth
	server.POST("/auth/sign-up", services.SignUp)
}
