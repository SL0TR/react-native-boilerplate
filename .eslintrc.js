module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@app/features': './src/features',
          '@app/components': './src/components',
          '@app/navigator': './src/navigator',
          '@app/screens': './src/screens',
          '@app/services': './src/services',
          '@app/styles': './src/styles',
          '@app/lib': './src/lib',
          '@app/config': './src/config',
          '@app/store': './src/store',
        },
      },
    },
  },
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 1,
    'no-template-curly-in-string': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'react/jsx-props-no-spreading': 0,
    'dot-notation': 0,
    'no-console': 0,
    'react/require-default-props': 0,
    'no-param-reassign': 0,
    'react/jsx-curly-newline': 0,
    camelcase: 0,
    'import/no-unresolved': 0,
    radix: 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
