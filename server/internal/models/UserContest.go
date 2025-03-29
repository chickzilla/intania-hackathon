package models

import (
	"time"

	"github.com/google/uuid"
)

type UserContest struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID    uuid.UUID `gorm:"type:uuid;not null"`
	ContestID uuid.UUID `gorm:"type:uuid;not null"`
	CreatedAt time.Time `gorm:"type:timestamp;default:now()"`

	User    *User     `gorm:"foreignKey:UserID;references:ID"`
	Contest *Contests `gorm:"foreignKey:ContestID;references:ID"`
}
