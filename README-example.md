# 🎯 ЗАДАНИЕ #1: ВЕРСТКА МАКЕТА НА NEXT.JS

---

## 📋 ОПИСАНИЕ ЗАДАНИЯ

Твоя задача — сверстать предоставленный макет используя **Next.js (App Router)** с генерацией статических страниц (**SSG**).

Это первый реальный проект в нашем курсе, поэтому обращай внимание на качество кода и соответствие макету.

### Два варианта выполнения:

- ✅ Через Figma MCP (если есть доступ)
- ✅ Через скриншот макета (универсальный вариант)

---

## ⚡ ВАЖНО: Pre-Commit Проверки

При первой установке проекта:

```bash
npm install
```

Это установит **husky** и **pre-commit хуки**.

### Что будет происходить при каждом коммите:

```bash
git add .
git commit -m "feat: task-1"

# ⚙️ Автоматически:
# ✅ ESLint проверяет синтаксис
# ✅ TypeScript проверяет типы
# ✅ Prettier форматирует код
```

### Если есть ошибки:

- ❌ Коммит НЕ создается
- 🔧 Исправляешь ошибку
- 🔄 Пробуешь коммит снова

Это нормально и полезно! Pre-commit хуки помогают писать clean code с самого начала.

---

## 📝 ПОДРОБНЫЕ ИНСТРУКЦИИ

### 1. Клонируй репо с заданиями:

```bash
git clone <repo-url>
cd hw-1
```

### 2. Создай ветку с правильным названием:

```bash
git checkout -b Фамилия-ПерваяБукваИмени
```

_Примеры: `Ivanov-I`, `Smirnova-O`, `Petrov-P`_

### 3. Структура Next.js App Router проекта:

Проект уже готов и развернут. Вот как выглядит структура, в которой ты будешь работать:

```
hw-1/
├── .husky/
│   └── pre-commit                    ← Pre-commit хук
├── app/                              ← Next.js App Router entry (не редактируй)
│   ├── favicon.ico
│   ├── layout.tsx
│   └── page.tsx                      ← re-exports из src/pages/home
│
├── src/                              ← 👈 ГЛАВНАЯ ПАПКА ДЛЯ РАБОТЫ
│   ├── app/
│   │   ├── providers/
│   │   │   ├── index.tsx
│   │   │   ├── QueryProvider.tsx     ← TanStack React Query
│   │   │   └── StoreProvider.tsx     ← Redux Toolkit
│   │   └── styles/
│   │       └── globals.css
│   ├── pages/
│   │   └── home/
│   │       ├── index.ts
│   │       └── ui/
│   │           ├── HomePage.tsx      ← ГЛАВНЫЙ ФАЙЛ ДЛЯ ВЕРСТКИ
│   │           └── HomePage.module.css
│   ├── shared/
│   │   ├── api/
│   │   │   └── base.ts
│   │   ├── config/
│   │   │   └── env.ts
│   │   ├── lib/                      ← Утилиты
│   │   ├── store/
│   │   │   ├── index.ts
│   │   │   └── hooks.ts
│   │   └── ui/                       ← Переиспользуемые компоненты
│   ├── widgets/                      ← Крупные блоки страницы
│   ├── features/                     ← Фичи
│   └── entities/                     ← Сущности
│
├── pages/                            ← Пустая папка (нужна для Next.js, не трогай)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── scripts/
│   └── check-semantic.mjs
├── logs/
│   └── agent.log
├── eslint.config.mjs
├── lint-staged.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

**Основной директория для работы:** `src/pages/...`

**Псевдоним пути:** `@/` → `src/` (например, `@/shared/ui/Button` → `src/shared/ui/Button`)

**Предустановленные библиотеки:** Redux Toolkit и TanStack React Query уже подключены через провайдеры — можешь использовать их при необходимости.

### 4. Требования к верстке:

✅ **Соответствие макету** — пиксель в пиксель (±2px допустимо)

✅ **Адаптивность** — работает на мобильных (320px), планшетах (768px) и десктопе (1920px)

✅ **Семантический HTML** — используй правильные теги (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)

✅ **Нет встроенных стилей** — все стили в отдельных файлах

✅ **Кроссбраузерность** — работает в Chrome, Firefox, Safari

✅ **Next.js best practices:**

- Использование Image компонента для картинок (не `<img>`)
- Правильный setup для SSG
- Оптимизация для SEO (метаданные в `metadata`)
- Нет клиентского кода где он не нужен

---

## 🤖 Как использовать Claude для помощи

### 📸 Загрузи макет в Claude:

Загрузи скриншот дизайна ИЛИ ссылку на Figma файл

### 🎯 Пример хорошего prompt'а:

```
Я буду верстать следующий макет используя Next.js.

Требования к реализации:
- App Router, SSG
- Семантический HTML (header, nav, main, section, footer)
- Адаптивный дизайн (mobile-first approach):
  * Мобильные: 320px
  * Планшеты: 768px
  * Десктоп: 1920px
