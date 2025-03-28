package models

import (
	"hackathon/internal/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Participants struct {
	ContestID uuid.UUID `gorm:"type:uuid;primaryKey"`
	UserID    uuid.UUID `gorm:"type:uuid;primaryKey"`

	User     *User     `gorm:"foreignKey:UserID;references:ID"`
	Contests *Contests `gorm:"foreignKey:ContestID;references:ID"`
}

func MigrateParticipants(db *gorm.DB) error {
	return db.AutoMigrate(&Participants{})
}

func init() {
	utils.RegisterMigrations(MigrateParticipants)
}
