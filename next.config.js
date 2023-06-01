const prd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: "public",
  disable: prd ? false : true
});
const path = require('path');

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
});
