const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8080;
const APP_VERSION = process.env.APP_VERSION || '1.0.0';

// Visual landing page for easy browser demonstration
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cloud-Native App | CI/CD Demo Updated</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f8fafc;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .card {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 40px;
          max-width: 520px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          text-align: center;
        }
        .badge {
          display: inline-block;
          background: #10b981;
          color: #064e3b;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 20px;
        }
        h1 { font-size: 1.8rem; margin-bottom: 12px; color: #ffffff; }
        p { color: #94a3b8; font-size: 1rem; line-height: 1.6; margin-bottom: 24px; }
        .info-grid {
          background: #0f172a;
          border-radius: 10px;
          padding: 16px;
          text-align: left;
          font-family: monospace;
          font-size: 0.9rem;
          color: #38bdf8;
        }
        .info-row { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1e293b; }
        .info-row:last-child { border-bottom: none; }
        .label { color: #64748b; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">● DEPLOYMENT ACTIVE</span>
        <h1>Cloud-Native CI/CD Pipeline</h1>
        <p>Deployed successfully with GitHub Actions, Docker Hub, and Kubernetes! Updated Rollout</p>
        <div class="info-grid">
          <div class="info-row"><span class="label">App Version:</span><span>v${APP_VERSION}</span></div>
          <div class="info-row"><span class="label">Container Host:</span><span>${os.hostname()}</span></div>
          <div class="info-row"><span class="label">Platform:</span><span>${os.platform()} (${os.arch()})</span></div>
          <div class="info-row"><span class="label">Status:</span><span style="color:#10b981;">HEALTHY (200 OK)</span></div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Health check endpoint for Kubernetes probes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    hostname: os.hostname(),
    uptime: process.uptime()
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT} smoothly`);
  });
}

module.exports = app;
