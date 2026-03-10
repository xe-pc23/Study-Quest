import SiteHeader from "@/components/SiteHeader";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container">
          <section>
            <div className="page-header compact">
              <div>
                <span className="eyebrow">Create Task</span>
                <h1>新しい学習タスクを作成</h1>
                <p className="page-description">送信処理はまだ未接続です。まずはフォーム項目の実装に集中できます。</p>
              </div>
            </div>
            <TaskForm mode="create" />
          </section>
        </div>
      </main>
    </>
  );
}
