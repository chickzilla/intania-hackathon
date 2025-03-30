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
	IsFinished   bool `json:"isFinished"`
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

	userContests, err := r.UserContestRepo.FindByUserID(c, idParsed)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	// Build maps for registered and finished contests
	registeredContestIDs := map[uuid.UUID]bool{}
	finishedContestIDs := map[uuid.UUID]bool{}

	for _, uc := range userContests {
		registeredContestIDs[uc.ContestID] = true
		if uc.UserStatus == "FINISHED" {
			finishedContestIDs[uc.ContestID] = true
		}
	}

	// Compose response with both flags
	var response []ContestWithIsRegistered
	for _, contest := range contests {
		_, isRegistered := registeredContestIDs[contest.ID]
		_, isFinished := finishedContestIDs[contest.ID]

		response = append(response, ContestWithIsRegistered{
			Contests:     contest,
			IsRegistered: isRegistered,
			IsFinished:   isFinished,
		})
	}

	c.JSON(200, response)
}
