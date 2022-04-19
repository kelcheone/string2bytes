#!/usr/bin/env node
import ethers from "ethers";
import chalk from "chalk";
import inquirer from "inquirer";

async function parseBytes(bytes) {
  const parsed = ethers.utils.parseBytes32String(bytes);
  console.log(chalk.green(parsed));
}

async function askBytes() {
  const { bytes } = await inquirer.prompt([
    {
      type: "input",
      name: "bytes",
      message: "Enter bytes to parse",
      validate: (bytes) => {
        if (bytes.length !== 66) {
          return "Please enter a valid bytes";
        }
        return true;
      },
    },
  ]);
  await parseBytes(bytes);
}

await askBytes();

