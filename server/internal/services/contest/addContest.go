package contest

import (
	"hackathon/internal/models"
	"time"

	"github.com/gin-gonic/gin"
)

type CreateContestRequest struct {
	Name    string    `json:"name"`
	Detail  string    `json:"detail"`
	StartAt time.Time `json:"start_at"` //example of RFC3339 format : 2025-03-29T14:45:00Z
	EndAt   time.Time `json:"end_at"`   //example of RFC3339 format : 2025-03-29T14:45:00Z
}

func (r *Resolver) AddContest(c *gin.Context) {
	var req CreateContestRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	var model = models.Contests{
		Name:    req.Name,
		Detail:  req.Detail,
		StartAt: req.StartAt,
		EndAt:   req.EndAt,
	}

	if err := r.ContestRepo.AddOne(c, &model); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success"})
	return

}
