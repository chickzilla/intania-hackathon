package services

import (
	"hackathon/internal/services/auth"
	"hackathon/internal/services/contest"
	"hackathon/internal/services/course"
	"hackathon/internal/services/user"

	"gorm.io/gorm"
)

type Handler struct {
	Auth    *auth.Resolver
	User    *user.Resolver
	Contest *contest.Resolver
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{
		Auth:    auth.NewResolver(db),
		User:    user.NewResolver(db),
		Contest: contest.NewResolver(db),
		Course:  course.NewResolver(db),
	}
}
