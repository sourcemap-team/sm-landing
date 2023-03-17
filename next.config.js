// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'app', 'styles')],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
