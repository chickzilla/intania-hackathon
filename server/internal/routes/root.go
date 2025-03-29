package routes

import (
	"hackathon/internal/middleware"
	"hackathon/internal/services"
	"hackathon/internal/services/s3"
	"hackathon/internal/utils"

	"github.com/gin-gonic/gin"
)

func ConfigRouters(server *gin.Engine) {
	db := utils.GetDatabase()
	handler := services.NewHandler(db)
	// auth
	server.POST("/auth/sign-up", handler.Auth.SignUp)
	server.POST("/auth/sign-in", handler.Auth.SignIn)

	//upload
	server.POST("/upload", s3.Upload)

	// course
	courseGroup := server.Group("/course")
	courseGroup.Use(
		middleware.AuthMiddleware(),
	)
	courseGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Course.Create)

	courseGroup.POST("/join",
		middleware.AuthMiddleware(),
		handler.Course.JoinCourse)

	// module
	moduleGroup := server.Group("/module")
	moduleGroup.Use(
		middleware.AuthMiddleware(),
	)
	moduleGroup.POST("/create",
		middleware.RequireRoles("LECTURER", "ADMIN"),
		handler.Module.Create)
	moduleGroup.GET("/find-one",
		handler.Module.FindByID)
	moduleGroup.GET("/course-module",
		handler.Module.FindAllInCourse)

	// user
	userGroup := server.Group("/user")
	userGroup.POST("/add-user", handler.User.AddUser) // register?
	userGroup.GET("/find-all-user", handler.User.FindAllUser)
	userGroup.GET("/ranking", handler.User.GetRank)
	userGroup.POST("/add-point", middleware.AuthMiddleware(),
		handler.User.AddPoint)
	userGroup.GET("/getme", middleware.AuthMiddleware(), handler.User.GetMe)
	userGroup.GET("/leaderboard", handler.User.GetLeaderBoard)

	// contest
	contestGroup := server.Group("/contest")
	contestGroup.Use(middleware.AuthMiddleware())
	contestGroup.POST("/create", handler.Contest.AddContest)
	contestGroup.POST("/find-by-status", handler.Contest.FindByStatus)
	// middleware.RequireRoles("LECTURER"),

	// participant
	participantGroup := server.Group("/participant")
	participantGroup.Use(middleware.AuthMiddleware())
	participantGroup.POST("/join", handler.Participant.JoinContest)

	// Achievement
	achievementGroup := server.Group("/achievement")
	achievementGroup.Use(middleware.AuthMiddleware())
	achievementGroup.POST("/createAchievement", middleware.RequireRoles("ADMIN"), handler.Achievement.AddAchievement)
	achievementGroup.GET("/allAchievement", handler.Achievement.FindAllAchievement)

	//UserAchievement
	userAchievementGroup := server.Group("/userAchievement")
	userAchievementGroup.Use(middleware.AuthMiddleware())
	userAchievementGroup.POST("/userGetAchievement", middleware.RequireRoles("ADMIN"), handler.UserAchievement.UserGetAchievement)
	userAchievementGroup.GET("/allUserAchievement", handler.UserAchievement.FindAchievementById)

	//reward
	rewardGroup := server.Group("/reward")
	rewardGroup.Use(middleware.AuthMiddleware())
	rewardGroup.POST("/create",
		middleware.RequireRoles("ADMIN", "LECTURER"),
		handler.Reward.Create)
	rewardGroup.GET("/find-one",
		handler.Reward.FindByID)
	rewardGroup.GET("/user-reward",
		handler.Reward.FindAllByUserId)
	rewardGroup.GET("/find-all",
		handler.Reward.FindAll)
	rewardGroup.POST("/claim",
		middleware.AuthMiddleware(),
		handler.Reward.Claim)

	// user reward
	userRewardGroup := server.Group("/user-reward")
	userRewardGroup.Use(middleware.AuthMiddleware())
	userRewardGroup.GET("/reward", handler.UserReward.FindAll)

	videoGroup := server.Group("/video")
	videoGroup.POST("/upload", handler.Video.UploadVideo)
}
