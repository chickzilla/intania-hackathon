package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func SetupCourseRoutes(router *gin.Engine, handler *services.Handler) {
	courseGroup := router.Group("/course")
	courseGroup.Use(middleware.AuthMiddleware())

	courseGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Course.Create)

	courseGroup.POST("/join", handler.Course.JoinCourse)
}
