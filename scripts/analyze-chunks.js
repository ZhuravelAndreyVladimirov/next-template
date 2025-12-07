#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const path = require('path');

const CHUNKS_DIR = path.join(process.cwd(), '.next', 'static', 'chunks');

const formatSize = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
};

const analyzeChunks = () => {
  if (!fs.existsSync(CHUNKS_DIR)) {
    console.log('⚠️  Директория .next/static/chunks не найдена.');
    return;
  }

  const files = fs.readdirSync(CHUNKS_DIR);
  const jsFiles = files
    .filter((file) => file.endsWith('.js'))
    .sort((a, b) => {
      const statsA = fs.statSync(path.join(CHUNKS_DIR, a));
      const statsB = fs.statSync(path.join(CHUNKS_DIR, b));
      return statsB.size - statsA.size;
    });

  if (jsFiles.length === 0) {
    console.log('⚠️  JavaScript чанки не найдены.');
    return;
  }

  let totalSize = 0;

  console.log('\n📦 ДЕТАЛЬНАЯ статистика JavaScript чанков:');
  console.log('═'.repeat(80));
  console.log(`Всего JS чанков: ${jsFiles.length}`);

  // Показываем ТОП-10 самых больших файлов
  console.log('\n🏆 ТОП-10 самых больших чанков:');
  console.log('─'.repeat(80));

  jsFiles.slice(0, 10).forEach((file, index) => {
    const filePath = path.join(CHUNKS_DIR, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    console.log(
      `${(index + 1).toString().padStart(2)}. ${file.padEnd(30)} ${formatSize(size).padStart(12)}`,
    );
  });

  // Остальные файлы
  if (jsFiles.length > 10) {
    const otherFiles = jsFiles.slice(10);
    let otherSize = 0;
    otherFiles.forEach((file) => {
      const filePath = path.join(CHUNKS_DIR, file);
      const stats = fs.statSync(filePath);
      otherSize += stats.size;
      totalSize += stats.size;
    });
    console.log(`   ... и ещё ${otherFiles.length} файлов ${formatSize(otherSize)}`);
  }

  console.log('─'.repeat(80));
  console.log(`📊 Общий размер: ${formatSize(totalSize)}`);
  console.log('═'.repeat(80));

  // Группировка по маске (корневые чанки vs страницы)
  const rootChunks = jsFiles.filter(
    (f) => f.includes('app-pages') || f.includes('webpack') || f.includes('main'),
  );
  const pageChunks = jsFiles.filter(
    (f) =>
      !f.includes('app-pages') &&
      !f.includes('webpack') &&
      !f.includes('main') &&
      !f.includes('turbopack'),
  );

  console.log('\n📂 Категории чанков:');
  console.log('─'.repeat(80));
  console.log(`• Корневые (app-pages, runtime): ${rootChunks.length} файлов`);
  console.log(`• Страничные (route-based): ${pageChunks.length} файлов`);
  console.log(
    `• Turbopack/Webpack: ${jsFiles.filter((f) => f.includes('turbopack') || f.includes('webpack')).length} файлов`,
  );
};

analyzeChunks();
