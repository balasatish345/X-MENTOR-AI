/* script.js */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJhTF79i_IgSiMwdBga2dg6XNUjcYbAJI",
    authDomain: "cctt-54ea8.firebaseapp.com",
    projectId: "cctt-54ea8",
    storageBucket: "cctt-54ea8.firebasestorage.app",
    messagingSenderId: "1004085985187",
    appId: "1:1004085985187:web:0ef7a7379cce8f09d16416",
    measurementId: "G-8PMT9KEM3F"
};

import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    const signInBtns = document.querySelectorAll('[onclick="window.location.href=\'auth.html\'"]');
    if (user) {
        console.log("👤 User Logged In:", user.displayName);
        signInBtns.forEach(btn => {
            btn.innerHTML = `PROFILE: ${user.displayName.split(' ')[0].toUpperCase()}`;
            btn.onclick = () => {
                if (confirm("Do you want to sign out?")) {
                    signOut(auth).then(() => window.location.reload());
                }
            };
        });
    } else {
        console.log("👤 No User Session");
    }
});

console.log("🔥 Firebase Initialized");

const tasksData = [
    { id: 1, text: "Explore AI Tools for UI Design", completed: false, category: "design" },
    { id: 2, text: "Complete Python Data Science Module", completed: false, category: "study" },
    { id: 3, text: "Solve 2 LeetCode Hard Problems", completed: true, category: "coding" },
    { id: 4, text: "Read latest Research Papers on LLMs", completed: false, category: "research" },
    { id: 5, text: "Build a mini project in X-CODE", completed: false, category: "coding" }
];

