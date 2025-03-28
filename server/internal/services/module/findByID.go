package module

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindByID(c *gin.Context) {
	moduleIDStr := c.Query("id")
	if moduleIDStr == "" {
		c.JSON(400, gin.H{"error": "moduleID is required"})
		return
	}

	moduleID, err := uuid.Parse(moduleIDStr)
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid moduleID"})
		return
	}

	module, err := r.ModuleRepo.FindOneByID(c, moduleID)
	if err != nil {
		c.JSON(404, gin.H{"error": "module not found"})
		return
	}

	c.JSON(200, module)
}
