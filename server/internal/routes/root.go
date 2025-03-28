package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/models"
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

	//test middleware
	server.GET("/test", middleware.AuthMiddleware(), func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Test auth middleware",
		})
	})

	server.GET("/test/admin", middleware.AuthMiddleware(), middleware.RequireRole(models.AdminRole), func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Test auth role admin",
		})
	})

	// user
	server.POST("/add-user", handler.User.AddUser)
	server.GET("/find-all-user", handler.User.FindAllUser)

}
