import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@audio": path.resolve(__dirname, "./src/assets/audio"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@ui": path.resolve(__dirname, "./src/components/ui"),
			"@utils": path.resolve(__dirname, "./src/lib/utils"),
		},
	},
});
