import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...tseslint.configs.recommended,
  {
    files: [ '**/*.{js,jsx,ts,tsx}' ],
    ignores: [ 'dist', 'build', 'eslint.config.js', 'vite.config.ts' ],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
    },
    languageOptions: {
      parserOptions: {
        parser:tseslint.parser,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures:{
          jsx: true,
          version: 'latest'
        },
        lib: ['ESNext']
      },
    },
    rules: {
        '@typescript-eslint/no-unused-expressions': [
          'warn',
          {
            allowTernary: true,
            allowShortCircuit: true,
            enforceForJSX: true
          },
        ],
        'eqeqeq': [ 'warn' ],
        'no-console': [ 'warn' ],
        'no-proto': [ 'warn' ],
        'no-empty-function': [ 'warn' ],
        'prefer-object-spread': [ 'warn' ],
        'no-dupe-else-if': [ 'warn' ],
        'no-self-compare': [ 'warn' ],
        'no-sparse-arrays': [ 'warn' ],
        'object-shorthand': [ 'warn' ],
        'no-multiple-empty-lines': [ 'warn', { 'max': 1 } ],
        'no-array-constructor': [ 'warn' ],
        'no-new-object': [ 'warn' ],
        'no-duplicate-imports': 'warn',
        '@stylistic/computed-property-spacing': ['warn', 'always'],
        '@stylistic/keyword-spacing': ['warn', { before: true, after: true }],
        '@stylistic/arrow-spacing': ['warn', { before: true, after: true }],
        '@stylistic/object-curly-spacing': ['warn', 'always', { objectsInObjects: true }],
        '@stylistic/jsx-quotes': ['warn', 'prefer-single'],
        '@stylistic/quotes': ['warn', 'single'],
        '@stylistic/indent': ['warn', 2],
        '@stylistic/semi': ['warn', 'always'],
        '@stylistic/semi-spacing': 'warn',
        '@stylistic/space-before-blocks': 'warn',
    }
  }
];