module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.node({ fs: "empty" }),
      config.module.rules.push(
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          use: ["url-loader"],
        }
      );
    return config;
  },
};
