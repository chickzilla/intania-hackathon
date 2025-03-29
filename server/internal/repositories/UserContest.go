package repositories

import (
	"hackathon/internal/models"

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
