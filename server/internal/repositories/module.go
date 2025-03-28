package repositories

import (
	"context"
	"hackathon/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type ModuleRepo struct {
	*BaseRepo[models.Modules]
}

func NewModuleRepo(DB *gorm.DB) *ModuleRepo {
	return &ModuleRepo{
		BaseRepo: NewBaseRepo[models.Modules](DB),
	}
}

func (r *ModuleRepo) GetByCourseID(ctx context.Context, courseID uuid.UUID) ([]models.Modules, error) {
	var modules []models.Modules
	err := r.DB.WithContext(ctx).Where("course_id = ?", courseID).Find(&modules).Error
	if err != nil {
		return nil, err
	}
	return modules, nil
}
