const chalk = require("chalk");
const { run } = require("./common");

module.exports = {
  configure: async () => {
    console.log(chalk.green("I got triggered in production env"));

    return await run("git", ["config", "--local", "core.hooksPath", __dirname]);
  },
};
