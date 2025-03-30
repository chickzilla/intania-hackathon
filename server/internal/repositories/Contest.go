package repositories

import (
	"context"
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type ContestRepo struct {
	*BaseRepo[models.Contests]
}

func NewContestRepo(DB *gorm.DB) *ContestRepo {
	return &ContestRepo{
		BaseRepo: NewBaseRepo[models.Contests](DB),
	}
}

func (r *ContestRepo) FindByStatus(ctx context.Context, status string) ([]models.Contests, error) {
	var contests []models.Contests
	if err := r.DB.WithContext(ctx).
		Where("status = ?", status).
		Find(&contests).Error; err != nil {
		return nil, err
	}
	return contests, nil
}
