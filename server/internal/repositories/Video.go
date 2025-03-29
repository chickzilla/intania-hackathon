package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type VideoRepo struct {
	*BaseRepo[models.Videos]
}

func NewVideoRepo(DB *gorm.DB) *VideoRepo {
	return &VideoRepo{
		BaseRepo: NewBaseRepo[models.Videos](DB),
	}
}
