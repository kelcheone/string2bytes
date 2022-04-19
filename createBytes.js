#!/usr/bin/env node
import ethers from "ethers";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const sleep = (ms = 200) => new Promise((r) => setTimeout(r, ms));

async function createBytes(string){
  const bytes = ethers.utils.formatBytes32String(string);
  const rainbowTile = chalkAnimation.rainbow("All in Bytes!");
  
  await sleep();
  rainbowTile.stop();

  console.log(chalk.magenta(bytes));
}

async function askString(){
  const {string } = await inquirer.prompt([
    {
      type: "input",
      name: "string",
      message: "Enter string to parse",
      validate: (string) => {
        if (string.length > 66) {
          return "Please enter a valid string";
        }
        return true;
      }
    }
  ]);
  await createBytes(string);
  }
await askString();
