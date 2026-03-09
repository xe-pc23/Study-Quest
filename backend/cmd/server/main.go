package main

import (
	"study_quest/backend/internal/router"
)

func main() {
	e := router.NewRouter()
	e.Logger.Fatal(e.Start(":8080"))
}
