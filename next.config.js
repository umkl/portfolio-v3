// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack: (config) => {
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
});
