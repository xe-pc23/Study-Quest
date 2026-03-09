import SiteHeader from "@/components/SiteHeader";
import TaskForm from "@/components/TaskForm";

export default function EditTaskPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container form-layout">
          <section>
            <div className="page-header compact">
              <div>
                <span className="eyebrow">Edit Task</span>
                <h1>タスクを編集する</h1>
                <p className="page-description">更新系 API を作った後に、この見た目へデータを流し込む想定です。</p>
              </div>
            </div>
            <TaskForm mode="edit" />
          </section>

          <aside className="side-panel">
            <div className="panel-card sticky-card">
              <span className="eyebrow">編集時の視点</span>
              <h2>確認するとよいこと</h2>
              <ul className="check-list">
                <li>ID は URL から取るか</li>
                <li>初期表示で詳細取得が必要か</li>
                <li>更新後に一覧へ戻すか詳細へ戻すか</li>
                <li>バリデーションメッセージをどこに出すか</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
