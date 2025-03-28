package module

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindAllInCourse(c *gin.Context) {

	courseID := c.Query("course_id")
	if courseID == "" {
		c.JSON(400, gin.H{"error": "moduleID is required"})
		return
	}

	id, err := uuid.Parse(courseID)
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid courseID"})
		return
	}
	modules, err := r.ModuleRepo.GetByCourseID(c, id)
	if err != nil {
		c.JSON(404, gin.H{"error": "modules not found"})
		return
	}

	c.JSON(200, modules)
}
