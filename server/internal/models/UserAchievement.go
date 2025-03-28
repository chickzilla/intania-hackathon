package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserAchievement struct {
	ID            uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID        uuid.UUID `gorm:"type:uuid;not null"`
	AchievementID uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt     time.Time `gorm:"type:timestamp;default:now()"`

	User        *User        `gorm:"foreignKey:UserID;references:ID"`
	Achievement *Achievement `gorm:"foreignKey:AchievementID;references:ID"`
}

func MigrateUserAchievement(db *gorm.DB) error {
	return db.AutoMigrate(&UserAchievement{})
}

func init() {
	utils.RegisterMigrations(MigrateUserAchievement)
}
