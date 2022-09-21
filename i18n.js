module.exports = {
  locales: ["en", "de"],
  defaultLocale: "en",
  pages: {
    "/": ["common"],
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/locales/${locale}/${namespace}`).then((m) => m.default),
};