const toolsData = [
    {
        name: "ChatGPT",
        category: "aitools",
        type: "Free Tier",
        description: "The world's most popular AI assistant for writing, coding, and brainstorming.",
        url: "https://chat.openai.com",
        icon: "https://openai.com/favicon.ico"
    },
    {
        name: "Claude 3.5 Sonnet",
        category: "aitools",
        type: "Free Tier",
        description: "Anthropic's most intelligent model, great for coding and complex logic.",
        url: "https://claude.ai",
        icon: "https://claude.ai/favicon.ico"
    },
    {
        name: "Perplexity AI",
        category: "aitools",
        type: "Free",
        description: "AI-powered search engine that provides cited answers to complex questions.",
        url: "https://www.perplexity.ai",
        icon: "https://www.perplexity.ai/favicon.ico"
    },
    {
        name: "Midjourney",
        category: "aitools",
        type: "Paid",
        description: "Advanced AI image generation known for photorealistic art and design.",
        url: "https://www.midjourney.com",
        icon: "https://www.midjourney.com/favicon.ico"
    },
    {
        name: "v0.dev",
        category: "aitools",
        type: "Free Tier",
        description: "Generate UI components with simple text prompts. Powered by Vercel.",
        url: "https://v0.dev",
        icon: "https://v0.dev/favicon.ico"
    },
    {
        name: "Antigravity AI",
        category: "research",
        type: "Pro AI",
        description: "Advanced agentic coding assistant for rapid development and project architecture.",
        url: "https://antigravity.ai",
        icon: "https://v0.dev/favicon.ico"
    },
    {
        name: "W3Schools",
        category: "study",
        type: "Free",
        description: "The world's largest web developer site. Tutorials and references for all languages.",
        url: "https://www.w3schools.com",
        icon: "https://www.w3schools.com/favicon.ico"
    },
    {
        name: "FreeCodeCamp",
        category: "study",
        type: "Free",
        description: "Learn to code for free. Thousands of videos, articles, and interactive coding lessons.",
        url: "https://www.freecodecamp.org",
        icon: "https://www.freecodecamp.org/favicon.ico"
    },
    {
        name: "LeetCode",
        category: "coding",
        type: "Free Tier",
        description: "The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
        url: "https://leetcode.com",
        icon: "https://leetcode.com/favicon.ico"
    },
    {
        name: "Codecademy",
        category: "study",
        type: "Free Tier",
        description: "Interactive coding lessons in a variety of programming languages. Hands-on learning.",
        url: "https://www.codecademy.com",
        icon: "https://www.codecademy.com/favicon.ico"
    },
    {
        name: "Visual Studio Code",
        category: "coding",
        type: "Free",
        description: "The most popular code editor for students and professionals. AI-ready.",
        url: "https://code.visualstudio.com",
        icon: "https://code.visualstudio.com/favicon.ico"
    },
    {
        name: "Cursor AI",
        category: "coding",
        type: "Free Tier",
        description: "The AI-first code editor. Built on VS Code, optimized for pair programming.",
        url: "https://www.cursor.com",
        icon: "https://www.cursor.com/assets/images/logo.svg"
    },
    {
        name: "WolframAlpha",
        category: "research",
        type: "Free Tier",
        description: "Expert-level answers using AI and a massive knowledge base of algorithms.",
        url: "https://www.wolframalpha.com",
        icon: "https://www.wolframalpha.com/favicon.ico"
    },
    {
        name: "Khan Academy AI",
        category: "study",
        type: "Free",
        description: "Personalized AI tutor (Khanmigo) that helps students master any subject.",
        url: "https://www.khanacademy.org",
        icon: "https://www.khanacademy.org/favicon.ico"
    },
    {
        name: "Phind",
        category: "coding",
        type: "Free",
        description: "The AI search engine for developers. Better than Stack Overflow.",
        url: "https://www.phind.com",
        icon: "https://www.phind.com/favicon.ico"
    },
    {
        name: "Quizlet AI",
        category: "study",
        type: "Free Tier",
        description: "AI-powered flashcards and study sets to help you ace your exams.",
        url: "https://quizlet.com",
        icon: "https://quizlet.com/favicon.ico"
    },
    {
        name: "GitHub Copilot",
        category: "coding",
        type: "Paid",
        description: "Your AI pair programmer. Tools for testing, refactoring and more.",
        url: "https://github.com/features/copilot",
        icon: "https://github.githubassets.com/favicons/favicon.svg"
    },
    {
        name: "Notion AI",
        category: "productivity",
        type: "Paid",
        description: "Add the power of AI to your workspace. Summarize, edit, and plan.",
        url: "https://www.notion.so/product/ai",
        icon: "https://www.notion.so/images/favicon.ico"
    },
    {
        name: "Anki",
        category: "study",
        type: "Free",
        description: "Powerful, intelligent flashcards for long-term memory. Study smarter.",
        url: "https://apps.ankiweb.net/",
        icon: "https://apps.ankiweb.net/favicon.ico"
    },
    {
        name: "Grammarly AI",
        category: "writing",
        type: "Free Tier",
        description: "AI writing partner that helps with clarity, tone, and correctness.",
        url: "https://www.grammarly.com",
        icon: "https://www.grammarly.com/favicon.ico"
    },
    {
        name: "Sunsama",
        category: "productivity",
        type: "Paid",
        description: "Stay focused and organized with a daily planner that aggregates all your work.",
        url: "https://www.sunsama.com",
        icon: "https://www.sunsama.com/favicon.ico"
    },
    {
        name: "Jasper AI",
        category: "writing",
        type: "Paid",
        description: "Enterprise-grade AI content platform for blogs, ads, and marketing copy.",
        url: "https://www.jasper.ai",
        icon: "https://www.jasper.ai/favicon.ico"
    },
    {
        name: "Poe by Quora",
        category: "aitools",
        type: "Free Tier",
        description: "Aggregator of many AI models like GPT-4, Claude, and Llama in one place.",
        url: "https://poe.com",
        icon: "https://poe.com/favicon.ico"
    }
];

