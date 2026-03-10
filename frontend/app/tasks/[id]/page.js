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
                <span className="badge badge-status-todo">未接続</span>
              </div>
              <h1>タスク詳細はまだ未接続です</h1>
              <p>
                このページのサンプルタスク表示は削除しました。
                `GET /api/tasks/:id` を実装したら、URL の ID を使って本物のデータを表示します。
              </p>
            </article>

            <section className="detail-grid">
              <article className="panel-card">
                <h2>このページでやること</h2>
                <dl className="detail-list">
                  <div><dt>1</dt><dd>URL から `id` を受け取る</dd></div>
                  <div><dt>2</dt><dd>詳細取得 API を呼ぶ</dd></div>
                  <div><dt>3</dt><dd>取得結果を画面に表示する</dd></div>
                  <div><dt>4</dt><dd>存在しない ID のエラーを出し分ける</dd></div>
                </dl>
              </article>

              <article className="panel-card">
                <h2>メモ</h2>
                <div className="note-block">
                  <p>今は見た目だけのページです。</p>
                  <p>固定データを消してあるので、接続前後の差が分かりやすくなります。</p>
                </div>
              </article>
            </section>

            <section className="panel-card">
              <h2>実装メモ</h2>
              <p>`loading`、`error`、`not found` の 3 状態を先に考えておくと作りやすいです。</p>
            </section>
          </section>

          <aside className="detail-sidebar">
            <div className="panel-card sticky-card">
              <h2>操作</h2>
              <div className="stack-actions">
                <Link className="btn btn-primary full-width" href="/tasks/1/edit">編集ページの確認</Link>
                <button className="btn btn-secondary full-width" type="button">API 接続後に有効化</button>
                <button className="btn btn-ghost danger full-width" type="button">削除 API 後に有効化</button>
              </div>
            </div>

            <div className="panel-card">
              <h2>補足</h2>
              <p>ここも固定の添付ファイル表示は削除済みです。</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
