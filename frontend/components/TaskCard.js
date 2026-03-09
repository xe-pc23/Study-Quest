import Link from "next/link";

const statusClassMap = {
  todo: "badge-status-todo",
  doing: "badge-status-doing",
  done: "badge-status-done",
};

const priorityClassMap = {
  1: "badge-priority-low",
  2: "badge-priority-mid",
  3: "badge-priority-high",
};

const statusLabelMap = {
  todo: "未着手",
  doing: "進行中",
  done: "完了",
};

export default function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-card-top">
        <div>
          <div className="badge-row">
            <span className={`badge ${statusClassMap[task.status]}`}>
              {statusLabelMap[task.status]}
            </span>
            <span className="badge badge-category">{task.category}</span>
            <span className={`badge ${priorityClassMap[task.priority]}`}>
              優先度 {task.priority}
            </span>
          </div>
          <h3>{task.title}</h3>
        </div>
        <Link className="text-link" href={`/tasks/${task.id}`}>
          詳細を見る
        </Link>
      </div>
      <p>{task.description}</p>
      <div className="task-meta">
        <span>学習時間: {task.studyMinutes}分</span>
        <span>更新: {task.updatedAt}</span>
      </div>
    </article>
  );
}