const newsData = [
    {
        title: "Apple Announces New AI Chips for Mac",
        source: "TechCrunch",
        date: "2 hours ago",
        summary: "The latest M4 Max chips feature dedicated neural engines for on-device generative AI tasks."
    },
    {
        title: "OpenAI's SearchGPT Enters Beta Phase",
        source: "The Verge",
        date: "5 hours ago",
        summary: "The search engine features real-time web access and conversational results."
    },
    {
        title: "NVIDIA Hits Record High on AI Demand",
        source: "Reuters",
        date: "1 day ago",
        summary: "Global demand for Blackwell GPUs continues to drive unprecedented market growth."
    }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Transition
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('fade-out');
            document.body.classList.add('app-ready'); // Reveal Main UI

            // Render content ONLY after splash starts to fade so animations are visible
            renderTools(toolsData);
            fetchRealNews();
            runCode();

            setTimeout(() => {
                splash.style.display = 'none';
            }, 1000);
        }
    }, 3500); // 3.5 seconds for a punchy intro

    // Filters (Still need to be attached)
    const toolSearch = document.getElementById('toolSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    if (toolSearch) toolSearch.addEventListener('input', filterTools);
    if (categoryFilter) categoryFilter.addEventListener('change', filterTools);
});

function renderTools(tools) {
    const grid = document.getElementById('toolsGrid');
    if (!grid) {
        console.warn("⚠️ Tools grid container not found!");
        return;
    }
    grid.innerHTML = tools.map((tool, index) => `
        <div class="tool-card bg-surface border border-white/5 p-6 rounded-3xl hover:border-primary/50 hover-glow group animate-fade-in" style="animation-delay: ${index * 0.05}s">
            <div class="flex justify-between items-start">
                <div class="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-2.5 group-hover:border-primary/30 transition-all duration-500">
                    <img src="${tool.icon}" alt="${tool.name}" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2103/2103633.png'">
                </div>
                <span class="text-[10px] px-2 py-1 bg-white/5 rounded-lg border border-white/10 text-white/40 group-hover:text-primary/60 transition-colors">${tool.type}</span>
            </div>
            
            <div class="mt-6">
                <span class="text-[10px] font-black text-primary tracking-[0.2em] uppercase block mb-1 opacity-60 group-hover:opacity-100 transition-opacity">${tool.category}</span>
                <h3 class="text-2xl font-bold group-hover:text-primary transition-colors tracking-tight">${tool.name}</h3>
            </div>

            <div class="hover-reveal">
                <p class="text-white/40 text-sm leading-relaxed mb-6">${tool.description}</p>
                <a href="${tool.url}" target="_blank" class="inline-flex items-center text-xs font-black tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary pb-1 transition-all">
                    VISIT WEBSITE
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
}

const NEWS_API_KEY = "487fcbacc7c0414ab0c26784dd632ac4"; // Replace with your real key

async function fetchRealNews() {
    try {
        const url = `https://newsapi.org/v2/everything?q=apple&from=2026-02-24&to=2026-02-24&sortBy=popularity&apiKey=${NEWS_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            console.error("NewsAPI Error Details:", errorData);
            throw new Error(`API failed: ${errorData.message || response.statusText}`);
        }

        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
            renderNews(data.articles, 'newsGrid');       // Home Section
            renderNews(data.articles, 'newsGridFull');   // Full View
            renderNews(data.articles, 'newsGridDrawer'); // Drawer
        } else {
            renderNews(newsData, 'newsGrid');
            renderNews(newsData, 'newsGridFull');
            renderNews(newsData, 'newsGridDrawer');
        }
    } catch (error) {
        console.error("❌ X-LAUNCH Error:", error.message);
        renderNews(newsData, 'newsGrid');
        renderNews(newsData, 'newsGridFull');
        renderNews(newsData, 'newsGridDrawer');
    }
}

function renderNews(news, targetId = 'newsGrid') {
    const grid = document.getElementById(targetId);
    if (!grid) return;

    grid.innerHTML = news.map(item => `
        <div class="flex flex-col group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-all border border-transparent hover:border-white/10" onclick="window.open('${item.url || '#'}', '_blank')">
            <div class="h-48 rounded-xl mb-6 border border-white/5 overflow-hidden">
                <img src="${item.urlToImage || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400'}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     onerror="this.src='https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="flex items-center space-x-3 mb-2 text-[10px] font-black text-primary/60 uppercase tracking-widest">
                <span>${item.source.name || item.source}</span>
                <span class="w-1 h-1 rounded-full bg-white/20"></span>
                <span>${new Date(item.publishedAt || Date.now()).toLocaleDateString()}</span>
            </div>
            <h3 class="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">${item.title}</h3>
            <p class="text-white/40 text-xs leading-relaxed line-clamp-3">${item.description || item.summary || ''}</p>
        </div>
    `).join('');
}

