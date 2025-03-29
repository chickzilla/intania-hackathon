package contest

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type FindByStatusRequest struct {
	Status string `json:"status"`
}

type ContestWithIsRegistered struct {
	models.Contests
	IsRegistered bool `json:"isRegistered"`
}

func (r *Resolver) FindByStatus(c *gin.Context) {
	var req FindByStatusRequest

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

	contests, err := r.ContestRepo.FindByStatus(c, req.Status)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	// Prepare map of registered contest IDs if user_id is provided
	registeredContestIDs := map[uuid.UUID]bool{}

	userContests, err := r.UserContestRepo.FindByUserID(c, idParsed)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	for _, uc := range userContests {
		registeredContestIDs[uc.ContestID] = true
	}

	// Transform to include isRegistered
	var response []ContestWithIsRegistered
	for _, contest := range contests {
		_, isRegistered := registeredContestIDs[contest.ID]
		response = append(response, ContestWithIsRegistered{
			Contests:     contest,
			IsRegistered: isRegistered, // false if user not provided
		})
	}

	c.JSON(200, response)
}
