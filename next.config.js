const withPWA = require('next-pwa')({
  dest: "public",
});
const path = require('path');

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
});
