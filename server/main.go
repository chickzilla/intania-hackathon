package main

import (
	"hackathon/internal/routes"
	"hackathon/internal/utils"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	utils.ConnectDatabase()
	server := gin.Default()

	port := os.Getenv("PORT")

	routes.ConfigRouters(server)
	if port == "" {
		port = "8080"
	}
	err := server.Run(":" + port)
	if err != nil {
		panic(err)
	}
}
