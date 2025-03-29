package participant

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type JoinContestRequest struct {
	ContestID string `json:"contest_id"`
}

func (r *Resolver) JoinContest(c *gin.Context) {
	var req JoinContestRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	user_id, user_exist := c.Get("id")
	user_role, role_exist := c.Get("role")

	if !user_exist && !role_exist {
		c.JSON(400, gin.H{"message": "user_id or user_role are not found"})
		return
	}

	if user_role != "STUDENT" {
		c.JSON(400, gin.H{"message": "This contest is for student"})
		return
	}
	contest_id, _ := uuid.Parse(req.ContestID)
	user_id_2, _ := uuid.Parse(user_id.(string))
	model := models.Participants{
		ContestID: contest_id,
		UserID:    user_id_2,
	}

	if err := r.ParticipantRepo.AddOne(c, &model); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success"})
	return

}
