package achievement

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	AchievementRepo *repositories.AchievementRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		AchievementRepo: repositories.NewAchievementRepo(db),
	}
}
