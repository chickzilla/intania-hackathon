package course

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type JoinCourseRequest struct {
	CourseID uuid.UUID `json:"course_id"`
}

func (r *Resolver) JoinCourse(c *gin.Context) {

	var req JoinCourseRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	idStr, _ := c.Get("id")
	idParsed, err := uuid.Parse(idStr.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid user ID"})
		return
	}

	newUserCouse := models.UserCourses{
		UserID:   idParsed,
		CourseID: req.CourseID,
	}

	if err := r.UserCourseRepo.AddOne(c, &newUserCouse); err != nil {
		c.JSON(500, gin.H{"error": "could not join course"})
		return
	}

	c.JSON(200, gin.H{"message": "successfully joined course"})

}
