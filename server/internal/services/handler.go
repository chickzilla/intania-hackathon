package services

import (
	"hackathon/internal/services/auth"
	"hackathon/internal/services/user"

	"gorm.io/gorm"
)

type Handler struct {
	Auth *auth.Resolver
	User *user.Resolver
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{
		Auth: auth.NewResolver(db),
		User: user.NewResolver(db),
	}
}
