module.exports = {
  stories: [
    "../projects/webfullstack-design-system/src/lib/**/*.stories.mdx",
    "../projects/webfullstack-design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
