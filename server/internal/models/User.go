package models

import (
	"hackathon/internal/utils"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

const (
	StudentRole  string = "STUDENT"
	LecturerRole string = "LECTURER"
	AdminRole    string = "ADMIN"
)

type User struct {
	ID        uuid.UUID  `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	FullName  string     `gorm:"type:varchar(50);not null"`
	Email     string     `gorm:"type:varchar(100);not null"`
	Password  string     `gorm:"type:varchar(100);not null"`
	UserRole  string     `gorm:"type:varchar(10);not null"`
	RankPoint int64      `gorm:"type:int;not null"`
	Point     int64      `gorm:"type:int;not null"`
	CreatedAt *time.Time `gorm:"type:timestamp;default:now()"`
	UpdatedAt *time.Time `gorm:"type:timestamp;default:now()"`
}

func MigrateUser(db *gorm.DB) error {
	return db.AutoMigrate(&User{})
}

/* func MigrateUserRoleEnum(db *gorm.DB) error {
	return db.Exec(`
		DO $$
		BEGIN
			IF NOT EXISTS (
				SELECT 1 FROM pg_type WHERE typname = 'user_role'
			) THEN
				CREATE TYPE user_role AS ENUM ('STUDENT', 'LECTURER', 'ADMIN');
			END IF;
		END
		$$;
	`).Error
} */

func init() {
	utils.RegisterMigrations(MigrateUser)
}
