/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withImages = require('next-images')


module.exports = withImages({
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },
  images: {
    disableStaticImages: true
  },
  
})

// const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// const nextEnv = require("next-env");
// const dotenvLoad = require("dotenv-load");

// dotenvLoad();

// const withEnv = nextEnv();

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'm in dev mode")
//   }
//   return withEnv(defaultConfig)
// }