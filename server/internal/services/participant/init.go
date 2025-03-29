package participant

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	UserRepo        *repositories.UserRepo
	ContestRepo     *repositories.ContestRepo
	ParticipantRepo *repositories.ParticipantRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		UserRepo:        repositories.NewUserRepo(db),
		ContestRepo:     repositories.NewContestRepo(db),
		ParticipantRepo: repositories.NewParticipantRepo(db),
	}
}
