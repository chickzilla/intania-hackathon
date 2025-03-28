package repositories

import (
	"hackathon/internal/models"

	"gorm.io/gorm"
)

type UserCourseRepo struct {
	*BaseRepo[models.UserCourses]
}

func NewUserCourseRepo(DB *gorm.DB) *UserCourseRepo {
	return &UserCourseRepo{
		BaseRepo: NewBaseRepo[models.UserCourses](DB),
	}
}
