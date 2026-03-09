import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function TaskDetailPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container detail-layout">
          <section className="detail-main">
            <Link className="back-link" href="/tasks">← 一覧へ戻る</Link>

            <article className="detail-hero">
              <div className="badge-row">
                <span className="badge badge-status-doing">進行中</span>
                <span className="badge badge-category">Web</span>
                <span className="badge badge-priority-high">優先度 3</span>
              </div>
              <h1>Echo で CRUD API を作る</h1>
              <p>
                一覧取得、詳細取得、作成、更新、削除の流れを整理しながら、
                handler / service / repository の責務を意識して実装する。
              </p>
            </article>

            <section className="detail-grid">
              <article className="panel-card">
                <h2>基本情報</h2>
                <dl className="detail-list">
                  <div><dt>ステータス</dt><dd>進行中</dd></div>
                  <div><dt>カテゴリ</dt><dd>Web</dd></div>
                  <div><dt>学習時間</dt><dd>90分</dd></div>
                  <div><dt>最終更新</dt><dd>2026-03-09</dd></div>
                </dl>
              </article>

              <article className="panel-card">
                <h2>学習メモ</h2>
                <div className="note-block">
                  <p>まずは `GET /api/tasks` と `POST /api/tasks` から始める。</p>
                  <p>検索やアップロードは後回し。レスポンス形式を先に固定すると後で楽になる。</p>
                </div>
              </article>
            </section>

            <section className="panel-card">
              <h2>進捗ログ</h2>
              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div>
                    <strong>ルーティング設計をメモした</strong>
                    <p>どのエンドポイントを先に作るか整理した。</p>
                  </div>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div>
                    <strong>Task モデルの項目を洗い出した</strong>
                    <p>title, description, status, category, priority を最低限とした。</p>
                  </div>
                </article>
              </div>
            </section>
          </section>

          <aside className="detail-sidebar">
            <div className="panel-card sticky-card">
              <h2>操作</h2>
              <div className="stack-actions">
                <Link className="btn btn-primary full-width" href="/tasks/1/edit">編集する</Link>
                <button className="btn btn-secondary full-width" type="button">ステータス変更</button>
                <button className="btn btn-ghost danger full-width" type="button">削除する</button>
              </div>
            </div>

            <div className="panel-card">
              <h2>添付資料</h2>
              <div className="attachment-item">
                <span className="attachment-icon">📎</span>
                <div>
                  <strong>api-design-note.pdf</strong>
                  <p>後でアップロード機能と接続する場所</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
