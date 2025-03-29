package usercontest

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	ContestRepo     *repositories.ContestRepo
	UserRepo        *repositories.UserRepo
	UserContestRepo *repositories.UserContestRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		ContestRepo:     repositories.NewContestRepo(db),
		UserRepo:        repositories.NewUserRepo(db),
		UserContestRepo: repositories.NewUserContestRepo(db),
	}
}
