package repositories

import (
	"context"
	"hackathon/internal/models"

	"github.com/google/uuid"
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

func (ua *UserAchievementRepo) FindAchievementById(ctx context.Context, id uuid.UUID) (*[]models.UserAchievement, error) {
	var models []models.UserAchievement
	if err := ua.DB.WithContext(ctx).Where("user_id = ?", id).Find(&models).Error; err != nil {
		return nil, err
	}
	return &models, nil
}
