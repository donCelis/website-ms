const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "mockapi.io"],
  },
  webpack(config) {
    config.module.rules[2].oneOf.forEach((one) => {
      if (!`${one.issuer?.and}`.includes("_app")) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
};
