package services

import (
	"hackathon/internal/services/auth"

	"gorm.io/gorm"
)

type Handler struct {
	Auth *auth.Resolver
}

func NewHandler(db *gorm.DB) *Handler {
	return &Handler{
		Auth: auth.NewResolver(db),
	}
}
