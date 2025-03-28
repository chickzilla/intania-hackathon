package routes

import (
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
	// server.POST("/course", middleware.AuthMiddleware(), middleware.RequireRoles(models.LecturerRole, models.AdminRole), handler.Course.Create)

	// user
	server.POST("/add-user", handler.User.AddUser)
	server.GET("/find-all-user", handler.User.FindAllUser)

}
