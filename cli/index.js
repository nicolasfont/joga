#!/usr/bin/env node
const { build } = require("vite");
const react = require("@vitejs/plugin-react");

require("yargs")
  .scriptName("joga")
  .usage("$0 <cmd> [args]")
  .command("build", "Build the current project", async () => {
    await build({
      plugins: [react()],
    });
  })
  .demandCommand()
  .recommendCommands()
  .help()
  .alias("-h", "--help")
  .alias("-v", "--version").argv;
