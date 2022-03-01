const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
//   app.use(
//     '/myinfo',
//     createProxyMiddleware({
//       target: process.env.REACT_APP_SERVER_URL,
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/profile',
//     createProxyMiddleware({
//       target: process.env.REACT_APP_SERVER_URL,
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     '/auth',
//     createProxyMiddleware({
//       target: process.env.REACT_APP_SERVER_URL,
//       changeOrigin: true,
//     })
//   );
  app.use(
      '/lol',
      createProxyMiddleware({
        target: 'https://kr.api.riotgames.com',
        changeOrigin: true,
      })
    );
};