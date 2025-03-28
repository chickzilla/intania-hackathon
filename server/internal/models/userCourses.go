package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserCourses struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID    uuid.UUID `gorm:"type:uuid;not null"`
	CourseID  uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`

	User   *User    `gorm:"foreignKey:UserID;references:ID"`
	Course *Courses `gorm:"foreignKey:CourseID;references:ID"`
}

func MigrateUserCourse(db *gorm.DB) error {
	return db.AutoMigrate(&UserCourses{})
}

func init() {
	utils.RegisterMigrations(MigrateUserCourse)
}
