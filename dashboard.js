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

// GNews API Integration
const NEWS_API_KEY = '487fcbacc7c0414ab0c26784dd632ac4';

async function fetchNews() {
    const newsFeed = document.getElementById('newsFeed');
    if (!newsFeed) return;

    // Show loading state
    newsFeed.innerHTML = `
        <div class="animate-pulse space-y-4">
            <div class="h-32 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center">
                <span class="text-primary animate-spin mb-2">⚙️</span>
                <span class="text-[8px] uppercase tracking-widest opacity-40">Syncing...</span>
            </div>
        </div>
    `;

    const url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMsg = await response.text();
            throw new Error(`Status ${response.status}: ${errorMsg}`);
        }

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            renderNews(data.articles);
        } else {
            newsFeed.innerHTML = `<p class="text-[10px] text-white/20 text-center p-8 uppercase tracking-widest">No matching results.</p>`;
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsFeed.innerHTML = `
            <div class="text-center p-8 bg-red-500/5 border border-red-500/20 rounded-xl">
                <p class="text-[10px] text-red-500 uppercase font-black tracking-widest">Sync Error</p>
                <p class="text-[8px] text-white/30 mt-2">${error.message.includes('fetch') ? 'Blocked by Browser (Use Live Server)' : error.message}</p>
            </div>
        `;
    }
}

function renderNews(articles) {
    const newsFeed = document.getElementById('newsFeed');
    newsFeed.innerHTML = '';

    articles.forEach(article => {
        const item = document.createElement('div');
        item.className = 'group cursor-pointer bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all';
        item.onclick = () => window.open(article.url, '_blank');

        const displayImg = article.urlToImage || article.image;

        item.innerHTML = `
            ${displayImg ? `<img src="${displayImg}" class="w-full h-24 object-cover rounded-lg mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5" />` : ''}
            <h4 class="text-xs font-bold text-white/90 group-hover:text-primary transition-colors line-clamp-2 mb-1">${article.title}</h4>
            <div class="flex items-center justify-between mt-2">
                <span class="text-[8px] text-white/30 uppercase font-bold tracking-widest">${article.source.name}</span>
                <span class="text-[8px] text-primary/50 font-mono italic">${new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
        `;
        newsFeed.appendChild(item);
    });
}

// Initialize news fetch on load
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
});
