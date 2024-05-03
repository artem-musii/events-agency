import globals from 'globals'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default [
  {
    ignores: ['node_modules', '**/public/', '**/dist/', '**/.parcel-cache/'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
        },
      ],
      'unicorn/prefer-add-event-listener': ['off'],
    },
  },
]
