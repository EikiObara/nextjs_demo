const withPWA = require('next-pwa')({
  dest: "public",
  disable: process.env.NODE_ENV === 'development',
});
const path = require('path');

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
});
