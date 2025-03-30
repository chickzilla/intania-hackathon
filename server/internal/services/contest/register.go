package contest

import (
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

	if err := r.UserContestRepo.UpsertUserContest(c, idParsed, req.ContestID, req.NewStatus); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "contest registration updated"})
}
