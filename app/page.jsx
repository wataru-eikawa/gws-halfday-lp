const applyUrl =
  process.env.NEXT_PUBLIC_APPLY_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLScKrvq2kcBJpAaIZnHQDAfh9A6xmBadvZNlfxcMm2DfCxh1nw/viewform";

const heroImageUrl = "/assets/hero-workshop.png";

const facts = [
  { title: "6/23(火)", text: "14:00-18:00 / 名古屋開催" },
  { title: "定員20名", text: "少人数ハンズオン" },
  { title: "15,000円", text: "Google Workspace体験付き" },
];

const problems = [
  "Google Workspaceを導入しても、GmailとDrive共有だけで止まっている。",
  "Geminiや生成AIの基本は分かるが、自社の業務にどう組み込むかが見えていない。",
  "資料作成、メール対応、集計、分析に追われ、企画や顧客対応に時間を使えていない。",
];

const benefits = [
  {
    title: "Driveを中心に業務データを整理する",
    text: "ローカルに散らばったExcelや資料をGoogle Driveに集約し、検索、共有、権限管理まで含めたクラウド業務の土台を学びます。",
  },
  {
    title: "Geminiで日々の作業を短縮する",
    text: "長文メールの要約、返信文作成、表データの読み取り、資料化など、毎日使えるAI活用の流れを実際に操作します。",
  },
  {
    title: "自動化と内製化の入口をつかむ",
    text: "スプレッドシート、ドキュメント、スライドをつなぎ、業務を一回きりの作業ではなく再利用できる仕組みに変える考え方を持ち帰れます。",
  },
];

const curriculum = [
  {
    step: "1限目",
    time: "14:00-15:00",
    title: "Google Workspaceを業務基盤にする",
    text: "Workspaceの全体像、Driveを中心にGmail、Docs、Sheets、Slidesがどうつながるかを整理します。",
  },
  {
    step: "2限目",
    time: "15:00-16:00",
    title: "検索・共有・権限管理を実務で使う",
    text: "Driveの整理、共有設定、検索の使い方を、現場で迷いがちなポイントに絞ってハンズオンで確認します。",
  },
  {
    step: "3限目",
    time: "16:00-17:00",
    title: "Geminiでメール・資料・表計算を速くする",
    text: "Gmail、スプレッドシート、ドキュメントを使い、要約、返信案、タスク表、アンケート案を作る流れを体験します。",
  },
  {
    step: "4限目",
    time: "17:00-18:00",
    title: "社内アプリ・LP作成ワーク",
    text: "GeminiとGoogleツールだけで、社内アプリケーションやLPのたたき台を作る実践ワークに取り組みます。",
  },
];

const workflow = [
  "長文メールをGeminiで要約し、返信案を作成",
  "Excelや表データをDriveに集約し、Sheetsで確認",
  "データを分析し、改善ポイントをDocsに整理",
  "内容をSlidesやLPのたたき台へ展開",
];

const overview = [
  ["開催日時", "2026年6月23日(火) 14:00-18:00"],
  ["会場", "TSUNAGARU SPACE / 名古屋市中区栄4丁目19-19 フォルテ栄ビル6階"],
  ["対象", "中小企業の経営者、管理職、DX推進担当、実務担当者"],
  ["定員", "20名"],
  ["参加費", "15,000円(税込)"],
  ["持ち物", "ノートPC、Googleアカウントにログインできる環境"],
  ["講師", "TSUNAGARU AI LABO 講師チーム"],
  ["形式", "Google Workspace体験付きハンズオン"],
];

export default function Home() {
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
            <p className="eyebrow">専門知識ゼロでOK / 中小企業向け実践型ハンズオン / 2026年6月23日(火)・名古屋開催</p>
            <h1>Google WorkspaceとGeminiで、毎日の仕事を「探す・作る・まとめる」から解放する。</h1>
            <p className="lead">
              Drive、Gmail、スプレッドシート、ドキュメント、スライド。いつものGoogle WorkspaceにGeminiを組み込み、
              クラウド活用、データ整理、資料作成までを自分のPCで体験する4時間講座です。むずかしい予備知識は不要。
              ノートPC1台で参加でき、当日に手を動かして覚えた手順は、翌日からそのまま自社の仕事に使えます。
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
            <h2 id="problem-title">Google Workspaceを使っているのに、効果がメールとファイル共有で止まっていませんか。</h2>
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
              <h2 id="curriculum-title">4時間で、Google Workspaceの使い方を実務フローとしてつなぎます。</h2>
            </div>
            <p>
              参加者自身のPCでGoogleアカウントにログインし、業務の中で再現できる手順として学びます。
            </p>
          </div>
          <div className="timeline">
            {curriculum.map((item) => (
              <article key={item.step}>
                <span>
                  {item.step} / {item.time}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section workflow-section" aria-labelledby="workflow-title">
          <div className="section-heading">
            <p className="eyebrow">実務フローで体験</p>
            <h2 id="workflow-title">ツールが線でつながる感覚を、その場で体験します。</h2>
          </div>
          <div className="workflow-list">
            {workflow.map((item, index) => (
              <article key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
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
                <p>中小企業の現場を理解した講師陣が、専門用語に寄りすぎず、実務で判断できる言葉で解説します。</p>
              </article>
              <article>
                <h3>翌日から使える設計</h3>
                <p>知識の詰め込みではなく、メール、資料、表計算、企画業務に戻ってすぐ試せるワークフローとして持ち帰れます。</p>
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
            <p className="eyebrow">参加後の導入支援</p>
            <h2 id="next-title">本格的な社内DX・自動化へ進めたい企業には、次の導入ステップも用意しています。</h2>
          </div>
          <p>
            講座後、社内ワークフロー整備や業務自動化まで進めたい企業様には、リスキリング支援や導入伴走の相談も可能です。
            半日講座で入口を体験し、必要な企業だけが次の支援へ進めます。
          </p>
        </section>

        <section id="apply" className="section apply" aria-labelledby="apply-title">
          <div className="apply-copy">
            <p className="eyebrow">受付中</p>
            <h2 id="apply-title">Google Workspaceを、会社の生産性を上げる基盤に変えましょう。</h2>
            <p>
              定員20名の少人数開催です。席が埋まり次第、受付を終了します。申込フォームに会社名・お名前・参加人数・特に知りたいテーマをご入力ください。折り返し、当日のご案内をお送りします。
            </p>
          </div>
          <div className="apply-box">
            <p className="limited">限定20名 / 2026年6月23日開催</p>
            <a className="button primary full" href={applyUrl} aria-label="申し込みフォームへ移動">
              申し込みフォームへ
            </a>
            <p className="note">Google Workspaceの事前加入は不要です。当日アカウントをご用意します。</p>
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
