package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type AchievementRepo struct {
	*BaseRepo[models.Achievement]
}

func NewAchievementRepo(DB *gorm.DB) *AchievementRepo {
	return &AchievementRepo{
		BaseRepo: NewBaseRepo[models.Achievement](DB),
	}
}
