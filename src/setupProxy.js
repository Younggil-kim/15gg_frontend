const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/myinfo',
    createProxyMiddleware({
      target: 'http://3.36.69.51',
      changeOrigin: true,
    })
  );
  app.use(
    '/profile',
    createProxyMiddleware({
      target: 'http://3.36.69.51',
      changeOrigin: true,
    })
  );
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://3.36.69.51',
      changeOrigin: true,
    })
  );
  app.use(
      '/lol',
      createProxyMiddleware({
        target: 'https://kr.api.riotgames.com',
        changeOrigin: true,
      })
    );
};