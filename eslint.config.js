import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,
  ts.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      tailwindcss,
    },
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];
