package routes

import (
	"hackathon/internal/services"
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
)

func ConfigRouters(server *gin.Engine) {
	db := utils.GetDatabase()
	handler := services.NewHandler(db)
	// auth
	server.POST("/auth/sign-up", handler.Auth.SignUp)
	server.POST("/auth/sign-in", handler.Auth.SignIn)
}
