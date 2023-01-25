import cohere from 'cohere-ai';

export const contentCreation = async (params = {}) => {
    cohere.init(process.env.COHERE_API_KEY);

    try {
        const defaultParams = {
            model: 'command-xlarge-20221108',
            prompt:"This is a test?",
            max_tokens: 100,
            temperature: 0.8,
            k: 0,
            p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop_sequences: ["--"],
            return_likelihoods: "NONE"
        }
        
        const parameters = {...defaultParams, ...params};

        const response = await cohere.generate(parameters);

        const { generations } = response.body;
        const { text } = generations[0];
        
        return text;
    } catch (error) {
        throw new Error(error);
    }    
}

