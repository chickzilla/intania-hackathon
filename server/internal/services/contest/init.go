package contest

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	ContestRepo     *repositories.ContestRepo
	UserContestRepo *repositories.UserContestRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		ContestRepo:     repositories.NewContestRepo(db),
		UserContestRepo: repositories.NewUserContestRepo(db),
	}
}
