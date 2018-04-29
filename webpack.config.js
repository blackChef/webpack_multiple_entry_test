module.exports = {
  mode: 'development',
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    filename: '[name].build.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        page1_vendor: {
          name: 'page1_vendor',
          chunks: 'initial',
          priority: 1,
          test(module, chunks) {
            const moduleName = module.nameForCondition && module.nameForCondition();
            return chunks.some(chunk => {
              return chunk.name === 'page1' && moduleName.includes('node_modules');
            });
          }
        },
      }
    }
  },
};