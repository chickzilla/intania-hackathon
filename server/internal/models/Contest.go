package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Contests struct {
	ID              uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()" json:"id"`
	Title           string    `gorm:"not null" json:"title"`
	Description     string    `gorm:"not null" json:"description"`
	Details         string    `gorm:"not null" json:"details"`
	Requirements    string    `gorm:"not null" json:"requirements"`
	Rule            string    `gorm:"not null" json:"rule"`
	JudgingCriteria string    `gorm:"not null" json:"judgingCriteria"`
	Level           string    `gorm:"type:varchar(50);not null" json:"level"`
	Status          string    `gorm:"type:varchar(50);not null" json:"status"`
	Point           int       `gorm:"not null" json:"point"`
	RankingPoint    int       `gorm:"not null" json:"rankingPoint"`
	StartDate       time.Time `gorm:"column:start_at;not null" json:"startDate"`
	EndDate         time.Time `gorm:"column:end_at;not null" json:"endDate"`
}

func MigrateContests(db *gorm.DB) error {
	return db.AutoMigrate(&Contests{})
}

func init() {
	utils.RegisterMigrations(MigrateContests)
}
