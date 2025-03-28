package module

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	ModuleRepo *repositories.ModuleRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		ModuleRepo: repositories.NewModuleRepo(db),
	}
}
