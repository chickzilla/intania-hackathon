package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserContest struct {
	ID         uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID     uuid.UUID `gorm:"type:uuid;not null"`
	UserStatus string    `gorm:"type:varchar(50);not null"`
	ContestID  uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt  time.Time `gorm:"type:timestamp;default:now()"`

	User    *User     `gorm:"foreignKey:UserID;references:ID"`
	Contest *Contests `gorm:"foreignKey:ContestID;references:ID"`
}

func MigrateUserContests(db *gorm.DB) error {
	return db.AutoMigrate(&UserContest{})
}

func init() {
	utils.RegisterMigrations(MigrateUserContests)
}
