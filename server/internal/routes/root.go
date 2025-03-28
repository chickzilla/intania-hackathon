package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/services"
	"hackathon/internal/services/s3"
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
)

func ConfigRouters(server *gin.Engine) {
	db := utils.GetDatabase()
	handler := services.NewHandler(db)
	// auth
	server.POST("/auth/sign-up", handler.Auth.SignUp)
	server.POST("/auth/sign-in", handler.Auth.SignIn)

	//upload
	server.POST("/upload", s3.Upload)

	// course
	courseGroup := server.Group("/course")
	courseGroup.Use(
		middleware.AuthMiddleware(),
	)
	courseGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Course.Create)

	courseGroup.POST("/join",
		middleware.AuthMiddleware(),
		handler.Course.JoinCourse)

	// module
	moduleGroup := server.Group("/module")
	moduleGroup.Use(
		middleware.AuthMiddleware(),
	)
	moduleGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Module.Create)
	moduleGroup.GET("/find-one",
		handler.Module.FindByID)
	moduleGroup.GET("/find-in-course",
		handler.Module.FindAllInCourse)

	// user
	server.POST("/add-user", handler.User.AddUser)
	server.GET("/find-all-user", handler.User.FindAllUser)

}
