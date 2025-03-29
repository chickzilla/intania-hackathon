package video

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	VideoRepo *repositories.VideoRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		VideoRepo: repositories.NewVideoRepo(db),
	}
}
