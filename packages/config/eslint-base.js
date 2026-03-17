// @ts-check
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // TypeScript правила
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Импорты
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],

      // Общие
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
)