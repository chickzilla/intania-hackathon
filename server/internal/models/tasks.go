package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Tasks struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	CourseID  uuid.UUID `gorm:"type:uuid;not null"`
	Name      string    `gorm:"type:varchar(50);not null"`
	Detail    string    `gorm:"type:varchar(255)"`
	EarnPoint int       `gorm:"type:int;not null"`

	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`
	UpdatedAt time.Time `gorm:"type:timestamp;default:now()"`
	CreatedBy uuid.UUID `gorm:"type:uuid;not null"`
	UpdatedBy uuid.UUID `gorm:"type:uuid;not null"`

	Course *Courses `gorm:"foreignKey:CourseID;references:ID"`
}

func MigrateTask(db *gorm.DB) error {
	return db.AutoMigrate(&Tasks{})
}

func init() {
	utils.RegisterMigrations(MigrateTask)
}
