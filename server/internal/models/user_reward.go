package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserReward struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID    uuid.UUID `gorm:"type:uuid;not null"`
	RewardID  uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`

	User   *User   `gorm:"foreignKey:UserID;references:ID"`
	Reward *Reward `gorm:"foreignKey:RewardID;references:ID"`
}

func MigrateUserReward(db *gorm.DB) error {
	return db.AutoMigrate(&UserReward{})
}

func init() {
	utils.RegisterMigrations(MigrateUserReward)
}
