package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func SetupContestRoutes(router *gin.Engine, handler *services.Handler) {
	contestGroup := router.Group("/contest")
	contestGroup.Use(middleware.AuthMiddleware())

	contestGroup.POST("/create",
		middleware.RequireRoles("LECTURER"),
		handler.Contest.AddContest)
}
