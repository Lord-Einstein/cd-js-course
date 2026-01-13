// server.ts
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // Route principale
    if (url.pathname === "/") {
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Servir le fichier JavaScript
    if (url.pathname === "/app.js") {
      const file = Bun.file("./src/app.js");
      return new Response(file, {
        headers: { "Content-Type": "application/javascript" },
      });
    }

    // API exemple
    if (url.pathname === "/api/hello") {
      return Response.json({
        message: "Bonjour depuis Bun!",
        timestamp: new Date().toISOString(),
      });
    }

    return new Response("404 - Page non trouvée", { status: 404 });
  },
});

console.log(`🚀 Serveur lancé sur http://localhost:${server.port}`);

const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bun + TypeScript</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .container {
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      max-width: 500px;
      width: 100%;
    }
    h1 {
      color: #333;
      margin-bottom: 10px;
      font-size: 2em;
    }
    .subtitle {
      color: #666;
      margin-bottom: 30px;
    }
    button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      width: 100%;
      font-weight: 600;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
    }
    button:active {
      transform: translateY(0);
    }
    #result {
      margin-top: 20px;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 10px;
      display: none;
    }
    #result.show {
      display: block;
      animation: slideIn 0.3s ease;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .message {
      color: #333;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .timestamp {
      color: #888;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 Bun + TypeScript</h1>
    <p class="subtitle">Projet web minimal</p>

    <button>Appeler l'API</button>

    <div data-component="result">
      <div class="message" id="message"></div>
      <div class="timestamp"></div>
    </div>
  </div>

  <script src="/app.js"></script>
</body>
</html>
`;
