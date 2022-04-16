#!/usr/bin/env node
import ethers from "ethers";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));

async function parseBytes(args) {
  const bytes = args[0];
  const name = ethers.utils.parseBytes32String(bytes);
  const rainbowTile = chalkAnimation.rainbow("All in bytes");

  await sleep();
  rainbowTile.stop();

  console.log(chalk.bgGray("name: ", name));
}

let inBytes;

async function askBytes() {
  const answers = await inquirer.prompt({
    name: "stringIn",
    type: "input",
    message: "what bytes would you like to transfrom?",
    default() {
      return "0x4b00000000000000000000000000000000000000000000000000000000000000";
    },
  });

  inBytes = answers.stringIn;
  parseBytes(inBytes);
}
// await askBytes();

parseBytes(process.argv.slice(2));
