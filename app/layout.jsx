import "./globals.css";

export const metadata = {
  title: "Google Workspace x Gemini 実践ワーク半日講座 | TSUNAGARU AI LABO",
  description:
    "2026年6月23日開催。Google WorkspaceとGeminiを中小企業の実務に組み込む4時間ハンズオン講座。Drive、Gmail、スプレッドシート、資料作成、AI活用を自社PCで体験できます。",
  openGraph: {
    title: "Google Workspace x Gemini 実践ワーク半日講座 | TSUNAGARU AI LABO",
    description:
      "Google Workspaceをメールとファイル共有で終わらせない。GeminiとGoogleツールをつなぎ、毎日使える業務効率化を体験する4時間講座です。",
    images: ["/assets/hero-workshop.png"],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
