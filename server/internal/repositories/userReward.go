package repositories

import (
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
