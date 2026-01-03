import { Routes, Route } from 'react-router-dom'
import { DevConsole } from './DevConsole'
import { PerformanceMonitor } from './PerformanceMonitor'
import { APITester } from './APITester'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">AI Frontend Studio - Dev Tools</h1>
        <p className="text-gray-400">开发者调试工具集合</p>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<DevConsole />} />
          <Route path="/performance" element={<PerformanceMonitor />} />
          <Route path="/api-test" element={<APITester />} />
        </Routes>
      </main>
    </div>
  )
}

export default App