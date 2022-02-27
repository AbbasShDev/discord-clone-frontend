import { defineConfig } from "vite";
import react from "vite-preset-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), svgr()],
});
