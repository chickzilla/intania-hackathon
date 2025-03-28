package repositories

import (
	"context"

	"gorm.io/gorm"
)

type BaseRepo[T any] struct {
	DB *gorm.DB
}

func NewBaseRepo[T any](DB *gorm.DB) *BaseRepo[T] {
	return &BaseRepo[T]{DB}
}

func (r *BaseRepo[T]) AddOne(ctx context.Context, model *T) error {
	return r.DB.WithContext(ctx).Create(model).Error
}

func (r *BaseRepo[T]) AdDBatch(ctx context.Context, models []*T) error {
	return r.DB.WithContext(ctx).Create(&models).Error
}

func (r *BaseRepo[T]) UpdateOne(ctx context.Context, model *T) error {
	return r.DB.WithContext(ctx).Save(model).Error
}

func (r *BaseRepo[T]) DeleteOneByID(ctx context.Context, id any) error {
	var model T
	return r.DB.WithContext(ctx).Delete(&model, id).Error
}

func (r *BaseRepo[T]) FindOneByID(ctx context.Context, id any) (*T, error) {
	var model T
	if err := r.DB.WithContext(ctx).First(&model, id).Error; err != nil {
		return nil, err
	}
	return &model, nil
}

func (r *BaseRepo[T]) FindByIDs(ctx context.Context, ids []any) ([]*T, error) {
	var models []*T
	if err := r.DB.WithContext(ctx).Find(&models, ids).Error; err != nil {
		return nil, err
	}
	return models, nil
}

func (r *BaseRepo[T]) FindAll(ctx context.Context) (*[]T, error) {
	var model []T
	if err := r.DB.WithContext(ctx).Find(&model).Error; err != nil {
		return nil, err
	}
	return &model, nil
}
