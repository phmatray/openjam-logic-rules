module.exports = function(wallaby) {
  return {
    files: ['tsconfig.json', 'src/**/*.ts?(x)', '!src/**/*.spec.ts?(x)'],

    tests: ['src/**/*.spec.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    preprocessors: {
      '**/*.js?(x)': file =>
        require('@babel/core').transform(file.content, {
          sourceMap: true,
          compact: false,
          filename: file.path,
          presets: [require('babel-preset-jest')]
        })
    },

    debug: true
  };
};
