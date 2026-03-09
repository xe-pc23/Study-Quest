package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// 　dbに接続
// ここでif err != nilのエラーハンドリングをしていない理由は、NewDB()呼び出し元でするから。
func NewDB() (*gorm.DB, error) {
	dsn := "user:password@tcp(localhost:3306)/study_quest?charset=utf8mb4&parseTime=True&loc=Local"
	return gorm.Open(mysql.Open(dsn), &gorm.Config{}) //戻り値2つ*gorm.DB error。接続したDB本体と接続時のエラー
}
