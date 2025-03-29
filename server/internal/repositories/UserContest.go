package repositories

import (
	"context"
	"hackathon/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type UserContestRepo struct {
	*BaseRepo[models.UserContest]
}

func NewUserContestRepo(DB *gorm.DB) *UserContestRepo {
	return &UserContestRepo{
		BaseRepo: NewBaseRepo[models.UserContest](DB),
	}
}

func (uc *UserContestRepo) FindByUserID(ctx context.Context, userID uuid.UUID) ([]models.UserContest, error) {
	var userContests []models.UserContest
	if err := uc.DB.WithContext(ctx).Where("user_id = ?", userID).Find(&userContests).Error; err != nil {
		return nil, err
	}
	return userContests, nil
}
