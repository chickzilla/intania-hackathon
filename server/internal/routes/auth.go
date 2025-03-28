package routes

import (
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func SetupAuthRoutes(router *gin.Engine, handler *services.Handler) {
	router.POST("/auth/sign-up", handler.Auth.SignUp)
	router.POST("/auth/sign-in", handler.Auth.SignIn)
}
