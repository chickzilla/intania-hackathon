package services

import (
	"hackathon/internal/services/auth"
	"hackathon/internal/services/contest"
	"hackathon/internal/services/course"
	"hackathon/internal/services/module"
	"hackathon/internal/services/participant"
	"hackathon/internal/services/reward"
	"hackathon/internal/services/user"

	"gorm.io/gorm"
)

type Handler struct {
	Auth        *auth.Resolver
	User        *user.Resolver
	Contest     *contest.Resolver
	Course      *course.Resolver
	Module      *module.Resolver
	Participant *participant.Resolver
	Reward  *reward.Resolver
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{
		Auth:        auth.NewResolver(db),
		User:        user.NewResolver(db),
		Contest:     contest.NewResolver(db),
		Course:      course.NewResolver(db),
		Module:      module.NewResolver(db),
		Participant: participant.NewResolver(db),
		Reward:  reward.NewResolver(db),
	}
}
