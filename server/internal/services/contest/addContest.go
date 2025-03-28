package contest

import "github.com/gin-gonic/gin"

type AddContestRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (r *Resolver) AddContest(c *gin.Context) {

}
