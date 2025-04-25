const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = chatInput.value;
    if (!message) return;

    appendMessage('user', message);
    chatInput.value = '';

    try {
        const response = await fetch('YOUR_API_ENDPOINT', { // Замініть на кінцеву точку вашого API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Замініть на ваш ключ API
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        appendMessage('bot', data.response); // Замініть data.response на поле з відповіддю API
    } catch (error) {
        console.error('Помилка:', error);
        appendMessage('bot', 'Виникла помилка. Спробуйте пізніше.');
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
