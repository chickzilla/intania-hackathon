package models

import (
	"hackathon/internal/utils"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Videos struct {
	ID       uuid.UUID `gorm:"column:id;type:uuid;primary_key;default:gen_random_uuid()"`
	Name     string    `gorm:"not null"`
	Order    uint8     `gorm:"not null"`
	S3URL    string    `gorm:"column:s3_url;not null"`
	ModuleID uuid.UUID `gorm:"column:module_id;type:uuid;not null"`
	Module   Modules   `gorm:"foreignKey:ModuleID;references:ID"`
}

func MigrateVideos(db *gorm.DB) error {
	return db.AutoMigrate(&Videos{})
}

func init() {
	utils.RegisterMigrations(MigrateVideos)
}
