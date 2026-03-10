package repository

//ここではDBを触る操作をまとめている
import (
	"study_quest/backend/internal/model"

	"gorm.io/gorm"
)

// Taskの保存、一覧取得、詳細取得する処理を書く場所//これDBの右側は型であってまだ空
type TaskRepository struct {
	db *gorm.DB //DB情報を入れるはこ
}

// 接続済みのDB情報を外部から引数でもらう
func NewTaskRepository(db *gorm.DB) *TaskRepository {
	return &TaskRepository{db: db} //右のはDBの接続情報（引数）
}

//mockを使用して引数で渡してテストできるメリットがある
//保守性

//つまりここでは構造体で作った箱に実体のデータを入れている↑

// O(n)　全件検索
func (r *TaskRepository) FindAll() ([]model.Task, error) {
	var tasks []model.Task
	err := r.db.Find(&tasks).Error
	return tasks, err
}
