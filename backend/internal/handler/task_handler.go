package handler

//JSONを返す担当。DBの操作とかは書かない
import (
	"net/http"
	"study_quest/backend/internal/service"

	"github.com/labstack/echo/v4"
)

type TaskHandler struct {
	taskService *service.TaskService
}

func NewTaskHandler(taskService *service.TaskService) *TaskHandler {
	return &TaskHandler{taskService: taskService}
}

func (h *TaskHandler) GetTasks(c echo.Context) error {
	tasks, err := h.taskService.GetTasks()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{
			"message": "failed to fetch tasks",
		})
	}
	return c.JSON(http.StatusOK, tasks)
}
