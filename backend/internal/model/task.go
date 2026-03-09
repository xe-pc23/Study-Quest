package model

import "time"

type Task struct {
	ID             uint      `json:"id" gorm:"primaryKey"`
	Title          string    `json:"title"`
	Description    string    `json:"description"`
	Status         string    `json:"status"`
	Category       string    `json:"category"`
	Priority       int       `json:"priority"`
	StudyMinutes   int       `json:"study_minutes"`
	AttachmentPath string    `json:"attachment_path"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
}
