import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 讓同一份專案同時支援：
// - User Site:  https://<owner>.github.io/   (base = '/')
// - Project Site: https://<owner>.github.io/<repo>/ (base = '/<repo>/')
// GitHub Actions 會設定 VITE_BASE；本機預設用 '/'。
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});

