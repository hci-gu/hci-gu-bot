export default {
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
