// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicButton.textContent = "🎵 Playing Our Song";

        playing = true;

    } else {

        music.pause();

        musicButton.textContent = "🎵 Play Our Song";

        playing = false;
    }

});


// ===============================
// LOVE CARD POPUPS
// ===============================

const loveCards = document.querySelectorAll(".love-card");

const lovePopup = document.getElementById("lovePopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const closePopup = document.getElementById("closePopup");

loveCards.forEach(card => {

    card.addEventListener("click", () => {

        popupTitle.textContent = card.dataset.title;
        popupText.textContent = card.dataset.text;

        lovePopup.classList.add("show");

        createHearts(8);
    });

});


closePopup.addEventListener("click", () => {

    lovePopup.classList.remove("show");

});


lovePopup.addEventListener("click", (event) => {

    if (event.target === lovePopup) {

        lovePopup.classList.remove("show");

    }

});


// ===============================
// SECRET SURPRISE
// ===============================

const surpriseButton = document.getElementById("surpriseButton");

const secret = document.getElementById("secret");

const closeSecret = document.getElementById("closeSecret");


surpriseButton.addEventListener("click", () => {

    secret.classList.add("show");

    createHearts(40);

});


closeSecret.addEventListener("click", () => {

    secret.classList.remove("show");

});


secret.addEventListener("click", (event) => {

    if (event.target === secret) {

        secret.classList.remove("show");

    }

});


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🌸"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);

}


function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}


// Background hearts

setInterval(() => {

    createHeart();

}, 1800);


// Initial hearts

createHearts(10);


// ===============================
// ESC KEY CLOSES POPUPS
// ===============================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lovePopup.classList.remove("show");

        secret.classList.remove("show");

    }

});