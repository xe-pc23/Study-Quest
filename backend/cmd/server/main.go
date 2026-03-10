package main

import (
	"log"
	"study_quest/backend/internal/database"
	"study_quest/backend/internal/handler"
	"study_quest/backend/internal/model"
	"study_quest/backend/internal/repository"
	"study_quest/backend/internal/router"
	"study_quest/backend/internal/service"
)

func main() {
	//DBに接続するやつ
	db, err := database.NewDB()
	if err != nil {
		log.Fatal(err)
	}
	//modelのtask構造体をテーブルにする
	if err := db.AutoMigrate(&model.Task{}); err != nil {
		log.Fatal(err)
	}

	taskRepository := repository.NewTaskRepository(db)
	taskService := service.NewTaskService(taskRepository)
	taskHandler := handler.NewTaskHandler(taskService)

	//routerの中で作った 戻り値
	e := router.NewRouter(taskHandler) //引数追加
	e.Logger.Fatal(e.Start(":8080"))
}
