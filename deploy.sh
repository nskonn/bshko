#!/bin/bash
set -e

# Путь к папке проекта (предполагаемый, исходя из домена)
PROJECT_DIR="/srv/bshko.webzella.ru/app"

echo "🔄 Обновление кода для bshko..."
cd "$PROJECT_DIR"

if [ -d .git ]; then
  # Сначала убедимся, что мы на нужной ветке
  git fetch origin
  git checkout release
  git pull origin release || true
fi

echo "📦 Сборка и деплой Docker..."
# Перезапуск контейнеров
docker compose down
docker compose up -d --build

echo "✅ Деплой bshko завершён!"
docker ps | grep bshko