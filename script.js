// Function to handle message sending
function sendMessage() {
    const inputBox = document.getElementById("userInput");
    const message = inputBox.value.trim();

    if (message) {
        addMessageToChat("user", message);
        inputBox.value = ""; // Clear input

        // Simulate a bot response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessageToChat("bot", botResponse);
        }, 1000);
    }
}

// Function to add message to chat
function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Placeholder bot response function
function getBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes("sad")) {
        return "I'm sorry you're feeling that way. I'm here to listen.";
    } else if (userMessage.toLowerCase().includes("happy")) {
        return "That's great to hear! What made your day special?";
    } else {
        return "I see. Tell me more about that.";
    }
}

// Placeholder for microphone functionality
function startMic() {
    alert("Microphone feature is not implemented yet!");
}

// Placeholder for camera functionality
function startCam() {
    alert("Camera feature is not implemented yet!");
}
