module.exports = {
  stories: [
    {
      directory: "../stories",
      titlePrefix: "",
      files: "*.stories.*",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
}
