import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container">
          <section className="panel-card">
            <span className="eyebrow">Study Quest</span>
            <h1>学習用タスク管理アプリ</h1>
            <p className="page-description">
              このフロントエンドは、機能実装の確認用に最小構成だけ残しています。
              固定のサンプルデータは表示しません。
            </p>

            <div className="stack-actions" style={{ maxWidth: "280px", marginTop: "24px" }}>
              <Link className="btn btn-primary full-width" href="/tasks">タスク一覧へ</Link>
              <Link className="btn btn-secondary full-width" href="/tasks/new">新規作成へ</Link>
            </div>
          </section>

          <section className="panel-card" style={{ marginTop: "24px" }}>
            <h2>今の状態</h2>
            <ul className="check-list">
              <li>一覧ページは空状態のみ表示</li>
              <li>詳細ページは未接続メッセージのみ表示</li>
              <li>作成・編集フォームは固定値を入れていない</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
