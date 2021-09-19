module.exports = {
  port: 9401,
  open: 'external',
  host: 'dev.localhost',
  server: {
    baseDir: './dist/apps/wallet',
    middleware: {
      1: require('compression')()
    }
  }
};
