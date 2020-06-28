const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    example: "example/src",
    "@react-ratel/core": "../packages/react-ratel/build",
  })(config);

  return config;
};
