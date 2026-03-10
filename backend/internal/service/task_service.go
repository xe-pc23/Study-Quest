package service

//ここではrepositoryを呼ぶ
import (
	"study_quest/backend/internal/model"
	"study_quest/backend/internal/repository"
)

type TaskService struct {
	taskRepository *repository.TaskRepository
}

func NewTaskService(taskRepository *repository.TaskRepository) *TaskService {
	return &TaskService{taskRepository: taskRepository}
}

func (s *TaskService) GetTasks() ([]model.Task, error) {
	return s.taskRepository.FindAll()
}
