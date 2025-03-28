package models

import (
	"hackathon/internal/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Modules struct {
	ID       uuid.UUID `gorm:"column:id;type:uuid;primary_key;default:gen_random_uuid()"`
	Name     string    `gorm:"not null"`
	Detail   string    `gorm:""`
	Order    uint8     `gorm:"not null"`
	CourseID uuid.UUID `gorm:"column:course_id;type:uuid;not null"`
	Course   *Courses  `gorm:"foreignKey:CourseID;references:ID"`
}

func MigrateModules(db *gorm.DB) error {
	return db.AutoMigrate(&Modules{})
}

func init() {
	utils.RegisterMigrations(MigrateModules)
}
