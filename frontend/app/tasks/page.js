import SiteHeader from "@/components/SiteHeader";

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
              <p className="page-description">一覧 API 接続前のため、まだタスクは表示していません。</p>
            </div>
          </div>

          <section className="dashboard-grid">
            <aside className="sidebar-card">
              <div className="sidebar-section">
                <h2>一覧画面メモ</h2>
                <p className="page-description">
                  このページはレイアウトだけ残しています。
                  `GET /api/tasks` を実装したら、ここに検索フォームや絞り込み UI をつなぎます。
                </p>
              </div>

              <div className="sidebar-section">
                <h2>次にやること</h2>
                <ul className="check-list">
                  <li>バックエンドで `GET /api/tasks` を作る</li>
                  <li>フロントから API を呼ぶ</li>
                  <li>取得した配列を一覧表示する</li>
                </ul>
              </div>
            </aside>

            <section>
              <div className="task-list-header">
                <h2>表示中のタスク</h2>
                <p>現在はハードコードしたサンプル表示を削除しています。</p>
              </div>

              <article className="panel-card">
                <h3>まだデータはありません</h3>
                <p>
                  この一覧は API 接続後に描画します。今はモックデータを出さない状態にしてあるので、
                  バックエンド未実装でも本物の一覧と勘違いしません。
                </p>
              </article>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
