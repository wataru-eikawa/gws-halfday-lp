# GWS Halfday LP

TSUNAGARU AI LABO の「Google Workspace × Gemini 半日講座」向けNext.js LPです。

## Local

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel

Vercelでこの `gws-halfday-lp` フォルダをプロジェクトルートに指定してください。

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: Next.js default

申込ボタンのリンクは、Vercelの環境変数 `NEXT_PUBLIC_APPLY_URL` にこくちーず等の決済ページURLを設定すると反映されます。未設定時は仮リンク `#` です。
