package repositories

import (
	"context"
	"hackathon/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type RewardRepo struct {
	*BaseRepo[models.Reward]
}

func NewRewardRepo(DB *gorm.DB) *RewardRepo {
	return &RewardRepo{
		BaseRepo: NewBaseRepo[models.Reward](DB),
	}
}

func (r *RewardRepo) FindAllByUserID(ctx context.Context, userID uuid.UUID) ([]models.Reward, error) {
	var rewards []models.Reward

	err := r.DB.WithContext(ctx).
		Joins("JOIN user_rewards ur ON ur.reward_id = rewards.id").
		Where("ur.user_id = ?", userID).
		Find(&rewards).Error

	if err != nil {
		return nil, err
	}

	return rewards, nil
}
