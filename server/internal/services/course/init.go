package course

import (
	"hackathon/internal/repositories"

	"gorm.io/gorm"
)

type Resolver struct {
	CourseRepo     *repositories.CourseRepo
	UserCourseRepo *repositories.UserCourseRepo
}

func NewResolver(db *gorm.DB) *Resolver {
	return &Resolver{
		CourseRepo:     repositories.NewCourseRepo(db),
		UserCourseRepo: repositories.NewUserCourseRepo(db),
	}
}
