package routes

import (
	"hackathon/internal/services"
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
)

func ConfigRouters(server *gin.Engine) {
	db := utils.GetDatabase()
	handler := services.NewHandler(db)

	SetupAuthRoutes(server, handler)
	SetupCourseRoutes(server, handler)
	SetupModuleRoutes(server, handler)
	SetupUserRoutes(server, handler)
	SetupContestRoutes(server, handler)
}