function filterTools() {
    const searchTerm = document.getElementById('toolSearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = toolsData.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || tool.category === category;
        return matchesSearch && matchesCategory;
    });

    renderTools(filtered);
}

// View Logic
function showView(viewId, category = 'all') {
    // Hide all views
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.view').forEach(el => el.classList.remove('block'));

    // Show target view
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('block');
    }

    // Update Navbar active state
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active', 'text-primary'));
    const activeNavBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => btn.getAttribute('onclick')?.includes(`'${viewId}'`));
    if (activeNavBtn) activeNavBtn.classList.add('active', 'text-primary');

    // Update Bottom Taskbar active state
    document.querySelectorAll('.task-bar-item').forEach(el => el.classList.remove('active'));
    const activeTaskBtn = document.getElementById(`btn-${viewId}`);
    if (activeTaskBtn) activeTaskBtn.classList.add('active');

    // Handle Category Filtering (if on home view)
    if (viewId === 'home' && category !== 'all') {
        const categorySelect = document.getElementById('categoryFilter');
        if (categorySelect) {
            categorySelect.value = category;
            filterTools();
            // Scroll to tools section
            document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Special triggers
    if (viewId === 'news') fetchRealNews();
    if (viewId === 'code') runCode();
    if (viewId === 'tasks') renderTasks();

    // Reset Scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTasks() {
    const list = document.getElementById('tasksList');
    if (!list) return;

    list.innerHTML = tasksData.map(task => `
        <div class="task-card flex items-center justify-between group">
            <div class="flex items-center gap-4">
                <div onclick="toggleTask(${task.id})" class="task-checkbox ${task.completed ? 'checked' : ''}"></div>
                <span class="text-sm font-medium ${task.completed ? 'text-white/20 line-through' : 'text-white'} transition-all">${task.text}</span>
            </div>
            <div class="px-3 py-1 rounded-full bg-white/5 text-[9px] font-black uppercase tracking-widest text-white/30 group-hover:text-primary/60 transition-colors">
                ${task.category}
            </div>
        </div>
    `).join('');

    updateProgress();
}

function toggleTask(id) {
    const task = tasksData.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function updateProgress() {
    const total = tasksData.length;
    const completed = tasksData.filter(t => t.completed).length;
    const percentage = Math.round((completed / total) * 100);

    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');

    if (fill) fill.style.width = `${percentage}%`;
    if (text) text.innerText = `${percentage}%`;
}

// Expose to window
window.toggleTask = toggleTask;

// News Drawer Logic
function toggleNews() {
    const drawer = document.getElementById('newsDrawer');
    const overlay = document.getElementById('newsOverlay');

    drawer.classList.toggle('-translate-x-full');

    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10);
    } else {
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// Chatbot Logic
function toggleChat() {
    const chatWin = document.getElementById('chatWindow');
    if (!chatWin) return;
    chatWin.classList.toggle('hidden');
    chatWin.classList.toggle('flex');
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
    wrapper.className = `flex gap-3 ${sender === 'user' ? 'flex-row-reverse' : ''}`;

    if (sender === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'bot-avatar';
        avatar.innerText = '🤖';
        wrapper.appendChild(avatar);
    }

    const div = document.createElement('div');
    div.className = sender === 'user'
        ? 'bg-primary/20 text-white self-end ml-auto rounded-2xl p-4 max-w-[85%] text-sm rounded-tr-none border border-primary/30 shadow-[0_4px_15px_rgba(0,200,83,0.1)]'
        : 'bg-white/5 text-white rounded-2xl p-4 max-w-[85%] text-sm rounded-tl-none border border-white/10';

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


// X-CODE Logic
function runCode() {
    const input = document.getElementById('codeInput').value;
    const outputFrame = document.getElementById('codeOutput');
    if (!outputFrame) return;

    const output = outputFrame.contentWindow.document;
    output.open();
    output.write(input);
    output.close();
}

async function deployCode() {
    const status = document.getElementById('compilerStatus');
    const btn = document.querySelector('[onclick="deployCode()"]');

    if (status) {
        status.classList.remove('hidden');
        status.classList.add('flex');
    }

    if (btn) {
        btn.disabled = true;
        btn.innerText = "DEPLOYING...";
        btn.classList.add('opacity-50', 'pointer-events-none');
    }

    // Simulate "Compilation" steps
    console.log("🛠️ Starting Build Sequence...");

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        runCode();
        console.log("✅ Code Deployed Successfully!");
    } catch (err) {
        console.error("❌ Deployment Failed:", err);
    } finally {
        setTimeout(() => {
            if (status) {
                status.classList.add('hidden');
                status.classList.remove('flex');
            }
            if (btn) {
                btn.disabled = false;
                btn.innerText = "DEPLOY CODE";
                btn.classList.remove('opacity-50', 'pointer-events-none');
            }
        }, 500);
    }
}

// X-PLAY Snake Logic
let snake, food, direction, score, gameInterval;
const canvas = document.getElementById('snakeGame');
const ctx = canvas.getContext('2d');
const box = 15;

function startSnake() {
    document.getElementById('gameOverlay').classList.add('hidden');
    snake = [{ x: 10 * box, y: 10 * box }];
    direction = "RIGHT";
    score = 0;
    updateScore();
    spawnFood();
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(drawSnake, 100);
}

document.addEventListener("keydown", (e) => {
    if ((e.key === "ArrowLeft" || e.key === "a") && direction !== "RIGHT") direction = "LEFT";
    else if ((e.key === "ArrowUp" || e.key === "w") && direction !== "DOWN") direction = "UP";
    else if ((e.key === "ArrowRight" || e.key === "d") && direction !== "LEFT") direction = "RIGHT";
    else if ((e.key === "ArrowDown" || e.key === "s") && direction !== "UP") direction = "DOWN";
});

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * 19 + 1) * box,
        y: Math.floor(Math.random() * 19 + 1) * box
    };
}

