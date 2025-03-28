package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Contests struct {
	ID      uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name    string    `gorm:"not null"`
	Detail  string    `gorm:"not null"`
	StartAt time.Time `gorm:"column:start_at;not null"`
	EndAt   time.Time `gorm:"column:end_at;not null"`
}

func MigrateContests(db *gorm.DB) error {
	return db.AutoMigrate(&Contests{})
}

func init() {
	utils.RegisterMigrations(MigrateContests)
}
