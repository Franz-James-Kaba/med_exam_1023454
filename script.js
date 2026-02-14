// Welcome screen transition function
function startExperience() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');

    // Fade out welcome screen
    welcomeScreen.classList.add('fade-out');

    // Start music if configured
    if (config.music.enabled && config.music.autoplay) {
        bgMusic.play().catch(error => {
            console.log("Music playback prevented");
        });
    }

    // Show main content after fade out
    setTimeout(() => {
        mainContent.classList.add('show');
    }, 1000);
}

// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;

    // Set first question texts
    document.getElementById('question1Text').innerHTML = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;

    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;

    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
});

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');

    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));

    // Special handling for love display screen
    if (questionNumber === 'loveDisplay') {
        document.getElementById('loveDisplayScreen').classList.remove('hidden');
        startLoveDisplay();
    } else {
        document.getElementById(`question${questionNumber}`).classList.remove('hidden');
    }
}

// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

// Auto-scroll slider into view on mobile when interacting
loveMeter.addEventListener('touchstart', () => {
    setTimeout(() => {
        loveMeter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
});

loveMeter.addEventListener('mousedown', () => {
    setTimeout(() => {
        loveMeter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
});

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;

    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';

        // Show different messages based on the value
        if (value >= 5000) {
            extraLove.classList.add('super-love');
            extraLove.textContent = config.loveMessages.extreme;
        } else if (value > 1000) {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.high;
        } else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    // Set celebration messages
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;

    // Create heart explosion effect
    createHeartExplosion();
}

// Create heart explosion animation
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}

// Love Display Screen Functions
let heartsInterval;

function startLoveDisplay() {
    // Animate counter from 0 to 9999999+
    animateCounter();

    // Start hearts explosion
    heartsInterval = setInterval(createFloatingHeart, 200);
}

function animateCounter() {
    const counter = document.getElementById('loveCounter');
    let count = 0;
    const target = 9999999;
    const duration = 3000; // 3 seconds
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
            counter.textContent = count.toLocaleString() + '+';
        } else {
            counter.textContent = Math.floor(count).toLocaleString();
        }
    }, 16);
}

function createFloatingHeart() {
    const container = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];

    // Random starting position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--heart-drift', (Math.random() - 0.5) * 200 + 'px');

    container.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Show sticker popup when No button is clicked
function showSticker() {
    const sticker = document.createElement('img');
    sticker.src = 'images/cheching.jpg';
    sticker.className = 'popup-sticker';

    // Random position on screen
    const maxX = window.innerWidth - 200; // 200px for sticker width
    const maxY = window.innerHeight - 200; // 200px for sticker height
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    sticker.style.left = randomX + 'px';
    sticker.style.top = randomY + 'px';

    document.body.appendChild(sticker);

    // Remove sticker after animation (2 seconds)
    setTimeout(() => {
        sticker.remove();
    }, 2000);
}

// Move button within Polaroid frame (for No button on final question)
function moveButton(button) {
    // Get the Polaroid photo container
    const container = button.closest('.polaroid-photo');
    if (!container) return; // Fallback if not in Polaroid

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate max positions to keep button inside Polaroid frame
    const maxX = containerRect.width - buttonRect.width - 20; // 20px padding from edge
    const maxY = containerRect.height - buttonRect.height - 20;

    // Generate random position within bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply new position
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
} 