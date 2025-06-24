import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import airbnb from 'eslint-config-airbnb-base';
import ts from 'typescript-eslint';
import airbnbTypescript from 'eslint-config-airbnb-base-typescript';
export default [
  { languageOptions: { globals: globals.browser, parser: tsParser } },
  js.configs.recommended,
  ...airbnb,
  ...airbnbTypescript,
  ...ts.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  { ignores: ['dist/'] },
];
