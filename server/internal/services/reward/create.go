package reward

import (
	"hackathon/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type CreateRewardRequest struct {
	Name     string `json:"name"`
	Detail   string `json:"detail"`
	ImageURL string `json:"image_url"`
	Point    int    `json:"point"`
}

func (r *Resolver) Create(c *gin.Context) {
	var req CreateRewardRequest
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

	newReward := models.Reward{
		Name:      req.Name,
		Detail:    req.Detail,
		ImageURL:  req.ImageURL,
		Point:    req.Point,
		CreatedBy: idParsed,
		UpdatedBy: idParsed,
	}

	if err := r.RewardRepo.AddOne(c, &newReward); err != nil {
		c.JSON(500, gin.H{"error": "could not create reward"})
		return
	}

	newUserReward := models.UserReward{
		UserID:   idParsed,
		RewardID: newReward.ID,
	}
	if err := r.UserReward.AddOne(c, &newUserReward); err != nil {
		c.JSON(500, gin.H{"error": "could not create user reward"})
		return
	}

	c.JSON(200, newReward)
}
