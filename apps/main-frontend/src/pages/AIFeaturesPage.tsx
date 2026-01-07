import { useState } from 'react'

interface DemoInfo {
  title: string
  description: string
  component: React.ReactNode
}

export function AIFeaturesPage() {
  const [activeDemo, setActiveDemo] = useState<'streaming' | 'multimodal' | 'sdk'>('streaming')

  const demos: Record<string, DemoInfo> = {
    streaming: {
      title: '流式渲染演示',
      description: '模拟 AI 实时响应，支持打字机效果',
      component: <StreamingDemo />
    },
    multimodal: {
      title: '多模态 AI 演示',
      description: '文本、图像、语音的综合处理',
      component: <MultimodalDemo />
    },
    sdk: {
      title: 'SDK 模块演示',
      description: '展示可复用的 AI 前端工具包',
      component: <SDKDemo />
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">AI 功能展示</h1>
        <p className="text-xl text-gray-600">
          体验我们 3 个月学习成果的核心 AI 功能
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        {(Object.entries(demos) as [string, DemoInfo][]).map(([key, demo]) => (
          <button
            key={key}
            onClick={() => setActiveDemo(key as 'streaming' | 'multimodal' | 'sdk')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeDemo === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {demos[activeDemo].title}
          </h2>
          <p className="text-gray-600">{demos[activeDemo].description}</p>
        </div>
        {demos[activeDemo].component}
      </div>
    </div>
  )
}

function StreamingDemo() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const simulateStreaming = () => {
    setText('')
    setIsTyping(true)
    const fullText = '这是流式渲染演示的示例文本。AI 助手正在实时生成响应，每次显示几个字符，就像真正的流式响应一样。'
    
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 50)
  }

  return (
    <div className="space-y-4">
      <button
        onClick={simulateStreaming}
        className="btn-primary"
        disabled={isTyping}
      >
        {isTyping ? '生成中...' : '开始流式渲染'}
      </button>
      <div className="min-h-[100px] p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-gray-800">
          {text}
          {isTyping && <span className="animate-pulse">|</span>}
        </p>
      </div>
    </div>
  )
}

function MultimodalDemo() {
  const [selectedMode, setSelectedMode] = useState('text')

  const modes = {
    text: { icon: '📝', title: '文本处理', desc: '智能文本分析和生成' },
    image: { icon: '🖼️', title: '图像识别', desc: '图像内容理解和描述' },
    audio: { icon: '🎵', title: '语音识别', desc: '语音转文字和情感分析' }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(modes).map(([key, mode]) => (
          <button
            key={key}
            onClick={() => setSelectedMode(key)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedMode === key
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-3xl mb-2">{mode.icon}</div>
            <div className="font-medium">{mode.title}</div>
            <div className="text-sm text-gray-600">{mode.desc}</div>
          </button>
        ))}
      </div>
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-gray-800">
          {selectedMode === 'text' && '支持多种文本分析任务：情感分析、关键词提取、文本摘要等。'}
          {selectedMode === 'image' && '图像识别功能：对象检测、场景描述、OCR文字识别。'}
          {selectedMode === 'audio' && '语音处理能力：语音转文字、情感识别、语音合成。'}
        </p>
      </div>
    </div>
  )
}

function SDKDemo() {
  const components = [
    { name: 'StreamRenderer', desc: '流式渲染组件', status: 'ready' },
    { name: 'AIResponse', desc: 'AI 响应处理器', status: 'ready' },
    { name: 'MultimodalInput', desc: '多模态输入组件', status: 'ready' },
    { name: 'RealtimeChat', desc: '实时聊天组件', status: 'development' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((component, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{component.name}</h3>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  component.status === 'ready'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {component.status === 'ready' ? '就绪' : '开发中'}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{component.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">使用示例</h3>
        <pre className="text-sm text-blue-800 bg-blue-100 p-3 rounded overflow-x-auto">
{`import { StreamRenderer } from '@ai-frontend-studio/ai-frontend-kit'

<StreamRenderer 
  stream={aiStream} 
  onComplete={handleComplete}
/>`}
        </pre>
      </div>
    </div>
  )
}