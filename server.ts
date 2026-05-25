import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Integrate Vite middleware in development mode
  if (process.env.NODE_ENV !== "production" && process.env.VITE_DEV !== "false") {
    // Rewrite logical client-side routes in development to index.html so Vite serves the SPA framework
    app.use((req, res, next) => {
      const urlPath = req.path.toLowerCase();
      if (urlPath === "/apex2" || urlPath === "/apex2/") {
        req.url = "/index.html";
      }
      next();
    });

    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // Fallback for SPA routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
