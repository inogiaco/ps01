export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* 背景画像パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-200 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-pink-200 rounded-full"></div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* メインメッセージ - センター配置 */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">プログラミング不要！</span>
                <br />
                AI×モダン技術で
                <br />
                簡単ホームページ作成講座
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                ChatGPT/Gemini CLIを活用し、未経験者でも本格的なWebサイトが作れる実践的な講座です。Next.js、TypeScript、Tailwind CSSを使ったモダンな開発手法を3時間45分で習得できます。
              </p>
            </div>

            {/* 価値提案 - 中央揃え */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">3時間45分の実践講座</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">未経験者OK</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">副業・転職に直結</span>
              </div>
            </div>

            {/* CTAボタン - 中央配置 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105 shadow-lg">
                今すぐ講座を始める
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 信頼ブロック */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            {/* 社会的証明1: 受講者数 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">1,000名以上</div>
                <div className="text-gray-600 mt-1">が受講</div>
              </div>
            </div>

            {/* 社会的証明2: 評価 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex justify-center text-yellow-500 mb-2">
                  <span className="text-lg">★★★★★</span>
                </div>
                <div className="text-3xl font-bold text-yellow-600">4.8/5.0</div>
                <div className="text-gray-600 mt-1">の高評価</div>
              </div>
            </div>

            {/* 社会的証明3: 完了率 */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-gray-600 mt-1">の受講者が講座完了</div>
              </div>
            </div>
          </div>

          {/* 追加の信頼要素 */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">講師について</h3>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">講師</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Web開発エンジニア</h4>
                    <p className="text-gray-600 leading-relaxed">
                      10年以上のWeb開発経験を持つエンジニア。大手IT企業でのプロジェクトリード経験あり。
                      AI技術とモダンWeb技術を組み合わせた効率的な開発手法の研究・実践に取り組んでいます。
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js認定</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript専門</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AI活用エキスパート</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-800 font-medium">修了証書発行 • 30日間サポート付き</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴ブロック */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              講座の特徴
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI技術とモダンWeb開発の融合により、効率的で実践的な学習体験を提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 特徴1: AIツール活用 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AIツール活用</h3>
                  <p className="text-gray-600 mb-3">
                    ChatGPT/Gemini CLIの実践的な使い方を学び、プロンプトエンジニアリングの基礎からコード生成・修正の自動化まで習得できます。
                  </p>
                  <div className="text-sm text-blue-600 font-medium">学習時間: 60分</div>
                </div>
              </div>
            </div>

            {/* 特徴2: モダン技術スタック */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">モダン技術スタック</h3>
                  <p className="text-gray-600 mb-3">
                    Next.js + TypeScript + Tailwind CSSを使った企業レベルの開発環境構築から本番デプロイまでを体験できます。
                  </p>
                  <div className="text-sm text-green-600 font-medium">学習時間: 90分</div>
                </div>
              </div>
            </div>

            {/* 特徴3: 実践的なカリキュラム */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">実践的なカリキュラム</h3>
                  <p className="text-gray-600 mb-3">
                    ランディングページの完全制作、メール送信機能の実装、Vercelでの本番デプロイまで実際に手を動かして学べます。
                  </p>
                  <div className="text-sm text-orange-600 font-medium">学習時間: 120分</div>
                </div>
              </div>
            </div>

            {/* 特徴4: 初心者フレンドリー */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">初心者フレンドリー</h3>
                  <p className="text-gray-600 mb-3">
                    プログラミング未経験者でも安心。ターミナル操作から丁寧に解説し、挫折しないサポート体制を整えています。
                  </p>
                  <div className="text-sm text-purple-600 font-medium">学習時間: 45分</div>
                </div>
              </div>
            </div>
          </div>

          {/* 学習の流れ */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">学習の流れ</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <span className="ml-3 text-gray-700">環境構築</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <span className="ml-3 text-gray-700">AI活用法</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <span className="ml-3 text-gray-700">実践制作</span>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <span className="ml-3 text-gray-700">デプロイ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}