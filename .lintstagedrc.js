module.exports = {
  "**/src/**/*.scss": (filenames) => {
    return [`yarn prettier --write ${filenames.join(" ")}`];
  },
  "**/src/**/*.{ts,tsx,js,jsx}": (filenames) => {
    return [
      `yarn eslint --max-warnings=0 --fix ${filenames.join(" ")}`,
      `yarn prettier --write ${filenames.join(" ")}`,
    ];
  },
};
