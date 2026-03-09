import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">学習用 CRUD アプリ</span>
              <h1>
                学習タスクを、<span className="text-accent">見える化</span>して前に進める。
              </h1>
              <p className="hero-text">
                Study Quest は、学習タスク・学習メモ・進捗状況をひとつにまとめるためのサービスです。
                Next.js の画面雛形として作成してあるので、見た目を確認しながら自分で機能実装を進められます。
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/tasks">一覧ページを見る</Link>
                <Link className="btn btn-secondary" href="/tasks/new">作成画面を見る</Link>
              </div>

              <div className="hero-stats">
                <article className="stat-card">
                  <strong>Next.js</strong>
                  <span>App Router</span>
                </article>
                <article className="stat-card">
                  <strong>5</strong>
                  <span>主要画面</span>
                </article>
                <article className="stat-card">
                  <strong>1st MVP</strong>
                  <span>CRUD + 一覧</span>
                </article>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="panel-card glass-card">
                <div className="panel-header">
                  <span className="status-dot"></span>
                  <span>今日の学習状況</span>
                </div>
                <div className="progress-group">
                  <div className="progress-row">
                    <span>Next.js / React</span>
                    <strong>65%</strong>
                  </div>
                  <div className="progress-bar"><span style={{ width: "65%" }} /></div>
                </div>
                <div className="progress-group">
                  <div className="progress-row">
                    <span>Go / Echo API</span>
                    <strong>40%</strong>
                  </div>
                  <div className="progress-bar"><span style={{ width: "40%" }} /></div>
                </div>
                <div className="progress-group">
                  <div className="progress-row">
                    <span>MySQL / GORM</span>
                    <strong>20%</strong>
                  </div>
                  <div className="progress-bar"><span style={{ width: "20%" }} /></div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Core Features</span>
              <h2>まず作るべき機能</h2>
              <p>MVP を意識して、最初は機能を絞って進める前提の見た目です。</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <h3>タスク管理</h3>
                <p>学習タスクの追加、編集、削除、完了状態の切り替えを扱う想定です。</p>
              </article>
              <article className="feature-card">
                <h3>学習メモ</h3>
                <p>学んだことや詰まったことをメモとして残す導線を用意します。</p>
              </article>
              <article className="feature-card">
                <h3>検索と絞り込み</h3>
                <p>ステータス、カテゴリ、キーワードで対象を絞れる設計にします。</p>
              </article>
              <article className="feature-card">
                <h3>添付資料</h3>
                <p>任意で画像や資料を付けられる余地を残した UI にしています。</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
