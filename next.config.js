const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  withFonts,
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
]);
