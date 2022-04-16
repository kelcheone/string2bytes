#!/usr/bin/env node
import ethers from "ethers";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));

async function createBytes(args) {
  const name = args[0];
  const bytes = ethers.utils.formatBytes32String(name);
  const rainbowTile = chalkAnimation.rainbow("Hola wana do some changes");

  await sleep();
  rainbowTile.stop();

  console.log(chalk.bgMagenta("Bytes ", bytes));
}

// createBytes(process.argv.splice(2));

let inString;

async function askString() {
  const answers = await inquirer.prompt({
    name: "stringIn",
    type: "input",
    message: "what string would you like to transfrom?",
    default() {
      return "Kelche";
    },
  });

  inString = answers.stringIn;
  createBytes(inString);
}
await askString();