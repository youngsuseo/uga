document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", sendMessage);

    messageInput.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText.length > 0) {
            const messageElement = document.createElement("div");
            const timestamp = new Date();
            const formattedTime = timestamp.toLocaleTimeString();

            messageElement.innerHTML = `<span class="message-time">${formattedTime}</span> ${convertEmoticons(messageText)}`;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    function convertEmoticons(text) {
        const emoticons = {
            ":)": "😊",
            ":(": "☹️",
            ";)": "😉",
            ":D": "😃",
            ":P": "😛",
        };

        return text.replace(/:\)|:\(|;\)|:D|:P/g, function (match) {
            return emoticons[match] || match;
        });
    }
});
