# Study Quest

Study Quest は、学習タスク・学習メモ管理サービスを作成する、勉強用プロジェクト。
バックエンドの実装を勉強する為

## 現在の構成

- フロントエンド: Next.js
- バックエンド: Go + Echo 想定
- DB: MySQL 想定
- Cache: Redis は後から追加予定

## ディレクトリ構成

- `frontend/`: Next.js フロントエンド
- `backend/`: Go API 用


## フロントエンドのローカル確認

### 手順

1. `frontend` に移動する
2. パッケージをインストールする
3. 開発サーバを起動する

### 使うコマンド

- `pnpm install`
- `pnpm dev`

起動後、 `http://localhost:3000` で確認。

## 今のフロントで確認できる画面

- `/`
- `/tasks`
- `/tasks/new`
- `/tasks/1`
- `/tasks/1/edit`

## 注意

- フロントは見た目の雛形までAIで作成済み
- API 通信や本格的な機能実装はこれから自分で進める前提
- バックエンドはまだ雛形段階
