package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type ParticipantRepo struct {
	*BaseRepo[models.Participants]
}

func NewParticipantRepo(DB *gorm.DB) *ParticipantRepo {
	return &ParticipantRepo{
		BaseRepo: NewBaseRepo[models.Participants](DB),
	}
}
