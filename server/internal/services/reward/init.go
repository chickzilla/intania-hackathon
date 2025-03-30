package reward

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	RewardRepo *repositories.RewardRepo
	UserReward *repositories.UserRewardRepo
	UserRepo *repositories.UserRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		RewardRepo: repositories.NewRewardRepo(db),
		UserReward: repositories.NewUserRewardRepo(db),
		UserRepo: repositories.NewUserRepo(db),
	}
}
