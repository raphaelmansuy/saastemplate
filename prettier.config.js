module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  semi: false,
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              ['^(react/(.*)$)|^(react$)'],
              ['^(next/(.*)$)|^(next$)'],
              'module',
              'absolute',
              ['^types$'],
              ['^@/types/(.*)$'],
              ['^@/config/(.*)$'],
              ['^@/lib/(.*)$'],
              ['^@/hooks/(.*)$'],
              ['^@/components/ui/(.*)$'],
              ['^@/components/(.*)$'],
              ['^@/registry/(.*)$'],
              ['^@/styles/(.*)$'],
              ['^@/app/(.*)$'],
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
}
