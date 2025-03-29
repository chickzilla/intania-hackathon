package contest

import (
	"github.com/gin-gonic/gin"
)

type FindByStatusRequest struct {
	Status string `json:"status"`
}

func (r *Resolver) FindByStatus(c *gin.Context) {
	var req FindByStatusRequest

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	contests, err := r.ContestRepo.FindByStatus(c, req.Status)
	if err != nil {
		c.JSON(500, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, contests)
}
