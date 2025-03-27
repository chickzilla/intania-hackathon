package models

import (
	"hackathon/internal/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID       uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Username string    `gorm:"not null"`
	Password string    `gorm:"not null"`
	Email    string    `gorm:"not null"`
	Tel      string    `gorm:""`
}

func MigrateUser(db *gorm.DB) error {
	return db.AutoMigrate(&User{})
}

func init() {
	utils.RegisterMigrations(MigrateUser)
}
