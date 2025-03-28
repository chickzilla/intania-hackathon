package routes

import (
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func SetupUserRoutes(router *gin.Engine, handler *services.Handler) {
	router.POST("/add-user", handler.User.AddUser)
	router.GET("/find-all-user", handler.User.FindAllUser)
}
