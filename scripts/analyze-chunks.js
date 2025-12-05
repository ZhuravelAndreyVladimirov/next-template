#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const CHUNKS_DIR = path.join(process.cwd(), ".next", "static", "chunks");
const MANIFEST_PATH = path.join(process.cwd(), ".next", "build-manifest.json");

const formatSize = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
};

const detectChunkName = (fileName, content) => {
  if (content.includes("@mantine/")) return "mantine";
  if (content.includes("next-intl") || content.includes("useTranslations"))
    return "next-intl";
  if (content.includes("@tabler/icons") || content.includes("tabler-icons"))
    return "tabler-icons";
  if (content.includes("node_modules/axios") || content.includes("axios"))
    return "axios";
  if (content.includes("zustand")) return "zustand";
  if (content.includes("node_modules/react")) return "react";
  if (content.includes("webpackChunkName") || content.includes("__webpack_require__"))
    return "runtime";
  if (content.includes("pages/") || content.includes("app/")) return "app-pages";
  if (content.includes("node_modules/")) return "vendor";
  if (fileName.includes("runtime") || fileName.includes("webpack")) return "runtime";
  return "other";
};

const analyzeChunks = () => {
  if (!fs.existsSync(CHUNKS_DIR)) {
    console.log("⚠️  Директория .next/static/chunks не найдена. Запустите `yarn build` сначала.");
    return;
  }

  const files = fs.readdirSync(CHUNKS_DIR);
  const jsFiles = files.filter((file) => file.endsWith(".js"));

  if (jsFiles.length === 0) {
    console.log("⚠️  JavaScript чанки не найдены.");
    return;
  }

  const chunkGroups = {};
  let totalSize = 0;

  jsFiles.forEach((file) => {
    const filePath = path.join(CHUNKS_DIR, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    let chunkName = "other";
    try {
      const content = fs.readFileSync(filePath, "utf8").substring(0, 50000);
      chunkName = detectChunkName(file, content);
    } catch (e) {
      // оставляем chunkName = "other"
    }

    if (!chunkGroups[chunkName]) {
      chunkGroups[chunkName] = { count: 0, size: 0, files: [] };
    }
    chunkGroups[chunkName].count += 1;
    chunkGroups[chunkName].size += size;
    chunkGroups[chunkName].files.push(file);
  });

  console.log("\n📦 Статистика JavaScript чанков:");
  console.log("═".repeat(70));
  console.log(`Всего JS чанков: ${jsFiles.length}`);
  console.log(`Общий размер: ${formatSize(totalSize)}`);
  console.log("─".repeat(70));

  const sortedGroups = Object.entries(chunkGroups).sort(([, a], [, b]) => b.size - a.size);
  sortedGroups.forEach(([name, stats]) => {
    console.log(
      `${name.padEnd(20)} │ ${stats.count.toString().padStart(3)} файл(ов) │ ${formatSize(
        stats.size
      ).padStart(10)}`
    );
  });

  console.log("═".repeat(70));
  console.log("");

  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
      const pages = Object.keys(manifest.pages || {});
      console.log(`📄 Страниц в build-manifest: ${pages.length}`);
      console.log("");
    } catch (e) {
      // ignore errors
    }
  }
};

analyzeChunks();
