package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type UserAchievementRepo struct {
	*BaseRepo[models.UserAchievement]
}

func NewUserAchievementRepo(DB *gorm.DB) *UserAchievementRepo {
	return &UserAchievementRepo{
		BaseRepo: NewBaseRepo[models.UserAchievement](DB),
	}
}
