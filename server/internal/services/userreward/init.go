package userreward

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	UserRepo       *repositories.UserRepo
	UserRewardRepo *repositories.UserRewardRepo
	RewardRepo     *repositories.RewardRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		UserRepo:       repositories.NewUserRepo(db),
		UserRewardRepo: repositories.NewUserRewardRepo(db),
		RewardRepo:     repositories.NewRewardRepo(db),
	}
}
