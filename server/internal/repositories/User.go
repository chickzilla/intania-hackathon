package repositories

import (
	"context"
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type UserRepo struct {
	*BaseRepo[models.User]
}

func NewUserRepo(DB *gorm.DB) *UserRepo {
	return &UserRepo{
		BaseRepo: NewBaseRepo[models.User](DB),
	}
}

func (r *UserRepo) FindByUsername(ctx context.Context, username string) (*models.User, error) {
	var user models.User
	if err := r.DB.WithContext(ctx).Where("username = ?", username).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *UserRepo) FindByEmail(ctx context.Context, email string) (*models.User, error) {
	var user models.User
	if err := r.DB.WithContext(ctx).Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *UserRepo) GetRankPositionByRankPoint(ctx context.Context, rankPoint int64) (int64, error) {
	var count int64
	if err := r.DB.WithContext(ctx).
		Model(&models.User{}).
		Where("rank_point > ?", rankPoint).
		Count(&count).Error; err != nil {
		return 0, err
	}
	return count + 1, nil
}