function updateScore() {
    document.getElementById('currentScore').innerText = score.toString().padStart(3, '0');
    const high = localStorage.getItem('xSnakeHigh') || 0;
    if (score > high) localStorage.setItem('xSnakeHigh', score);
    document.getElementById('highScore').innerText = Math.max(score, high).toString().padStart(3, '0');
}

function drawSnake() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "#00C853" : "#00C85388";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "white";
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        updateScore();
        spawnFood();
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(gameInterval);
        document.getElementById('gameOverlay').classList.remove('hidden');
        return;
    }

    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}

// Combined Load Removed - consolidated into main DOMContentLoaded

// X-TRANSFORMER Logic
function changeLanguage(langCode) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));

        // Update UI Label
        const langBtn = document.querySelector('#lang-selector button');
        const langMap = {
            'en': 'English',
            'te': 'Telugu',
            'hi': 'Hindi'
        };
        if (langBtn) {
            langBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                ${langMap[langCode] || 'Language'}
            `;
        }

        console.log(`🌐 Language switched to: ${langCode}`);
    } else {
        console.warn("Google Translate components not found in DOM yet. Retrying...");
        setTimeout(() => changeLanguage(langCode), 500);
    }
}

// Expose functions to window (Required for module-based script navigation)
window.showView = showView;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
window.startSnake = startSnake;
window.runCode = runCode;
window.deployCode = deployCode;
window.filterTools = filterTools;
window.renderTools = renderTools;
window.fetchRealNews = fetchRealNews;
window.renderNews = renderNews;
window.toggleNews = toggleNews;
window.changeLanguage = changeLanguage;
