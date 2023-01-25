import { Command } from "commander";

export const getOptionsCommand = () => {
  const program = new Command();

  program
    .name("generate-content")
    .version("0.0.1")
    .description("Generate content using the Cohere API")
    .requiredOption("-p, --prompt <string>", "Prompt for the content")

    .option(
      "-m, --model <string>",
      "Pick the model you want to use for generation. Baseline models are ordered from smaller models to larger ones. Small models are faster, while large models have a better grasp of language and are more able to capture and replicate the patterns in the input prompt. (default: command-xlarge-20221108)"
    )

    .option(
      "-mt, --max_tokens <number>",
      "Determines how much text to generate.Tokens are often parts of words, but can also be an entire word or punctuation. (default: 100)"
    )

    .option(
      "-t, --temperature <number>",
      'Control the randomness aspect of which tokens the model picks for output.  Value of 1 is a good starting point for experimentation. Lower values are used in tasks with a "correct" answer (e.g. question answering or summarization). Higher values enable the model to generate more “creative” outputs. (default: 0.8)'
    )

    .option(
      "-tk, --top-k <number>",
      "When picking output tokens, consider only this number of tokens which have the highest output probability scores.  0 means top-k is not used for picking output tokens. (default: 0)"
    )

    .option(
      "-tp, --top-p <number>",
      "Dynamically select the number of tokens to consider. Those are the tokens whose probabilities add up to the top-p value. If both top-k and top-p are enabled, top-p acts after top-k. (default: 1)"
    )

    .option(
      "-fp, --frequency_penalty <number>",
      "Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. (default: 0)"
    )

    .option(
      "-pp, --presence_penalty <number>",
      "Defaults to 0.0, max value of 1.0. Can be used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. (default: 0)"
    )

    .option(
      "-s, --stop_sequences <string>",
      "A stop sequence will cut off your generation at the end of the sequence. (default: --)"
    )

    .option(
      "-r, --return_likelihoods <string>",
      'Control the randomness aspect of which tokens the model picks for output.  Value of 1 is a good starting point for experimentation. Lower values are used in tasks with a "correct" answer (e.g. question answering or summarization). Higher values enable the model to generate more “creative” outputs. (default: NONE)'
    )

    // .option('-o, --output <file>', 'output file')
    .parse(process.argv);

  return program.opts();
};
