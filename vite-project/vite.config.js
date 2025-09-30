import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode == "production" ? "/6350500/vueJs/dist" : "/",
    assetsInclude: ["@/data/**", "@/assets/*"],
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
