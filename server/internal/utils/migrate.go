package utils

import "gorm.io/gorm"

var modelRegistry []func(db *gorm.DB) error

func RegisterMigrations(migrator func(db *gorm.DB) error) {
	modelRegistry = append(modelRegistry, migrator)
}

func AutoMigrateAll(db *gorm.DB) error {
	for _, migrate := range modelRegistry {
		if err := migrate(db); err != nil {
			return err
		}
	}
	return nil
}
