module.exports = {
  plugins: {
    "postcss-preset-mantine": {
      autoRem: true,
    },
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-mobile": "36em",
        "mantine-breakpoint-tablet": "48em",
        "mantine-breakpoint-laptop": "64em",
        "mantine-breakpoint-desktop": "90em",
      },
    },
  },
};
