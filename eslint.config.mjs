import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Игнорируемые файлы и папки
    ignores: [
      'node_modules/**', // Игнорируем зависимости
      'docs/**', // Игнорируем сборку
    ],
  },
  {
    // Применяем правила к файлам
    files: ['**/*.{js,mjs,cjs}'],

    // Наследуем конфигурации
    extends: [
      js.configs.recommended, // Базовые рекомендованные правила ESLint
      prettier, // Отключаем правила, конфликтующие с Prettier
    ],

    // Настройки языка
    languageOptions: {
      ecmaVersion: 'latest', // Современный JavaScript
      sourceType: 'module', // Используем ES модули
      globals: {
        $: 'readonly',
        jQuery: 'readonly',
        ...globals.browser, // Глобальные переменные браузера
        ...globals.node, // Глобальные переменные Node.js
        // Дополнительные глобальные переменные при необходимости:
        // MyGlobal: 'readonly',
      },
    },

    // Кастомные правила
    rules: {
      // === СОВРЕМЕННЫЙ JS ===
      'no-var': 'error', // Запрещает var, используй let/const
      'prefer-const': 'error', // Предпочитает const если переменная не переопределяется

      // === БЕЗОПАСНОСТЬ ===
      'no-undef': 'error', // Переменные должны быть объявлены
      'no-unused-vars': 'warn', // Запрещает неиспользуемые переменные
      'no-redeclare': 'error', // Запрещает повторное объявление переменных
      'no-unreachable': 'error', // Запрещает недостижимый код

      // === КАЧЕСТВО КОДА ===
      eqeqeq: ['error', 'always'], // Требует строгого равенства (===, !==)
      curly: ['error', 'all'], // Всегда используй фигурные скобки в условиях

      // === ДОПОЛНИТЕЛЬНЫЕ РЕКОМЕНДАЦИИ ===
      'prefer-arrow-callback': 'warn', // Предпочитает стрелочные функции для колбэков
      'no-duplicate-imports': 'error', // Запрещает дублирующиеся импорты
      'no-else-return': 'warn', // Избегай else после return
    },
  },
]);
