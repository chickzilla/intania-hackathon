package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Courses struct {
	ID         uuid.UUID `gorm:"column:id;type:uuid;primary_key;default:gen_random_uuid()"`
	Name       string    `gorm:"not null"`
	Detail     string
	Created_at time.Time `gorm:"type:timestamp;default:now()"`
	Created_by uuid.UUID
	LecturerID uuid.UUID `gorm:"column:lecturer_id;type:uuid;not null"`
	User       *User     `gorm:"foreignKey:LecturerID;references:ID"`
}

func MigrateCourses(db *gorm.DB) error {
	return db.AutoMigrate(&Courses{})
}

func init() {
	utils.RegisterMigrations(MigrateCourses)
}
