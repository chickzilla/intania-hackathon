package contest

import (
	"hackathon/internal/models"
	"time"

	"github.com/gin-gonic/gin"
)

type CreateContestRequest struct {
	Title           string    `json:"title"`
	Description     string    `json:"description"`
	Details         string    `json:"details"`
	Requirements    string    `json:"requirements"`
	Rule            string    `json:"rule"`
	JudgingCriteria string    `json:"judgingCriteria"`
	Level           string    `json:"level"`
	Status          string    `json:"status"`
	Point           int       `json:"point"`
	RankingPoint    int       `json:"rankingPoint"`
	StartDate       time.Time `json:"startDate"`
	EndDate         time.Time `json:"endDate"`
}

func (r *Resolver) AddContest(c *gin.Context) {
	var req CreateContestRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	/* organizerUUID, err := uuid.Parse(req.OrganizerID)
	if err != nil {
		c.JSON(400, gin.H{"error": "Invalid organizer ID"})
		return
	} */

	model := models.Contests{
		Title:           req.Title,
		Description:     req.Description,
		Details:         req.Details,
		Requirements:    req.Requirements,
		Rule:            req.Rule,
		JudgingCriteria: req.JudgingCriteria,
		//OrganizerID:     organizerUUID,
		Level:        req.Level,
		Status:       req.Status,
		Point:        req.Point,
		RankingPoint: req.RankingPoint,
		StartDate:    req.StartDate,
		EndDate:      req.EndDate,
	}

	if err := r.ContestRepo.AddOne(c, &model); err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"message": "success"})
}

//example of RFC3339 format : 2025-03-29T14:45:00Z
