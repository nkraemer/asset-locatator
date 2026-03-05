import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import configPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  configPrettier,
  {
    files: ['src/**/*.ts'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    files: ['src/**/*.vue'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/no-v-html': 'error',
      'vue/define-emits-declaration': 'error',
      'vue/require-prop-types': 'error',
    },
  },
  {
    files: ['src/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
