import SiteHeader from "@/components/SiteHeader";
import TaskCard from "@/components/TaskCard";

const tasks = [
  {
    id: 1,
    title: "Echo でタスク一覧 API を作る",
    description: "ルーティング、JSON レスポンス、クエリパラメータの受け取り方を確認する。",
    status: "doing",
    category: "Web",
    priority: 3,
    studyMinutes: 90,
    updatedAt: "2026-03-09",
  },
  {
    id: 2,
    title: "GORM で tasks テーブルを作成する",
    description: "モデル定義とマイグレーションの流れを理解する。まずは Task のみで始める。",
    status: "todo",
    category: "DB",
    priority: 2,
    studyMinutes: 60,
    updatedAt: "2026-03-08",
  },
  {
    id: 3,
    title: "独自エラーと errors.Is / errors.As を復習する",
    description: "後で API のエラーハンドリングに活かすため、エラーの分類を整理しておく。",
    status: "done",
    category: "Go基礎",
    priority: 1,
    studyMinutes: 45,
    updatedAt: "2026-03-07",
  },
];

export default function TasksPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container">
          <div className="page-header">
            <div>
              <span className="eyebrow">Task List</span>
              <h1>学習タスク一覧</h1>
              <p className="page-description">検索・絞り込み・一覧表示の見た目を先に確認するための Next.js 版モックです。</p>
            </div>
          </div>

          <section className="dashboard-grid">
            <aside className="sidebar-card">
              <div className="sidebar-section">
                <h2>検索</h2>
                <label className="field-label" htmlFor="keyword">キーワード</label>
                <input id="keyword" className="text-input" type="text" placeholder="例: Echo / GORM / バリデーション" />
              </div>

              <div className="sidebar-section">
                <h2>ステータス</h2>
                <div className="chip-group">
                  <button className="chip active" type="button">すべて</button>
                  <button className="chip" type="button">未着手</button>
                  <button className="chip" type="button">進行中</button>
                  <button className="chip" type="button">完了</button>
                </div>
              </div>

              <div className="sidebar-section">
                <h2>カテゴリ</h2>
                <div className="chip-group vertical">
                  <button className="chip active" type="button">Go基礎</button>
                  <button className="chip" type="button">Web</button>
                  <button className="chip" type="button">DB</button>
                  <button className="chip" type="button">Docker</button>
                  <button className="chip" type="button">Redis</button>
                </div>
              </div>
            </aside>

            <section>
              <div className="summary-strip">
                <article className="summary-card">
                  <span>総タスク数</span>
                  <strong>12</strong>
                </article>
                <article className="summary-card">
                  <span>進行中</span>
                  <strong>4</strong>
                </article>
                <article className="summary-card">
                  <span>今週の学習時間</span>
                  <strong>360分</strong>
                </article>
              </div>

              <div className="task-list-header">
                <h2>表示中のタスク</h2>
                <p>フロント接続後はここに API の結果を描画する想定です。</p>
              </div>

              <div className="task-list">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
