document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const leftMenu = document.querySelector('.left-menu');
  const content = document.querySelector('.content');

  hamburgerMenu.addEventListener('click', () => {
    leftMenu.classList.toggle('slide');
    content.classList.toggle('slide');
  });

  const chatMessages = document.querySelector('.chat-messages');
  const chatInput = document.querySelector('.chat-input textarea');
  const chatButton = document.querySelector('.chat-input button');

  function createMessageElement(username, message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';

    const imageElement = document.createElement('img');
    imageElement.src = 'user_profile.jpg';
    imageElement.alt = 'User profile image';

    const messageContentElement = document.createElement('div');
    messageContentElement.className = 'message-content';

    const usernameElement = document.createElement('span');
    usernameElement.className = 'username';
    usernameElement.textContent = username;

    const messageTextElement = document.createElement('p');
    messageTextElement.textContent = message;

    messageContentElement.appendChild(usernameElement);
    messageContentElement.appendChild(messageTextElement);
    messageElement.appendChild(imageElement);
    messageElement.appendChild(messageContentElement);

    return messageElement;
  }

  function addMessage(username, message) {
    const messageElement = createMessageElement(username, message);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      addMessage('사용자 이름', message);
      chatInput.value = '';
      // 서버에 메시지를 전송하는 코드를 여기에 추가해야 합니다.
    }
  });

  chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      chatButton.click();
    }
  });
});