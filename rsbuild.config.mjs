import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: [
      {
        context: [`/api`],
        target: `http://somepagewhichdoesnotexits.com:9000`,
        changeOrigin: true,
        secure: false,
      },
    ],
  },
});
