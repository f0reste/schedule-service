# План сдачи лабораторной работы N3

## Что уже готово в проекте

- Web-интерфейс чата с выбором группы и командами `/today`, `/now`.
- Telegram-бот с выбором группы через inline-кнопки и командами `/today`, `/now`, `/groups`.
- Единая схема Supabase: таблицы `groups` и `schedule`.
- Демо-данные для двух групп.
- Общая логика определения текущей пары, перемены и конца учебного дня.
- Локальный сервер без обязательной установки npm-пакетов.

## Ссылки для сдачи

- GitHub: https://github.com/f0reste/schedule-service
- Issue: https://github.com/f0reste/schedule-service/issues/1
- Pull Request: https://github.com/f0reste/schedule-service/pull/2
- Сайт Vercel: https://schedule-service-jet.vercel.app
- Telegram-бот: https://t.me/f0reste_schedule_service_bot
- Supabase project: https://supabase.com/dashboard/project/nklvmvrwwxmquixofivg

## Что сделано по этапам

1. Создан GitHub-репозиторий `schedule-service`.
2. Создана GitHub Issue на разработку интерфейса чата и Telegram-бота.
3. Создан Supabase-проект с таблицами `groups` и `schedule`.
4. Добавлены тестовые данные для двух групп: `ВЕБ-21` и `ИС-22`.
5. Реализован Telegram-бот `@f0reste_schedule_service_bot`.
6. Реализован веб-чат с командами `/today` и `/now`.
7. Создана ветка `feature/frontend`, Pull Request и merge в `main`.
8. Сайт опубликован на Vercel.

## Проверенные сценарии

- Сайт открывается по production-ссылке Vercel.
- Сайт загружает конфигурацию Supabase.
- Supabase REST API возвращает группы `ВЕБ-21` и `ИС-22`.
- Telegram-бот показывает кнопки выбора групп из Supabase.
- После выбора `ВЕБ-21` команда `/today` возвращает расписание на вторник.
- Команда `/now` корректно показывает, что на сегодня пары закончились.

## Локальная проверка

```bash
npm run build
npm run dev
npm run bot
```

## Проверка для преподавателя

- В репозитории есть минимум 4 коммита.
- Pull Request из `feature/frontend` в `main` создан и слит.
- В Supabase есть таблицы `groups` и `schedule`.
- При изменении предмета в Supabase данные обновляются на сайте и в Telegram-боте.
- `/now` корректно показывает текущую пару, перемену или конец учебного дня.
