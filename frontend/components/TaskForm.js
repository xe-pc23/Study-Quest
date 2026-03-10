export default function TaskForm({ mode = "create" }) {
  const isEdit = mode === "edit";

  return (
    <form className="form-card">
      <div className="form-section">
        <h2>{isEdit ? "編集内容" : "基本情報"}</h2>
        <div className="form-grid">
          <div className="field-group full-width">
            <label className="field-label" htmlFor="title">タイトル</label>
            <input
              id="title"
              className="text-input"
              type="text"
              placeholder="例: Echo で CRUD API を作る"
              defaultValue=""
            />
          </div>

          <div className="field-group full-width">
            <label className="field-label" htmlFor="description">説明</label>
            <textarea
              id="description"
              className="text-area"
              rows="6"
              placeholder="何を学ぶタスクなのか、どこまで実装するのかを記録する"
              defaultValue=""
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="status">ステータス</label>
            <select id="status" className="select-input" defaultValue="todo">
              <option value="todo">未着手</option>
              <option value="doing">進行中</option>
              <option value="done">完了</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="category">カテゴリ</label>
            <select id="category" className="select-input" defaultValue="Go基礎">
              <option>Go基礎</option>
              <option>Web</option>
              <option>DB</option>
              <option>Docker</option>
              <option>Redis</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="priority">優先度</label>
            <select id="priority" className="select-input" defaultValue="3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="study-minutes">学習時間（分）</label>
            <input
              id="study-minutes"
              className="text-input"
              type="number"
              placeholder="60"
              defaultValue=""
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h2>追加情報</h2>
        <div className="form-grid">
          <div className="field-group full-width">
            <label className="field-label" htmlFor="memo">学習メモ</label>
            <textarea
              id="memo"
              className="text-area"
              rows="5"
              placeholder="詰まったこと、次に試すこと、理解したことをメモする"
              defaultValue=""
            />
          </div>

          <div className="field-group full-width">
            <label className="field-label" htmlFor="attachment">添付資料</label>
            <input id="attachment" className="file-input" type="file" />
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" type="button">キャンセル</button>
        <button className="btn btn-primary" type="button">
          {isEdit ? "更新する" : "作成する"}
        </button>
      </div>
    </form>
  );
}
