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
