# Schedule Service

Мультиплатформенный сервис расписания: один источник данных в Supabase, веб-чат для студентов и Telegram-бот с теми же командами.

## Что реализовано

- Веб-приложение с выбором группы и командами `/today` и `/now`.
- Telegram-бот с кнопками выбора группы, `/today`, `/now` и `/groups`.
- Общая логика определения текущей пары, перемены и завершения учебного дня.
- SQL-схема Supabase с таблицами `groups` и `schedule`, RLS и тестовыми данными для двух групп.
- Демо-режим без ключей Supabase, чтобы проект можно было сразу запустить и показать.

## Готовые ссылки

- GitHub: https://github.com/f0reste/schedule-service
- Issue: https://github.com/f0reste/schedule-service/issues/1
- Pull Request: https://github.com/f0reste/schedule-service/pull/2
- Сайт Vercel: https://schedule-service-jet.vercel.app
- Telegram-бот: https://t.me/f0reste_schedule_service_bot
- Supabase project: https://supabase.com/dashboard/project/nklvmvrwwxmquixofivg

## Запуск сайта

```bash
npm run dev
```

Откройте адрес, который покажет локальный Node-сервер. Установка npm-пакетов не нужна.

## Подключение Supabase

Supabase уже подключен к сайту через публичный ключ в `src/config.js`.

Если нужно развернуть проект заново:

1. Создайте проект в Supabase.
2. Откройте SQL Editor и выполните `supabase/schema.sql`.
3. Скопируйте `.env.example` в `.env`.
4. Для сайта заполните `SUPABASE_URL` и `SUPABASE_ANON_KEY` в `src/config.js`.
5. Для Telegram-бота заполните `SUPABASE_URL`, `SUPABASE_ANON_KEY` и `TELEGRAM_BOT_TOKEN` в `.env`.
6. Перезапустите сайт и бота.

## Запуск Telegram-бота

1. Создайте бота через `@BotFather`.
2. Добавьте токен в `.env`:

```bash
TELEGRAM_BOT_TOKEN=123456789:your-token
```

3. Запустите:

```bash
npm run bot
```

## Деплой на Vercel

Проект опубликован на Vercel: https://schedule-service-jet.vercel.app

Настройки деплоя:

- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: Other

## Чек-лист сдачи

- В Supabase есть таблицы `groups` и `schedule`.
- В таблице есть минимум две группы и тестовое расписание.
- Сайт показывает актуальные данные из Supabase.
- Telegram-бот показывает те же данные из Supabase.
- `/now` различает текущую пару, перемену и конец учебного дня.
- В GitHub есть история коммитов и Pull Request для фронтенда.