- <Image> компонент для всех картинок из /public
- Метаданные в layout.tsx (title, description)
- Нулевые ошибки TypeScript

На основе этого макета создай:
1. Структуру для src/pages/home/ui/HomePage.tsx
2. Стили в HomePage.module.css
3. Компоненты если нужны (в src/shared/ui/ или src/widgets/)

Начни с заголовка, потом основной контент, потом футер.
```

### 🔄 Уточняй детали с Claude:

- Шрифты (семейства, размеры, веса)
- Цвета (основные, акценты, фоны)
- Отступы и выравнивание (grid, flexbox)
- Адаптивные точки разрыва (breakpoints)

---

## 📦 Установка и запуск

```bash
# Переходишь в папку проекта
cd hw-1

# Устанавливаешь зависимости
npm install

# Запускаешь dev сервер
npm run dev
# Открой http://localhost:3000

# Проверяешь что все работает
npm run lint        # ESLint
npx tsc --noEmit    # TypeScript
npm run build       # Next.js build
npm run start       # Production
```

---

## 💾 Коммит и Push в GitLab

```bash
# Добавляешь свои изменения
git add .

# Создаешь коммит с понятным сообщением
git commit -m "feat: task-1 markup complete"

# ⚙️ Автоматически запустятся проверки:
# ✅ ESLint — проверка кода
# ✅ TypeScript — проверка типов
# ✅ Prettier — форматирование

# Если ошибки → исправляешь → пробуешь снова
# Если все ОК → коммит создан!

