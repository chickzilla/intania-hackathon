package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/services"

	"github.com/gin-gonic/gin"
)

func SetupModuleRoutes(router *gin.Engine, handler *services.Handler) {
	moduleGroup := router.Group("/module")
	moduleGroup.Use(middleware.AuthMiddleware())

	moduleGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Module.Create)
	moduleGroup.GET("/find-one", handler.Module.FindByID)
	moduleGroup.GET("/find-in-course", handler.Module.FindAllInCourse)
}
