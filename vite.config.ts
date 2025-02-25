import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "./", // Название репозитория
    build: {
        outDir: "dist", // Куда собирать проект
        emptyOutDir: true, // Удаляет старые файлы перед билдом
    },
    publicDir: "public", // Указываем явно папку public
});