# Пушишь в свою ветку в GitLab
git push origin Фамилия-П
```

⚠️ **ВАЖНО:** Push идёт в **твою ветку**, не в main!

---

## ✅ ЧЕКЛИСТ ПЕРЕД PUSH

Перед тем как делать push в ветку, **обязательно** проверь все пункты:

### Инструкции:

- [ ] Ветка создана с правильным названием (`Фамилия-И`)
- [ ] Работаешь в папке `src/pages/home/ui/` (главный `HomePage.tsx`)

### Проверки кода:

- [ ] `npm run lint` — ноль ошибок ESLint
- [ ] `npx tsc --noEmit` — ноль ошибок TypeScript
- [ ] `npm run build` — успешная сборка
- [ ] `npm run start` — локально работает на http://localhost:3000

### Верстка:

- [ ] HTML валидный (нет ошибок синтаксиса)
- [ ] Адаптив работает (DevTools → Device Toolbar: 320px, 768px, 1920px)
- [ ] Нет консольных ошибок (F12 → Console)
- [ ] Макет совпадает в пикселях (допустимо ±2px)

### Структура кода:

- [ ] Используешь `<Image>` компонент вместо `<img>`
- [ ] Добавлены метаданные (`metadata` в `layout.tsx`)
- [ ] Семантический HTML (header, nav, main, section, footer)
- [ ] Комментарии в коде где это необходимо

### Git:

- [ ] Git commit с понятным сообщением

---

## 💡 СОВЕТЫ

- 🎯 Загружай макет в Claude и проси стартовый код для `HomePage.tsx`
- 🔄 Уточняй детали (цвета, размеры, шрифты через Claude)
- 📐 Используй Claude для расчета адаптивных breakpoints
- 🐛 Спрашивай, почему что-то не совпадает
- ⚡ Проси оптимизировать код для Next.js/SSG

---

## 📚 ПОЛЕЗНЫЕ ССЫЛКИ

- 📄 Макет задания: TODO: PUT LINK HERE
- 📖 Next.js документация: https://nextjs.org/docs
- 📄 Figma MCP doc: https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server
- 🔗 GitLab project link: TODO: PUT LINK HERE
- ⏰ Deadline: **1 неделя** с момента лекции
- ❓ Вопросы? Пиши в личные сообщения Енлик(ссылка на dm Yenglik) или Абылхаиру (ссылка на dm Abyl)

---

## 💡 СОВЕТЫ ОТ ОПЫТНОГО РАЗРАБОТЧИКА

✨ **Как я выполняю такие задания с Claude:**

1. **Начинаю с макета:**
   - Загружаю скриншот или ссылку Figma
   - Прошу Claude: "Создай структуру для src/pages/home/ui/HomePage.tsx"

2. **Генерирую базовый код:**
   - Claude пишет `HomePage.tsx`, `HomePage.module.css`
   - Я копирую, пробую локально (`npm run dev`)

3. **Проверяю совпадение:**
   - Открываю DevTools, сравниваю с макетом
   - Спрашиваю Claude: "Почему отступ не совпадает?" или "Как сделать адаптив?"

4. **Оптимизирую:**
   - Улучшаю структуру компонентов
   - Добавляю метаданные для SEO
   - Проверяю production build

5. **Тестирую перед сабмитом:**
   - На разных размерах экранов (мобильный, планшет, десктоп)
   - На разных браузерах
   - Production build локально работает

6. **Пример хорошего prompt**

  You are a Senior Frontend Developer implementing a landing page for a Next.js project.

  ## Tech Stack
  - Next.js (App Router) + React, TypeScript strict mode
  - Feature-Sliced Design (FSD) architecture
  - CSS Modules (no Tailwind, no inline styles)
  - Path alias: `@/*` → `./src/*`

  ## FSD Layer Rules — CRITICAL
  - `src/widgets/` — ONLY components reused across multiple pages (Header, Footer, shared sidebars). Do NOT put page-specific
  sections here.
  - `src/pages/<page-name>/ui/` — all sections unique to that page live here as subfolders (e.g. `HeroSection/`,
  `StatsSection/`).
  - `src/shared/` — design tokens, utils, store, shared UI primitives
  - `src/app/` — Next.js App Router root: layout, providers, global styles

  ## Design Token Rules
  - Define all CSS custom properties (colors, radii, fonts) directly inside `src/app/styles/globals.css` under `:root {}`.
  - Do NOT create a separate `variables.css` and import it — relative `@import` paths from `src/app/styles/` to
  `src/shared/styles/` are error-prone. Inline everything.

  ## Figma → Code Workflow
  1. Call `get_design_context` + `get_screenshot` for the desktop node first, then mobile.
  2. Read the raw Figma output carefully before writing any CSS:
     - The section's own `background` color may be white/neutral even if it looks dark — darkness can come from a large
  absolutely-positioned background image layered on top.
     - Background images in Figma are often oversized (e.g. 1961×2552 px) and centered with `transform: translate(-50%, -50%)`,
  NOT `object-fit: cover` on an `inset: 0` element. Replicate the exact pixel dimensions and centering.
     - Illustrations positioned with `inset: X% Y% X% Y%` must be **direct children of the section element** (which has
  origin).
  3. Download all assets from Figma MCP URLs immediately — they expire in 7 days. Verify file type with the `file` command;
  rename `.png` → `.svg` if the content is SVG.
  4. Button colors: always check both mobile and desktop variants. An accent button that uses green on desktop may incorrectly
  - `src/app/` — Next.js App Router root: layout, providers, global styles

  ## Design Token Rules
  - Define all CSS custom properties (colors, radii, fonts) directly inside `src/app/styles/globals.css` under `:root {}`.
  - Do NOT create a separate `variables.css` and import it — relative `@import` paths from `src/app/styles/` to
  `src/shared/styles/` are error-prone. Inline everything.

  ## Figma → Code Workflow
  1. Call `get_design_context` + `get_screenshot` for the desktop node first, then mobile.
  2. Read the raw Figma output carefully before writing any CSS:
     - The section's own `background` color may be white/neutral even if it looks dark — darkness can come from a large
  absolutely-positioned background image layered on top.
     - Background images in Figma are often oversized (e.g. 1961×2552 px) and centered with `transform: translate(-50%, -50%)`,
  NOT `object-fit: cover` on an `inset: 0` element. Replicate the exact pixel dimensions and centering.
     - Illustrations positioned with `inset: X% Y% X% Y%` must be **direct children of the section element** (which has
  `position: relative`), not nested inside a flex content wrapper (which also has `position: relative` and would shift the
  origin).
  3. Download all assets from Figma MCP URLs immediately — they expire in 7 days. Verify file type with the `file` command;
  rename `.png` → `.svg` if the content is SVG.
  4. Button colors: always check both mobile and desktop variants. An accent button that uses green on desktop may incorrectly
  default to purple in your mobile base styles if you copy from a placeholder.
  5. A button with no background and no border in Figma means exactly that — do not add a border for "visual distinction".

  ## CSS Rules
  - Mobile-first: base styles = 375 px, desktop breakpoint = `@media (min-width: 1280px)`.
  - When overriding shorthand properties (e.g. `inset: 0`) in a media query, override all four longhand sides explicitly (`top`,
  `right`, `bottom`, `left`) or you'll get partial overrides.
  - Use `height: Xpx` (exact) for fixed-height Figma frames, not `min-height`.

  ## Font Files
  - Web fonts referenced in `@font-face` (e.g. Formular Mono) must be physically present in `public/fonts/`. If they're missing
  you'll get 404s. Note this to the user and ask them to supply the files — do not attempt to generate font binaries.

  ## Barrel File Generation
  - When creating `index.ts` barrel files with PascalCase export names in a zsh shell, do NOT use `sed` for string capitalization
   — it silently produces wrong output. Write each `index.ts` directly with the Write tool.

**Remember:** Claude — твой напарник в разработке, но **ты** отвечаешь за качество и понимание кода. Не копируй вслепую, думай и учись! 🧠💻

---

## 📊 Техническая информация

**ВАЖНО:** Разрешайте исполнению кода (логирование) для улучшения проверки работ.

Мы логируем только:

- ⏱️ Время исполнения запросов
- 📊 Количество используемых токенов

Ваши prompt'ы и код **НЕ записываются** и используются только для текущей проверки.

Это помогает нам сделать процесс проверки через Claude более эффективным.

**Удачи с заданием!** 🚀✨
