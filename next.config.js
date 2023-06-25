/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    // Exclude files or directories from being processed by Next.js
    if (!isServer) {
      config.module.rules.push({
        test: /\.(stories|test)\.(tsx?|ts?)$/,
        loader: 'ignore-loader',
      })
    }

    return config
  },
}
