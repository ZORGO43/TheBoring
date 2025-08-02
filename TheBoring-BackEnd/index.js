const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());

const OPENAI_API_KEY = 'INPUT YOUR PREMIUM OPEN AI API KEY';

let chatHistories = {};

async function getChatbotResponse(userName, userInput) {
    if (!chatHistories[userName]) {
        chatHistories[userName] = [
            { role: 'system', content: 'You are a friendly Malayalam-English chatbot. Greet the user casually with their name, using informal Malayalam like "Nee sugam annu ennu vicharikkunnu" instead of formal expressions.' }
        ];
    }

    chatHistories[userName].push({ role: 'user', content: `${userName}: ${userInput}` });

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o-mini',
                messages: chatHistories[userName],
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const assistantMessage = response.data.choices[0].message.content.trim();
        chatHistories[userName].push({ role: 'assistant', content: assistantMessage });

        return {
            response: assistantMessage,
            updatedHistory: chatHistories[userName]
        };
    } catch (error) {
        console.error('Error fetching response from OpenAI:', error.response?.data || error.message);
        return { response: "Sorry, I couldn't process that.", updatedHistory: chatHistories[userName] };
    }
}

app.use(cors({
    orgin: 'http://localhost:3000'
}));

app.post('/chat', async (req, res) => {
    const { userName, userInput } = req.body;
    const chatResponse = await getChatbotResponse(userName, userInput);
    res.json(chatResponse);
});

app.listen(4567, () => {
    console.log('Server running on port 4567');
});
