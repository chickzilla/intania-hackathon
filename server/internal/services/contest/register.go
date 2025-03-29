package contest

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type JoinContestRequest struct {
	ContestID uuid.UUID `json:"contest_id"`
	NewStatus string    `json:"new_status"`
}

func (r *Resolver) Register(c *gin.Context) {

	var req JoinContestRequest
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

	newUserContest := models.UserContest{
		UserID:     idParsed,
		ContestID:  req.ContestID,
		UserStatus: req.NewStatus,
	}

	if err := r.UserContestRepo.AddOne(c, &newUserContest); err != nil {
		c.JSON(500, gin.H{"error": "could not register contest"})
		return
	}

	c.JSON(200, gin.H{"message": "successfully registered contest"})

}
