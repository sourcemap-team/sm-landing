// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'app')],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
