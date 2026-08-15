export type SkillItem = { name: string; years: number };
export type SkillCategory = { label: string; items: SkillItem[] };

export type Project = {
	title: string;
	period: string;
	teamSize: string;
	role: string;
	summary: string;
	techStack: string[];
	challenge: string;
};

export const profile = {
	name: 'gyokuro06',
	title: 'Web Engineer',
	lead: [
		'アジャイル(XP)を軸に、要件定義から運用まで一貫して|Webアプリケーション開発に携わってきた経験が強みのWebエンジニア。',
		'MVPを早く届けてフィードバックを得ながら、柔軟に方針を変えて開発していく動き方が得意。',
		'マイクロサービスで言語やフレームワークが分かれた現場での経験が長いことから、キャッチアップしながら開発することにも慣れている',
	],
};

export const skillCategories: SkillCategory[] = [
	{
		label: '言語',
		items: [
			{ name: 'Kotlin', years: 5 },
			{ name: 'TypeScript', years: 5 },
			{ name: 'Java', years: 5 },
			{ name: 'Clojure', years: 3 },
			{ name: 'F#', years: 3 },
			{ name: 'Go', years: 1 },
			{ name: 'Rust', years: 3 },
			{ name: 'Python', years: 1 },
			{ name: 'PHP', years: 0.5 },
		],
	},
	{
		label: 'フレームワーク',
		items: [
			{ name: 'Spring Boot', years: 6 },
			{ name: '.NET', years: 3 },
			{ name: 'Vue.js', years: 2 },
			{ name: 'React', years: 3 },
			{ name: 'AngularDart', years: 2 },
			{ name: 'Next.js', years: 2 },
			{ name: 'lit', years: 2 },
			{ name: 'Laravel', years: 0.5 },
			{ name: 'FastAPI', years: 1 },
		],
	},
	{
		label: 'Cloud',
		items: [
			{ name: 'GCP', years: 5 },
			{ name: 'AWS', years: 2 },
		],
	},
	{
		label: 'DB',
		items: [
			{ name: 'PostgreSQL', years: 5 },
			{ name: 'MySQL', years: 6 },
			{ name: 'Elasticsearch', years: 2 },
			{ name: 'Redis', years: 2 },
		],
	},
	{
		label: 'コンテナ',
		items: [
			{ name: 'Docker', years: 6 },
			{ name: 'Kubernetes', years: 5 },
			{ name: 'Helm', years: 5 },
			{ name: 'Argo', years: 5 },
		],
	},
	{
		label: 'CI/CD',
		items: [
			{ name: 'Jenkins', years: 5 },
			{ name: 'Buildkite', years: 5 },
			{ name: 'GoCD', years: 1 },
		],
	},
	{
		label: 'AI / ML',
		items: [
			{ name: 'SentenceTransformer', years: 1 },
			{ name: 'LightGBM', years: 1 },
			{ name: 'MLOps', years: 1 },
		],
	},
	{
		label: 'アジャイル',
		items: [
			{ name: 'XP', years: 5 },
			{ name: 'TDD', years: 5 },
			{ name: 'ペアプロ', years: 5 },
		],
	},
];

