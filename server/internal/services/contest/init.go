package contest

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	UserRepo *repositories.UserRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		UserRepo: repositories.NewUserRepo(db),
	}
}
