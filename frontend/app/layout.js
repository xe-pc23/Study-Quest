import "./globals.css";

export const metadata = {
  title: "Study Quest",
  description: "学習タスク・学習メモ管理サービス",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
