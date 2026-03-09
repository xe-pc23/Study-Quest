package main

import (
	"log"
	"study_quest/backend/internal/database"
	"study_quest/backend/internal/model"
	"study_quest/backend/internal/router"
)

func main() {
	//DBに接続するやつ
	db, err := database.NewDB()
	if err != nil {
		log.Fatal(err)
	}

	if err := db.AutoMigrate(&model.Task{}); err != nil {
		log.Fatal(err)
	}

	//routerの中で作った 戻り値
	e := router.NewRouter()
	e.Logger.Fatal(e.Start(":8080"))
}
