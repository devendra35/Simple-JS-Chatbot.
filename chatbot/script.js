const API_KEY = '' //enter your api key.
async function getGeminiAnswer() {
    const prompt = document.getElementById('user_Prompt').value;
    const responseDiv = document.getElementById('geminiResponse');

    if (!prompt.trim()) {
        responseDiv.innerHTML = 'Please enter a prompt.';
        return;
    }
responseDiv.innerHTML = 'Loading...';

    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + API_KEY;

    const body = JSON.stringify({
        contents: [{
            parts: [{ text: prompt }]
        }]
    });
