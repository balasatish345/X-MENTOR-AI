/* auth.js */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration (Loaded from main app context)
const firebaseConfig = {
    apiKey: "AIzaSyBJhTF79i_IgSiMwdBga2dg6XNUjcYbAJI",
    authDomain: "cctt-54ea8.firebaseapp.com",
    projectId: "cctt-54ea8",
    storageBucket: "cctt-54ea8.firebasestorage.app",
    messagingSenderId: "1004085985187",
    appId: "1:1004085985187:web:0ef7a7379cce8f09d16416",
    measurementId: "G-8PMT9KEM3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// UI Elements
const googleBtn = document.getElementById('googleBtn');
const errorToast = document.getElementById('errorToast');
const errorMsg = document.getElementById('errorMsg');

if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
        try {
            console.log("🌐 Initiating Google Auth Flow...");

            // UI Loading State
            googleBtn.disabled = true;
            googleBtn.style.opacity = '0.7';
            googleBtn.innerHTML = `
                <span class="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
                <span class="tracking-widest uppercase text-xs">Authenticating Vault...</span>
            `;

            // Sign In
            const result = await signInWithPopup(auth, provider);

            // Success
            const user = result.user;
            console.log("✅ Identity Verified:", user.displayName);

            // Give a moment for the user to see success state
            googleBtn.innerHTML = `
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
                <span class="tracking-widest uppercase text-xs">Vault Opened</span>
            `;
            googleBtn.style.backgroundColor = '#00C853';

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);

        } catch (error) {
            console.error("❌ Auth Error Sequence:", error.code, error.message);

            let userFriendlyMsg = "Authentication Failed. Please try again.";

            // Check for specific common failure reasons
            if (error.code === 'auth/popup-blocked') {
                userFriendlyMsg = "Popup Blocked! Please allow popups for this site.";
            } else if (error.code === 'auth/popup-closed-by-user') {
                userFriendlyMsg = "Authorization cancelled by user.";
            } else if (error.code === 'auth/unauthorized-domain') {
                userFriendlyMsg = "This domain is not authorized. Check Firebase settings.";
            } else if (window.location.protocol === 'file:') {
                userFriendlyMsg = "Login not supported on local 'file://' protocol. Use a local server!";
            }

            showError(userFriendlyMsg);

            // Reset Button
            googleBtn.disabled = false;
            googleBtn.style.opacity = '1';
            googleBtn.style.backgroundColor = 'white';
            googleBtn.innerHTML = `
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.63l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span class="tracking-widest uppercase text-xs">Authorize with Google</span>
            `;
        }
    });
}

function showError(msg) {
    if (errorToast && errorMsg) {
        errorMsg.innerText = msg;
        errorToast.classList.remove('hidden');
        errorToast.classList.add('flex');

        // Auto-hide after 6s
        setTimeout(() => {
            errorToast.classList.add('hidden');
            errorToast.classList.remove('flex');
        }, 6000);
    }
}

// Global Auth Check
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("🔮 Active Session Detected. Transitioning...");
        window.location.href = 'index.html';
    }
});
