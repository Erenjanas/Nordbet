// ===== LOGIN SYSTEM =====
let currentUser = null;
let dailyBonusClaimed = false;
let lastBonusDate = localStorage.getItem('nordbet_bonus_date');
let today = new Date().toDateString();
if (lastBonusDate === today) dailyBonusClaimed = true;

function performLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if (!username || !password) {
        document.getElementById('login-error').classList.remove('hidden');
        return;
    }
    document.getElementById('login-error').classList.add('hidden');
    currentUser = username;
    localStorage.setItem('nordbet_user', username);
    localStorage.setItem('nordbet_pass', password);
    document.getElementById('login-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('vip-welcome-overlay').style.display = 'flex';
        document.getElementById('welcome-username').textContent = 'Hosgeldin, ' + username + '!';
    }, 600);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedUser = localStorage.getItem('nordbet_user');
    const savedPass = localStorage.getItem('nordbet_pass');
    if (savedUser && savedPass) {
        currentUser = savedUser;
        const loginOverlay = document.getElementById('login-overlay');
        const vipOverlay = document.getElementById('vip-welcome-overlay');
        const welcomeUsername = document.getElementById('welcome-username');
        if (loginOverlay) loginOverlay.style.display = 'none';
        if (vipOverlay && welcomeUsername) {
            vipOverlay.style.display = 'flex';
            welcomeUsername.textContent = 'Tekrar Hosgeldin, ' + savedUser + '!';
        }
    }
});
