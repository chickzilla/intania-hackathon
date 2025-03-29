package userachievement

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	UserAchievementRepo *repositories.UserAchievementRepo
	AchievementRepo     *repositories.AchievementRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		UserAchievementRepo: repositories.NewUserAchievementRepo(db),
		AchievementRepo:     repositories.NewAchievementRepo(db),
	}
}
