export function DevToolsPage() {
  const tools = [
    {
      name: '性能分析器',
      description: '实时监控应用性能指标',
      icon: '⚡',
      color: 'bg-blue-500'
    },
    {
      name: '组件调试器',
      description: '可视化组件树和状态',
      icon: '🛠️',
      color: 'bg-green-500'
    },
    {
      name: 'API 监控',
      description: '追踪和调试 API 请求',
      icon: '🌐',
      color: 'bg-purple-500'
    },
    {
      name: '代码生成器',
      description: 'AI 辅助代码生成工具',
      icon: '🤖',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">开发工具</h1>
        <p className="text-xl text-gray-600">
          强大的开发调试和生产力工具集
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
            <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
              <span className="text-2xl text-white">{tool.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <button className="btn-secondary w-full">
              打开工具
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">调试控制台</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div className="space-y-1">
              <div>AI Frontend Studio DevTools v1.0.0</div>
              <div>✓ React 组件加载完成</div>
              <div>✓ TypeScript 编译成功</div>
              <div>✓ Vite 构建优化完成</div>
              <div className="text-yellow-400">⚠ 模拟 API 响应延迟: 200ms</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="btn-primary">
              清空控制台
            </button>
            <button className="btn-secondary">
              导出日志
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">项目状态</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">✅</div>
            <div className="text-lg font-semibold">依赖安装</div>
            <div className="text-gray-600">所有包已成功安装</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">⚡</div>
            <div className="text-lg font-semibold">构建状态</div>
            <div className="text-gray-600">开发服务器运行中</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">🔧</div>
            <div className="text-lg font-semibold">工具链</div>
            <div className="text-gray-600">Vite + React + TS</div>
          </div>
        </div>
      </div>
    </div>
  )
}