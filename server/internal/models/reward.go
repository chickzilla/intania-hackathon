package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Reward struct {
	ID uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`

	Name     string `gorm:"type:varchar(50);not null"`
	Detail   string `gorm:"type:varchar(255)"`
	ImageURL string `gorm:"type:varchar(255)"`
	Point   int    `gorm:"type:int;not null"`

	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`
	UpdatedAt time.Time `gorm:"type:timestamp;default:now()"`

	CreatedBy uuid.UUID `gorm:"type:uuid;not null"`
	UpdatedBy uuid.UUID `gorm:"type:uuid;not null"`
}

func MigrateReward(db *gorm.DB) error {
	return db.AutoMigrate(&Reward{})
}

func init() {
	utils.RegisterMigrations(MigrateReward)
}
