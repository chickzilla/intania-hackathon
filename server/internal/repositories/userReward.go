package repositories

import (
	"context"
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type UserRewardRepo struct {
	*BaseRepo[models.UserReward]
}

func NewUserRewardRepo(DB *gorm.DB) *UserRewardRepo {
	return &UserRewardRepo{
		BaseRepo: NewBaseRepo[models.UserReward](DB),
	}
}

func (ur *UserRewardRepo) FindAllByUserId(ctx context.Context, id any) (*[]models.UserReward, error) {
	var model []models.UserReward
	if err := ur.DB.WithContext(ctx).Where("user_id = ?", id).Find(&model).Error; err != nil {
		return nil, err
	}

	return &model, nil

}
