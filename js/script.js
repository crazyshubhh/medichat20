const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const chatOutput = document.getElementById("chat-output");

// Function to add messages to the chat
function addMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender); // 'user' or 'bot'
    messageDiv.textContent = message;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to latest message
}

// Send user input to the bot
sendButton.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage("user", message); // Display user's message
        userInput.value = ""; // Clear input field
        getBotResponse(message); // Process and display bot response
    }
});

// Example bot logic
function getBotResponse(userMessage) {
    fetch("/process-message", { // Send the message to the backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        addMessage("bot", data.response); // Display the bot's response
    })
    .catch(error => {
        console.error("Error:", error);
        addMessage("bot", "Sorry, I couldn't understand that. Please try again.");
    });
}
