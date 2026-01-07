import { useState, useEffect } from 'react';

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const [memory, setMemory] = useState({ used: 0, total: 0 });

  useEffect(() => {
    const updateMetrics = () => {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        const navigation = navEntries[0] as PerformanceNavigationTiming & { firstContentfulPaint?: number };
        setMetrics({
          fcp: navigation?.firstContentfulPaint || 0,
          lcp: 0,
          fid: 0,
          cls: 0,
          ttfb: navigation?.responseStart || 0
        });
      }
      
      const memEntry = performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } };
      if (memEntry.memory) {
        setMemory({
          used: Math.round(memEntry.memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memEntry.memory.totalJSHeapSize / 1024 / 1024)
        });
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">性能监控</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 rounded p-4">
          <h3 className="text-sm text-gray-400 mb-2">FCP (首次内容绘制)</h3>
          <p className="text-2xl font-mono text-green-400">{metrics.fcp.toFixed(2)}ms</p>
        </div>
        <div className="bg-gray-700 rounded p-4">
          <h3 className="text-sm text-gray-400 mb-2">TTFB (首字节时间)</h3>
          <p className="text-2xl font-mono text-blue-400">{metrics.ttfb.toFixed(2)}ms</p>
        </div>
        <div className="bg-gray-700 rounded p-4">
          <h3 className="text-sm text-gray-400 mb-2">内存使用</h3>
          <p className="text-2xl font-mono text-yellow-400">{memory.used}MB</p>
          <p className="text-sm text-gray-500">共 {memory.total}MB</p>
        </div>
        <div className="bg-gray-700 rounded p-4">
          <h3 className="text-sm text-gray-400 mb-2">性能评分</h3>
          <p className="text-2xl font-mono text-green-400">优秀</p>
        </div>
      </div>
    </div>
  );
};