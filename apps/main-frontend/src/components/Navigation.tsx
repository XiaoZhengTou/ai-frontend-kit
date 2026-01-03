import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/ai-features', label: 'AI 功能', icon: '🤖' },
    { path: '/dev-tools', label: '开发工具', icon: '🛠️' },
  ]

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold text-gray-800">AI Frontend Studio</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/your-username/ai-frontend-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="text-xl">📱</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}