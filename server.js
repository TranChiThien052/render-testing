const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint - trả về thông tin Node khi truy cập /api
app.get('/api', (req, res) => {
  const nodeInfo = {
    message: 'Thông tin hệ thống Node.js',
    nodeVersion: process.version,
    platform: process.platform,
    architecture: process.arch,
    uptime: `${Math.floor(process.uptime())} giây`,
    memoryUsage: {
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
      external: `${Math.round(process.memoryUsage().external / 1024 / 1024)} MB`
    },
    cpuUsage: process.cpuUsage(),
    pid: process.pid,
    cwd: process.cwd(),
    timestamp: new Date().toISOString()
  };
  
  res.json(nodeInfo);
});

// Serve static files từ thư mục build
app.use(express.static(path.join(__dirname, 'public')));

// Xử lý tất cả các route khác (cho React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
  console.log(`Truy cập /api để xem thông tin Node.js`);
});
