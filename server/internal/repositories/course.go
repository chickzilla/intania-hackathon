package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type CourseRepo struct {
	*BaseRepo[models.Courses]
}

func NewCourseRepo(DB *gorm.DB) *CourseRepo {
	return &CourseRepo{
		BaseRepo: NewBaseRepo[models.Courses](DB),
	}
}
