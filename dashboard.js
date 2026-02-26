// dashboard.js

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage('user', msg);
    input.value = '';

    // Logic for response
    setTimeout(() => {
        const response = getBotResponse(msg);
        appendMessage('bot', response);
    }, 600);
}

function appendMessage(sender, text) {
    const chat = document.getElementById('chatMessages');
    const wrapper = document.createElement('div');
    wrapper.className = `flex gap-4 max-w-[90%] sm:max-w-[75%] ${sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`;

    const avatar = document.createElement('div');
    avatar.className = `w-[40px] h-[40px] flex items-center justify-center text-xl flex-shrink-0 ${sender === 'user' ? 'bg-white/5 border border-white/10' : 'bg-primary/10 border border-primary/20'}`;
    avatar.innerText = sender === 'user' ? '👤' : '🤖';
    wrapper.appendChild(avatar);

    const div = document.createElement('div');
    div.className = sender === 'user'
        ? 'bg-primary/10 p-5 text-sm sm:text-base border border-primary/20 shadow-inner backdrop-blur-md text-white/90 leading-relaxed rounded-md'
        : 'bg-white/5 p-5 text-sm sm:text-base border border-white/5 shadow-inner backdrop-blur-md text-white/90 leading-relaxed rounded-md';

    div.innerHTML = text;
    wrapper.appendChild(div);
    chat.appendChild(wrapper);
    chat.scrollTop = chat.scrollHeight;
}

function getBotResponse(msg) {
    msg = msg.toLowerCase().trim();

    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
        return "Hey there! 👋 I'm X-Bot, your friendly AI mentor. How can I help you level up your skills today? 😊";
    }

    if (msg.includes('thank') || msg.includes('thanks')) {
        return "You're very welcome! ✨ Helping you succeed is what I'm here for. Anything else on your mind? 🚀";
    }

    if (msg.includes('study') || msg.includes('learn') || msg.includes('education')) {
        return "I'd love to help you master that! 📚 Here are my top recommendations for study and mastery:<br/><br/>" +
            "1. <b>Khan Academy AI</b> - Like having a personal tutor in your pocket. ✨<br/>" +
            "2. <b>W3Schools</b> - The ultimate classic for web dev basics. ⚓<br/>" +
            "3. <b>Anki</b> - Use spaced repetition to never forget what you've learned. 🧠<br/>" +
            "4. <b>Quizlet AI</b> - Modern study sets for quick learning. 🔥";
    }

    if (msg.includes('execute') || msg.includes('sandbox') || msg.includes('run') || msg.includes('code')) {
        return "Coding is my specialty! 💻 You can use our <b>X-CODE Sandbox</b> to execute HTML & CSS directly! Just click 'X-CODE' in the navbar to start your next masterpiece. 🎨";
    }

    if (msg.includes('who are you') || msg.includes('your name')) {
        return "I'm <b>X-Bot</b>! 🤖 Your AI-powered companion on the X-Mentor platform. I'm here to guide you through the best tools and resources for your journey! 🌟";
    }

    return "That's an interesting question! 🤔 For general research, I highly recommend <b>Perplexity AI</b>, and for complex logic, <b>Claude 3.5 Sonnet</b> is amazing. <br/><br/>Are you focusing on <i>Coding, Study, or Design</i> right now? I'd love to help you find the perfect tool! ✨";
}

function clearChat() {
    const chat = document.getElementById('chatMessages');
    chat.innerHTML = `
        <div class="flex gap-4 max-w-[90%] sm:max-w-[75%]">
            <div class="w-[40px] h-[40px] bg-primary/10 border border-primary/20 flex items-center justify-center text-xl flex-shrink-0">🤖</div>
            <div class="bg-white/5 p-5 text-sm sm:text-base border border-white/5 shadow-inner backdrop-blur-md text-white/90 leading-relaxed rounded-md">
                <span class="text-primary font-black uppercase tracking-widest text-[10px] mb-2 block">Memory Wiped</span>
                Chat session cleared. How can I assist you now?
            </div>
        </div>
    `;
}
