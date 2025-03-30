package repositories

import (
	"context"
	"fmt"
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

func (r *UserContestRepo) UpsertUserContest(
	ctx context.Context,
	userID, contestID uuid.UUID,
	newStatus string,
) error {
	var existing models.UserContest

	err := r.DB.WithContext(ctx).
		Where("user_id = ? AND contest_id = ?", userID, contestID).
		First(&existing).Error

	fmt.Println("existing ", err)
	if err == nil {
		// Found → update
		existing.UserStatus = newStatus
		return r.DB.WithContext(ctx).Save(&existing).Error
	}

	if err != nil && err != gorm.ErrRecordNotFound {
		// Real error
		return err
	}

	// Not found → create
	newUserContest := models.UserContest{
		UserID:     userID,
		ContestID:  contestID,
		UserStatus: newStatus,
	}
	return r.DB.WithContext(ctx).Create(&newUserContest).Error
}
