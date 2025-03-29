package models

import (
	"hackathon/internal/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Achievement struct {
	ID     uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name   string    `gorm:"type:varchar(50)"`
	Detail string    `gorm:"type:varchar(255)"`
	//Level     int       `gorm:"type:int;not null"`
	// CreatedAt time.Time `gorm:"type:timestamp;default:now()"`
	// UpdatedAt time.Time `gorm:"type:timestamp;default:now()"`
	// CreatedBy uuid.UUID `gorm:"type:uuid;not null"`
	// UpdatedBy uuid.UUID `gorm:"type:uuid;not null"`
}

func MigrateAchievement(db *gorm.DB) error {
	return db.AutoMigrate(&Achievement{})
}

func init() {
	utils.RegisterMigrations(MigrateAchievement)
}
