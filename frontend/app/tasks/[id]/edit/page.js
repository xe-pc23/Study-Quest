import SiteHeader from "@/components/SiteHeader";
import TaskForm from "@/components/TaskForm";

export default function EditTaskPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <div className="container">
          <section>
            <div className="page-header compact">
              <div>
                <span className="eyebrow">Edit Task</span>
                <h1>タスクを編集する</h1>
                <p className="page-description">更新 API と詳細取得 API をつないだら、このフォームにデータを入れます。</p>
              </div>
            </div>
            <TaskForm mode="edit" />
          </section>
        </div>
      </main>
    </>
  );
}
