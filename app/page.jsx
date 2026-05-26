const facts = [
  { title: "限定20名", text: "少人数ハンズオン" },
  { title: "半日完結", text: "14:00開始予定" },
  { title: "PC持参", text: "自社業務に近い形で実践" }
];

const problems = [
  "Google Workspaceを使っているが、GmailとDrive共有以外の活用が進んでいない。",
  "ChatGPTやGeminiの基礎は分かるが、自社の実務にどう組み込むかが見えていない。",
  "資料作成、メール文面、集計、分析に追われ、本来の企画や顧客対応に時間を使えない。"
];

const benefits = [
  {
    title: "企画力と分析力を引き上げる",
    text: "Geminiを使った市場調査、情報整理、データ活用、企画立案の進め方を、実務の流れに沿って習得します。"
  },
  {
    title: "ルーチンワーク削減の第一歩を作る",
    text: "スプレッドシートとAIの連携、自動化の考え方、日々の入力・確認・作成作業を減らす基本設計を体験します。"
  },
  {
    title: "アウトプット作成を一気に速くする",
    text: "スライド、バナー、メール、提案文の作成を短時間で形にするプロンプトとワークフローを持ち帰れます。"
  }
];

const curriculum = [
  {
    step: "Step 1",
    title: "最新GWSトレンド解説",
    text: "なぜ今Google AIなのか、Geminiを業務基盤に組み込む考え方を整理します。"
  },
  {
    step: "Step 2",
    title: "Gemini実践プロンプトワーク",
    text: "調査、要約、比較、企画、文章化など、業務に直結するプロンプト設計を練習します。"
  },
  {
    step: "Step 3",
    title: "GWS連携ハンズオン",
    text: "スプレッドシート連携、スライド作成、メール文面作成などを実際に操作します。"
  },
  {
    step: "Step 4",
    title: "質疑応答・個別相談",
    text: "自社でどこから始めるべきか、講師陣が現場の状況に合わせて助言します。"
  }
];

const overview = [
  ["日時", "〇月〇日（〇）14:00〜 半日"],
  ["会場", "TSUNAGARU SPACE"],
  ["対象", "中小企業の経営者、DX推進担当者"],
  ["定員", "20名"],
  ["参加費", "15,000円（税込表記にする場合は要調整）"],
  ["持ち物", "ノートPC、Googleアカウントへログインできる環境"]
];

const heroImageUrl =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85";

export default function Home() {
  const applyUrl =
    process.env.NEXT_PUBLIC_APPLY_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLScKrvq2kcBJpAaIZnHQDAfh9A6xmBadvZNlfxcMm2DfCxh1nw/viewform";

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TSUNAGARU AI LABO">
          <span className="brand-mark">T</span>
          <span>TSUNAGARU AI LABO</span>
        </a>
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#benefits">得られること</a>
          <a href="#curriculum">内容</a>
          <a href="#overview">開催概要</a>
        </nav>
        <a className="header-cta" href={applyUrl}>
          申し込む
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src={heroImageUrl} alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-inner">
            <p className="eyebrow">中小企業のための実践型・半日ブートキャンプ</p>
            <h1>Google Workspace × Geminiで、日々の業務を「手作業」から「仕組み」に変える。</h1>
            <p className="lead">
              メール、スプレッドシート、スライド、資料作成。いつものGoogle WorkspaceにAIを組み込み、
              明日から使える自動化とアウトプット高速化を自社PCで体験する半日講座です。
            </p>
            <div className="hero-actions" aria-label="主要アクション">
              <a className="button primary" href={applyUrl}>
                今すぐ実践ワークに申し込む
              </a>
              <a className="button secondary" href="#curriculum">
                カリキュラムを見る
              </a>
            </div>
            <div className="hero-facts" aria-label="講座の概要">
              {facts.map((fact) => (
                <div key={fact.title}>
                  <strong>{fact.title}</strong>
                  <span>{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section problem" aria-labelledby="problem-title">
          <div className="section-heading">
            <p className="eyebrow">こんな状態から抜け出す講座です</p>
            <h2 id="problem-title">
              Google Workspaceを入れたのに、成果がメールとファイル共有で止まっていませんか？
            </h2>
          </div>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <article key={problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="section benefits" aria-labelledby="benefits-title">
          <div className="section-heading">
            <p className="eyebrow">講座で得られること</p>
            <h2 id="benefits-title">AIを「知っている」から、業務で「使い切る」へ。</h2>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit, index) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-number">{index + 1}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="curriculum" className="section curriculum" aria-labelledby="curriculum-title">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">半日・実践ワーク</p>
              <h2 id="curriculum-title">聞くだけで終わらない、手を動かして身につけるカリキュラム。</h2>
            </div>
            <p>
              参加者自身のPCでGoogleアカウントにログインし、業務の中で再現できる手順として学びます。
            </p>
          </div>
          <div className="timeline">
            {curriculum.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reason" aria-labelledby="reason-title">
          <div className="reason-panel">
            <div className="section-heading">
              <p className="eyebrow">選ばれる理由</p>
              <h2 id="reason-title">TSUNAGARU AI LABOは、現場で使えるDXにこだわります。</h2>
            </div>
            <div className="reason-grid">
              <article>
                <h3>専門家が直接指導</h3>
                <p>
                  中小企業の現場を理解した講師陣が、専門用語に寄りすぎず、実務で判断できる言葉で解説します。
                </p>
              </article>
              <article>
                <h3>翌日から使える設計</h3>
                <p>
                  知識の詰め込みではなく、メール、資料、表計算、企画業務に戻ってすぐ試せるワークフローとして持ち帰れます。
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="overview" className="section overview" aria-labelledby="overview-title">
          <div className="section-heading">
            <p className="eyebrow">開催概要</p>
            <h2 id="overview-title">少人数だから、その場で質問しながら進められます。</h2>
          </div>
          <dl className="overview-list">
            {overview.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section next-step" aria-labelledby="next-title">
          <div>
            <p className="eyebrow">参加者限定</p>
            <h2 id="next-title">
              本格的な社内DX・自動化へ進めたい企業には、次の導入ステップも用意しています。
            </h2>
          </div>
          <p>
            講座後、アプリ開発や社内ワークフロー整備まで進めたい企業様には、リスキリング補助金を活用した
            1年間プログラムのご案内も可能です。半日講座で入口を体験し、必要な企業だけが次の支援へ進めます。
          </p>
        </section>

        <section id="apply" className="section apply" aria-labelledby="apply-title">
          <div className="apply-copy">
            <p className="eyebrow">受付中</p>
            <h2 id="apply-title">Google Workspaceを、会社の生産性を上げる基盤に変えましょう。</h2>
            <p>
              定員は20名です。参加希望の方は、イベント決済ページまたはお問い合わせフォームへのリンクを設定してください。
            </p>
          </div>
          <div className="apply-box">
            <p className="limited">限定20名 / 半日実践</p>
            <a className="button primary full" href={applyUrl} aria-label="イベント決済ページへ移動">
              申し込みページへ
            </a>
            <p className="note">リンク先URLが決まり次第、ボタンの href を差し替えてください。</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>TSUNAGARU AI LABO</p>
        <a href="#top">ページ上部へ戻る</a>
      </footer>
    </>
  );
}
