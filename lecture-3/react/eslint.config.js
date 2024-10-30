import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        ignores: ['node_modules/', 'dist/'],
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                React: 'writable',
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier: prettierPlugin,
            import: importPlugin,
            '@stylistic': stylistic,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            // ...stylistic.rules,
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off', // React 17+ doesn't need React to be in scope
            'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        },
    },
    prettier, // Include Prettier last to avoid conflicts
];
