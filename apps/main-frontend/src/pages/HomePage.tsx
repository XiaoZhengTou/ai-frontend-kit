import { Link } from 'react-router-dom'

export function HomePage() {
  const features = [
    {
      title: '流式渲染',
      description: '高性能实时内容渲染，无需刷新页面',
      icon: '⚡',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: '多模态 AI',
      description: '集成文本、图像、语音的智能处理',
      icon: '🤖',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'SDK 模块化',
      description: '高度可复用的 AI 前端工具包',
      icon: '🛠️',
      color: 'from-green-400 to-green-600'
    },
    {
      title: '开发工作流',
      description: '完整的 CI/CD 自动化流程',
      icon: '⚙️',
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          欢迎来到 AI Frontend Studio
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          一个集成 3 个月前端 AI 学习成果的全栈开发平台，
          展示流式渲染、多模态 AI、SDK 模块化和完整工作流
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/ai-features"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>🚀</span>
            <span>体验 AI 功能</span>
          </Link>
          <Link
            to="/dev-tools"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <span>🛠️</span>
            <span>开发工具</span>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
              <span className="text-2xl text-white">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">3 个月学习成果</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            经过 3 个月的前端 AI 学习，我们构建了这个综合性的开发平台，
            展示了现代前端开发的最佳实践和技术栈。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">React 18</div>
              <div className="text-gray-600">最新前端框架</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">TypeScript</div>
              <div className="text-gray-600">类型安全开发</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">Vite</div>
              <div className="text-gray-600">极速构建工具</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}