package repositories

import (
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
