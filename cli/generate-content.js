import ora from "ora";
import { contentCreation } from "../ai/cohere/contentCreation.js";
import { getOptionsCommand } from "./program.js";
import * as dotenv from "dotenv";

dotenv.config();

export const generateContent = (options) => {
  if (options.topK) {
    options.k = options.topK;
    delete options.topK;
  }

  if (options.topP) {
    options.p = options.topP;
    delete options.topP;
  }

  if (options.temperature) {
    options.temperature = Number(options.temperature);
  }

  if (options.max_tokens) {
    options.max_tokens = Number(options.maxTokens);
  }
  
  const spinner = ora("Generating...").start();

  const start = performance.now();
  let time = 0;

  const intervalTime = setInterval(() => {
    time = Math.floor((performance.now() - start) / 1000);
    spinner.text = `Generating... (${time}s)`;
  });

  contentCreation(options)
    .then((res) => {
      spinner.succeed(`Done! (${time}s)`);
      console.log(`Response: ${res}`);
    })
    .catch((err) => {
      spinner.fail(`Error! (${time}s)`);
      console.log(err);
    })
    .finally(() => {
      clearInterval(intervalTime);
    });
};

const options = getOptionsCommand();
generateContent(options);