export const projects: Project[] = [
	{
		title: '保育プラットフォーム セキュリティ改修',
		period: '2026.04 〜 現在',
		teamSize: '4名',
		role: 'エンジニア（要件定義 / 設計 / 実装 / 運用）',
		summary:
			'保育プラットフォームのtoC向けパスワードリセットに多要素認証を追加。仮パスワード発行から新パスワード入力への画面変更、複数端末ログイン時のセッション破棄、レガシーな巨大DBからの責務分離もあわせて実施。',
		techStack: ['PHP', 'Laravel', 'Vue.js', 'TypeScript', 'JavaScript', 'Docker', 'AWS', 'MySQL'],
		challenge:
			'社内に詳しい人が残っていないレガシーシステム改修で、コード品質も低くインシデントリスクが高かった。何をもって改修が十分なのかも自信を持ちにくく、チームメンバー全員歴が浅く組織の文化や思想も揃いきらない状態だった。当初はTDDで動作を担保しながら進めたが、テスト対象外の深い操作動線でインシデントを発生させてしまった。以降はペアプロで作業の強度を上げ、誰へのどんな価値かを明確にしてから着手することで完了条件とリリース後の監視を意識する進め方に変えた。地雷は踏む前提でデグレをすぐ自分たちで気づけるようにし、メンバーの考え方を補い合いながら、それ以降インシデントなくレガシーをリファクタリングしつつ進められている。',
	},
	{
		title: 'toC向け 写真購入・配送まとめ機能 新規開発',
		period: '2026.01 〜 2026.04',
		teamSize: '6〜8名',
		role: 'エンジニア（要件定義 / 見積もり / 計画 / 設計 / 実装）',
		summary:
			'保護者向けの写真購入機能に、一定期間内の購入分をまとめて配送することで配送料を抑えつつ写真を購入できる機能を作成。',
		techStack: ['PHP', 'Kotlin', 'Spring Boot', 'TypeScript', 'Vue.js', 'AWS', 'Docker', 'GitHub Actions', 'MySQL', 'PostgreSQL'],
		challenge:
			'保護者への案内を既に行っていた点と学期の切り替わりによる説明コストの点でスケジュールをずらせず、着手時点では企画案以外に画面モックもない状態だった。より小さいMVPをまずは作ることで、実際に触って見えていなかった要件と方向の正しさを確認できると思い、フィーチャーフラグとカナリアリリースを導入し、骨子の価値を先に体験できるユーザーストーリーから進める計画を立てた。まとめて配送する機能なので配送処理は遅らせられるといった案やバッチ着手のタイミングもチームで決め、不確実性の高いところから潰していった。その結果、実プロダクトを触りながらPOと仕様を詰められ、期日前に骨子を完成させて「作れるか」ではなく「どこまで作り込むか」の話に持っていけた。',
	},
	{
		title: '非上場企業データ推定モデル開発 / MLOps',
		period: '2025.08 〜 2025.12',
		teamSize: '4名',
		role: 'エンジニア（問題設計 / アルゴリズム開発 / データ設計 / MLOps / 設計 / テスト / 実装）',
		summary:
			'非上場企業など公開データが少ない対象を、多様なデータから機械学習モデルに推定させ、自社データの価値を上げるためのモデル開発。問題設計からアルゴリズム・データ設計、MLOps、実装まで担当。',
		techStack: ['Python', 'LightGBM', 'Docker', 'Buildkite', 'GCP'],
		challenge:
			'世の中に前例のない非上場企業データ推定だったため、何が有効な特徴量かもわからない状態からのスタートだった。ドメインエキスパートと頻繁に会話してドメイン知識を深めつつ、様々なモデル設計のアプローチを実験して有効な特徴量を探した。大量かつ多様なデータを取得・更新しているため整合性を保ちつつ自動更新できる仕組みが必要で、システムの提案と実装を主導して安定したデータ利用に貢献した。実験しやすいアーキテクチャを整え、品質チェック済みのデータリリースと推定モデルのリリースを分けることで、運用の複雑さを受け入れつつユーザーへの価値提供を最優先するチームの動き方を先導した。',
	},
	{
		title: '法人向けキャリア開発アプリ リプレイス',
		period: '2025.04 〜 2025.10',
		teamSize: '3名',
		role: 'エンジニア（要件定義 / 設計 / 実装）',
		summary:
			'法人向けキャリア開発アプリのリプレイス。社員がキャリアに関する質問に回答し、分析レポートをキャリア面談等に活用するサービス。外部委託からの内製化タイミングで参画し、既存機能の再現とデータ移行を担当。',
		techStack: ['Go', 'TypeScript', 'Echo', 'Next.js', 'Docker', 'AWS', 'MySQL', 'Redis'],
		challenge:
			'2024年から外部委託していたがバグが頻出し、社内開発に切り替わるタイミングで参画した。リプレイスのため既存機能の再現とデータ移行を期限内に行う必要があった一方、設計やテストが不十分だと将来の開発速度が落ちると判断した。最低限のE2Eテストを低コストで導入する方法や、ドメイン定義・アーキテクチャ設計を提案し、期限を守りながら中長期の品質にもアプローチした。',
	},
	{
		title: '社内特化 検索モデル開発 / MLOps',
		period: '2025.03 〜 2025.08',
		teamSize: '4名',
		role: 'エンジニア（問題設計 / アルゴリズム開発 / 実験 / MLOps / Vertex AI設定 / API開発）',
		summary:
			'社内ドメイン特化の分類・検索モデル学習。Gemma2ベースのSentence Transformerで社内ドメイン知識を学習し、Vertex AI上で汎用利用できるモデルを開発。Elasticsearchを使ったベクトル検索APIも実装。',
		techStack: ['Kotlin', 'F#', 'Python', 'FastAPI', 'SentenceTransformer', 'Buildkite', 'GCP', 'PostgreSQL', 'Elasticsearch'],
		challenge:
			'Vertex AIでは使えるGPUにコストやリージョンの制限があり、学習データ量も多かったため連続稼働上限に達して学習が完了しない、GPUにモデルが乗り切らないといった問題があった。機械学習エンジニアと協力し、FSDP並列分散学習でGPUあたりの学習時間を短縮し、QLoRAや2D-Matryoshkaでモデルサイズを削減した。BuildkiteでMLOpsを最適化して失敗を早期に落とせるようにし、実験したい処理を差し込みやすいアーキテクチャにして毎実験のコード量を減らした。ベクトル検索APIでは事前エンベディングとインデックス、モデル・データセット更新時の迅速なElasticsearch更新の仕組みにも貢献した。',
	},
	{
		title: '海外事業向けローカライズ機能開発',
		period: '2024.09 〜 2025.03',
		teamSize: '4名',
		role: 'エンジニア（要件定義 / 工数見積もり / インフラ構築 / 設計 / テスト / 実装 / CI/CD）',
		summary:
			'海外事業向けに、日本向け機能を各国の法律や文化にフィットする形でローカライズして提供するための機能開発。',
		techStack: ['Kotlin', 'F#', 'TypeScript', '.NET', 'lit', 'Docker', 'Jenkins', 'GCP', 'PostgreSQL', 'MySQL'],
		challenge:
			'参画時点でPOとのコミュニケーションにチームが疲弊し、優先順位が頻繁に変わる近視眼的な状態だった。組織全体ではWeb Componentsで再利用可能なコンポーネントを増やし複数プロダクトの開発速度を底上げしようとする時期だったが、チームにそのスキルも余裕もなかった。個人でWeb Componentをいくつか作り知見をチームに還元しつつ、POが根本的に達成したい目標を確認し、状況変化の理由を共有する場をつくることで、優先順位変更への納得感を開発チームが持てるようにした。',
	},
	{
		title: '海外サービス買収・システムマイグレーション',
		period: '2024.04 〜 2024.09',
		teamSize: '3名',
		role: 'エンジニア（要件定義 / 工数見積り / インフラ構築 / 設計 / テスト / 実装 / CI/CD）',
		summary:
			'海外の専門知識を持つユーザーに質問できるマッチングプラットフォームの買収に伴い、自社環境での運用と機能開発のためのシステムマイグレーションを実施。移行後は機能開発とリファクタリングを担当。',
		techStack: ['Kotlin', 'Java', 'TypeScript', 'Spring Boot', 'Angular', 'Docker', 'Jenkins', 'AWS', 'PostgreSQL', 'MySQL'],
		challenge:
			'設計思想やデプロイ思想が異なるシステムのため認知負荷と開発コストが高く、AWSや機械学習モデルの学習システムなど経験のない技術にも触れる必要があった。買収元エンジニアのサポートを受けつつ開発を進め、テストやCI/CD環境の整備と日常的な改善を強度高く続けることで、徐々にリファクタリングを進め開発速度を改善した。',
	},
	{
		title: '市場分析プロダクト ニュース機能開発',
		period: '2023.04 〜 2024.04',
		teamSize: '4名',
		role: 'エンジニア（要件定義 / 工数見積り / 設計 / テスト / 実装 / CI/CD）',
		summary:
			'市場分析プロダクトを日常的に使ってもらえるよう、ニュース機能の追加・修正を通じてデイリーの価値を届けるための開発。',
		techStack: ['Kotlin', 'Java', 'Scala', 'Clojure', 'Rust', 'Dart', 'TypeScript', 'Spring Boot', 'Angular', 'Next.js', 'Kubernetes', 'Helm', 'Jenkins', 'Argo', 'GCP', 'PostgreSQL', 'MySQL'],
		challenge:
			'ニュース機能は古くに実装されたレガシーで技術的負債の返済が必要な一方、機能追加でユーザーに価値を届け続ける必要があった。リファクタせず機能だけ足すと開発効率が下がり続け、ますます触りにくい機能になるのが明らかだった。プロダクトマネージャーとスコープを絞り込み、ユーザーに最も価値が届く部分は開発しつつリファクタリングも進める進め方にし、価値提供と負債返済を両立するサイクルをつくった。',
	},
	{
		title: '市場分析プロダクト 企業リスト機能 新規開発',
		period: '2022.12 〜 2023.04',
		teamSize: '5名',
		role: 'エンジニア（要件定義 / 工数見積り / 設計 / テスト / 実装 / CI/CD）',
		summary:
			'所属組織に共有可能な企業リストを作成し、組織全体で共通の企業リストをウォッチできる機能の新規開発。プロダクトを組織全体で使ってもらうことが目的。',
		techStack: ['Kotlin', 'Java', 'Clojure', 'F#', 'TypeScript', 'Spring Boot', '.NET', 'Vue.js', 'lit', 'Kubernetes', 'Docker', 'Helm', 'Jenkins', 'Buildkite', 'GoCD', 'Argo', 'GCP', 'PostgreSQL', 'MySQL'],
		challenge:
			'新規プロジェクト立ち上げ期で、手戻りを抑えつつ確実に立ち上げを成功させる必要があった。PdMにコンセプトを共有してもらい工数見積りする際に、どの機能が最もユーザーに価値が届くかをPdMと決め、開発の優先順位をつけた。骨子にあたる部分から先行開発し、できるだけ早くPdMに一連の機能を体験してもらえる状態をつくることで、フィードバックと方向転換を早いタイミングで行えるようにした。',
	},
	{
		title: 'データサプライヤー連携 API 新規開発',
		period: '2021.08 〜 2022.12',
		teamSize: '3名',
		role: 'エンジニア（要件定義 / 工数見積り / 設計 / テスト / 実装 / CI/CD）',
		summary:
			'新たに契約したデータサプライヤーから提供されるデータをプロダクトに取り込むAPIの新規開発。プロダクトで使えるデータを拡充することが目的。',
		techStack: ['Kotlin', 'Java', 'Clojure', 'F#', 'TypeScript', 'Spring Boot', '.NET', 'Vue.js', 'Kubernetes', 'Docker', 'Helm', 'Jenkins', 'Buildkite', 'Argo', 'GCP', 'PostgreSQL', 'MySQL'],
		challenge:
			'データ取り込みAPIは一度作ると触る機会がほとんどないため、保守性・運用性の高い設計が求められた。REST APIのパスやクエリパラメーター設計で運用しやすさを意識し、クリーンアーキテクチャをベースにモジュール間の依存方向を管理して高凝集疎結合な設計にした。エラーハンドリングとロギングを適切にチューニングし、取り込み失敗時の原因特定とリカバリーにかかる時間を短縮した。',
	},
	{
		title: 'カンバン型タスク管理システム 新規開発',
		period: '2020.03 〜 2021.07',
		teamSize: '15名',
		role: 'エンジニア（実装 / テスト）',
		summary:
			'カンバンやチケット管理ができるタスク管理システムの新規開発。ウォーターフォール開発の現場で、詳細設計書に基づく実装とテストを担当。',
		techStack: ['Java', 'VBA', 'VBScript', 'Spring Boot', 'Docker', 'MySQL'],
		challenge:
			'詳細設計書ベースでインターフェースは変えられない制約のなか、中身の処理をprivate関数に分割してやっていることが明確な関数にしてよいか提案するなど、改善を積極的に出した。テスト手順書どおりの実行と報告書作成については、VBAやVBScriptで報告書をある程度自動作成するツールを開発し、チーム全体で使えないか提案して作業効率の向上に貢献した。',
	},
];
