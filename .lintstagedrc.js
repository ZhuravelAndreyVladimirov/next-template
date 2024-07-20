module.exports = {
  "**/src/**/*.{scss, css, sass}": (filenames) => {
    return [`yarn prettier --write ${filenames.join(" ")}`];
  },
  "**/src/**/*.{ts,tsx,js,jsx}": (filenames) => {
    return [
      `yarn eslint --max-warnings=0 --fix ${filenames.join(" ")}`,
      `yarn prettier --write ${filenames.join(" ")}`,
    ];
  },
};
