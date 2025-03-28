package services

import (
	"hackathon/internal/services/auth"
	"hackathon/internal/services/user"
	"hackathon/internal/services/course"

	"gorm.io/gorm"
)

type Handler struct {
	Auth *auth.Resolver
	User *user.Resolver
	Course *course.Resolver
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{
		User: user.NewResolver(db),
		Auth: auth.NewResolver(db),
		Course: course.NewResolver(db),
	}
}
