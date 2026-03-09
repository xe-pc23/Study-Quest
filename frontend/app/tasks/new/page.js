import SiteHeader from "@/components/SiteHeader";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container form-layout">
          <section>
            <div className="page-header compact">
              <div>
                <span className="eyebrow">Create Task</span>
                <h1>新しい学習タスクを作成</h1>
                <p className="page-description">このページは見た目のみ作成済みです。送信処理は自分で実装してください。</p>
              </div>
            </div>
            <TaskForm mode="create" />
          </section>

          <aside className="side-panel">
            <div className="panel-card sticky-card">
              <span className="eyebrow">入力のヒント</span>
              <h2>最初はシンプルで OK</h2>
              <ul className="check-list">
                <li>タイトルは必須にする</li>
                <li>ステータスの初期値は `todo` 相当でよい</li>
                <li>カテゴリは文字列で持つと実装しやすい</li>
                <li>アップロードは後からつなげてもよい</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
