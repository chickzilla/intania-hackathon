package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserTasks struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID    uuid.UUID `gorm:"type:uuid;not null"`
	TaskID    uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`

	User  *User  `gorm:"foreignKey:UserID;references:ID"`
	Tasks *Tasks `gorm:"foreignKey:TaskID;references:ID"`
}

func MigrateUserTasks(db *gorm.DB) error {
	return db.AutoMigrate(&UserTasks{})
}

func init() {
	utils.RegisterMigrations(MigrateUserTasks)
}
