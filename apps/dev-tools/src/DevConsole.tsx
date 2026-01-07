import { useState } from 'react';

export const DevConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${cmd}`]);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">开发控制台</h2>
      <div className="bg-gray-900 rounded p-4 h-64 overflow-auto mb-4 font-mono text-sm">
        {logs.length === 0 ? (
          <span className="text-gray-500">控制台输出将显示在这里...</span>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="text-green-400 mb-1">{log}</div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && (handleCommand(input), setInput(''))}
          placeholder="输入命令..."
          className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => { handleCommand(input); setInput(''); }}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
        >
          执行
        </button>
      </div>
    </div>
  );
};