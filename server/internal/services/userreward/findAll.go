package userreward

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func (r *Resolver) FindAll(c *gin.Context) {
	idStr, _ := c.Get("id")
	idParsed, err := uuid.Parse(idStr.(string))
	if err != nil {
		c.JSON(400, gin.H{"error": "invalid user ID"})
		return
	}

	model, err := r.UserRewardRepo.FindAllByUserId(c, idParsed)
	var ids []uuid.UUID
	for _, element := range *model {
		ids = append(ids, element.RewardID)
	}

	models, err := r.RewardRepo.FindByIDs(c, ids)

	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"result": models})
	return
}
