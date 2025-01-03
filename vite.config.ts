import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react-swc";
    import path from "path";
    import { componentTagger } from "lovable-tagger";
    
    // https://vitejs.dev/config/
    export default defineConfig(({ mode }) => ({
      server: {
        host: "::",
        port: 8080,
        // ✅ Burada historyApiFallback əlavə etdik
        fs: {
          strict: false,
        },
      },
      plugins: [
        react(),
        mode === "development" && componentTagger(),
      ].filter(Boolean),
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      // ✅ Bu hissədə Vite `history` fallback əlavə olunur
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      // ✅ Bununla serverdə səhifə yeniləndikdə marşrut problemi həll olunur
      server: {
        historyApiFallback: true,
      },
    }));
    
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
