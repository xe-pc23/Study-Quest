package router

import (
	"study_quest/backend/internal/handler"

	"github.com/labstack/echo/v4"
)

func NewRouter(taskHandler *handler.TaskHandler) *echo.Echo { //引数にハンドラー追加
	e := echo.New()

	e.GET("/health", func(c echo.Context) error {
		return c.JSON(200, map[string]string{
			"message": "ok",
		})
	})

	e.GET("/api/tasks", taskHandler.GetTasks) //ルートの追加

	return e //e.GETでルート設定済みのeを返しているのと最初のecho.New()
}
