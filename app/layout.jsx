import "./globals.css";

export const metadata = {
  title: "Google Workspace × Gemini 半日講座 | TSUNAGARU AI LABO",
  description:
    "Google WorkspaceとGeminiを中小企業の実務に組み込む半日実践講座。AI活用、資料作成、データ活用、自動化の第一歩を自社PCで体験できます。",
  openGraph: {
    title: "Google Workspace × Gemini 半日講座 | TSUNAGARU AI LABO",
    description:
      "いつものGoogle WorkspaceにAIを組み込み、明日から使える自動化とアウトプット高速化を体験する半日講座です。",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85"
    ],
    locale: "ja_JP",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
