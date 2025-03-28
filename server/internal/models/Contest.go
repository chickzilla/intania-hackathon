package models

import (
	"time"

	"github.com/google/uuid"
)

type Contest struct {
	ID      uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name    string
	Detail  string
	StartAt time.Time
	EndAt   time.Time
}
