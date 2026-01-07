import { useState } from 'react';

interface TestResult {
  status: number;
  time: number;
  data?: unknown;
}

export const APITester = () => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [method, setMethod] = useState('GET');
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    const start = Date.now();
    
    try {
      const response = await fetch(url, { method });
      const data = await response.json();
      
      setResult({
        status: response.status,
        time: Date.now() - start,
        data
      });
    } catch (error) {
      setResult({
        status: 0,
        time: Date.now() - start,
        data: { error: String(error) }
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">API 测试工具</h2>
      
      <div className="flex gap-2 mb-4">
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
          placeholder="输入API地址..."
        />
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors disabled:opacity-50"
        >
          {loading ? '测试中...' : '测试'}
        </button>
      </div>

      {result && (
        <div className="bg-gray-900 rounded p-4">
          <div className="flex gap-4 mb-2 text-sm">
            <span className={result.status >= 200 && result.status < 300 ? 'text-green-400' : 'text-red-400'}>
              状态码: {result.status}
            </span>
            <span className="text-blue-400">耗时: {result.time}ms</span>
          </div>
          <pre className="text-green-300 text-sm overflow-auto max-h-64">
            {JSON.stringify(result.data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};