import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/store/", // Замените "store" на название вашего репозитория!
    build: {
        outDir: "dist", // Папка для GitHub Pages
    },
});
