import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AIFeaturesPage } from './pages/AIFeaturesPage'
import { DevToolsPage } from './pages/DevToolsPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-features" element={<AIFeaturesPage />} />
          <Route path="/dev-tools" element={<DevToolsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App