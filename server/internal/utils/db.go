package utils

import (
	"fmt"
	"hackathon/internal/models"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	godotenv.Load()

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	DB = db

	if err := models.AutoMigrateAll(DB); err != nil {
		log.Fatal("Migration failed:", err)
	}

}

func GetDatabase() *gorm.DB {
	return DB
}

/* // TODO add new
func AutoMigrate() {
	if err := DB.AutoMigrate(&models.User{}); err != nil {
		log.Fatal("Failed to auto-migrate:", err)
	}
}
*/
