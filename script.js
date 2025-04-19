// Configuración global
const config = {
    speed: 2,
    animationSpeed: 100,
    initialX: 50,
    letterContent: 
    "No sé si han pasado volando o si cada día ha tenido su propio ritmo, pero lo que sí sé es que estos 90 días han estado llenos de momentos que se quedan. Conversaciones largas, silencios cómodos, risas espontáneas, caminatas sin rumbo, miradas cómplices, hablar de anime, nuestros gustos y ese gusto de simplemente estar uno a lado de otro.\n\n" +
    "No ha hecho falta nada más. Solo tú, yo, y el tiempo que compartimos. Tiempo que no se mide en minutos sino en memorias.\n\n" +
    "Así que, para celebrar estos tres meses, te dejo algo sencillo pero sincero: 90 formas de decir 'te quiero'. Una por cada día que me has hecho sonreír, sentir paz, y agradecer por tenerte cerca.\n\n" +
    "1. Te quiero (Español)\n" +
    "2. I love you (Inglés)\n" +
    "3. Je t’aime (Francés)\n" +
    "4. Ti amo (Italiano)\n" +
    "5. Ich liebe dich (Alemán)\n" +
    "6. Eu te amo (Portugués)\n" +
    "7. 愛してる (Aishiteru – Japonés)\n" +
    "8. 사랑해 (Saranghae – Coreano)\n" +
    "9. أحبك (Uhibbuk – Árabe)\n" +
    "10. Я тебя люблю (Ya tebya lyublyu – Ruso)\n" +
    "11. Ik hou van jou (Holandés)\n" +
    "12. Jeg elsker dig (Danés)\n" +
    "13. Jag älskar dig (Sueco)\n" +
    "14. Amo-te (Portugués europeo)\n" +
    "15. Te dua (Albanés)\n" +
    "16. Seni seviyorum (Turco)\n" +
    "17. אני אוהב אותך (Hebreo)\n" +
    "18. Tôi yêu bạn (Vietnamita)\n" +
    "19. Mahal kita (Filipino)\n" +
    "20. Ich lieb dich (Alemán informal)\n" +
    "21. Volim te (Croata)\n" +
    "22. Miluji tě (Checo)\n" +
    "23. Ég elska þig (Islandés)\n" +
    "24. Ma armastan sind (Estonio)\n" +
    "25. Tá grá agam duit (Irlandés)\n" +
    "26. Te iubesc (Rumano)\n" +
    "27. Ljubim te (Esloveno)\n" +
    "28. Dragostea mea pentru tine (Rumano poético)\n" +
    "29. Aşkım sana (Turco romántico)\n" +
    "30. Ngiyakuthanda (Zulu)\n" +
    "31. Ndagukunda (Kinyarwanda)\n" +
    "32. Mi aime a ou (Criollo Reunión)\n" +
    "33. Wo ai ni (Mandarín)\n" +
    "34. Ngo oi nei (Cantonés)\n" +
    "35. Main tumse pyaar karta hoon (Hindi)\n" +
    "36. Tora dost do (Assamese)\n" +
    "37. Ami tomake bhalobashi (Bengalí)\n" +
    "38. Naan unnai kathalikiraen (Tamil)\n" +
    "39. Nenu ninnu premistunnanu (Telugu)\n" +
    "40. S’agapo (Griego)\n" +
    "41. Saranghanda (Coreano formal)\n" +
    "42. Kocham cię (Polaco)\n" +
    "43. Te sakam (Macedonio)\n" +
    "44. Ke a go rata (Tswana)\n" +
    "45. Inhobokata (Guaraní)\n" +
    "46. Me mu nyɛ wo (Akan)\n" +
    "47. Mo nifẹ rẹ (Yoruba)\n" +
    "48. Ndinokuda (Shona)\n" +
    "49. Ti voglio bene (Italiano afectivo)\n" +
    "50. Aloha wau ia ‘oe (Hawaiano)\n" +
    "51. Ofa atu (Tongano)\n" +
    "52. Kaluguran daka (Kapampangan – Filipinas)\n" +
    "53. Rwy'n dy garu di (Galés)\n" +
    "54. Te estimo (Catalán)\n" +
    "55. T’estime (Valenciano)\n" +
    "56. Et trobes a faltar (Catalán: 'te echo de menos')\n" +
    "57. Seni seviyorum (Azerí)\n" +
    "58. Tình yêu của anh dành cho em (Vietnamita poético)\n" +
    "59. Ayo nigüey (Náhuatl)\n" +
    "60. Kanbhik ayú (Zapoteco)\n" +
    "61. Kuyayki (Quechua)\n" +
    "62. Ñu'u xíín (Mixteco)\n" +
    "63. Nakupenda (Swahili)\n" +
    "64. Rataka ny fitia (Malgache)\n" +
    "65. Egzakte ou (Criollo haitiano)\n" +
    "66. Ek het jou lief (Afrikáans)\n" +
    "67. Moji te (Bosnio)\n" +
    "68. Ich hab di lieb (Alemán suizo)\n" +
    "69. Lubim ta (Eslovaco)\n" +
    "70. Āroha ahau ki a koe (Maorí)\n" +
    "71. Phom rak khun (Tailandés – hombre)\n" +
    "72. Chan rak khun (Tailandés – mujer)\n" +
    "73. Ana behibek / Ana behibak (Árabe dialectal)\n" +
    "74. Hum tumse pyaar karte hain (Hindi colectivo)\n" +
    "75. I lof yu (Tok Pisin – Papúa Nueva Guinea)\n" +
    "76. Eg elska teg (Feroés)\n" +
    "77. Mo quieri (Papiamento)\n" +
    "78. Zaginayka (Cherokee)\n" +
    "79. Ayor anosh’ní (Navajo)\n" +
    "80. Toko shinju (Indonesio poético)\n" +
    "81. Aku cinta kamu (Indonesio)\n" +
    "82. Kulo tresno sampeyan (Javanés)\n" +
    "83. Is breá liom tú (Irlandés)\n" +
    "84. Volim te puno (Croata afectivo)\n" +
    "85. Mo chuisle (Irlandés poético – 'mi amor')\n" +
    "86. Kocham cię bardzo (Polaco afectivo)\n" +
    "87. Te amo con todo mi corazón (Español especial)\n" +
    "88. Tú eres mi lugar favorito\n" +
    "89. Tú, siempre tú\n" +
    "90. Gracias por ser mi hogar",
    initialY: 50,
    interactionDistance: 80, // Distancia para interactuar con la carta
    letterMessage: "¡Has encontrado una carta!, da click en aceptar para continuar\n\n",
    interactionDistance: 80 // Distancia para interactuar con la carta
};

// Elementos del DOM
const elements = {
    player: document.getElementById('player'),
    playerSprite: document.getElementById('player-sprite'),
    gameContainer: document.getElementById('game-container'),
    table: document.getElementById('table'),
    letter: document.getElementById('letter'),
    dpad: {
        up: document.getElementById('up'),
        down: document.getElementById('down'),
        left: document.getElementById('left'),
        right: document.getElementById('right'),
        center: document.querySelector('.d-pad-center')
    },
    letterModal: document.getElementById('letterModal'),
    letterOverlay: document.getElementById('letterOverlay'),
    letterMessage: document.getElementById('letterMessage')
};

// Estados del jugador
const playerState = {
    direction: 'down',
    isMoving: false,
    animationFrame: 0,
    x: config.initialX,
    y: config.initialY,
    animationInterval: null,
    movementInterval: null,
    activeDirection: null,
    sprites: {
        up: [
            'assets/sonlla_arriba_1.png',
            'assets/sonlla_arriba_2.png',
            'assets/sonlla_arriba_3.png'
        ],
        down: [
            'assets/sonlla_down_1.png',
            'assets/sonlla_down_2.png',
            'assets/sonlla_down_3.png'
        ],
        left: [
            'assets/sonlla_izquierda_1.png',
            'assets/sonlla_izquierda_2.png',
            'assets/sonlla_izquierda_3.png'
        ],
        right: [
            'assets/sonlla_derecha_1.png',
            'assets/sonlla_derecha_2.png',
            'assets/SONLLA_derecha_3.png'
        ]
    },
    isNearLetter: false
};

// Inicialización del jugador
function initPlayer() {
    elements.player.style.position = 'absolute';
    elements.player.style.transform = `translate(${playerState.x}px, ${playerState.y}px)`;
    elements.playerSprite.src = playerState.sprites.down[0];
    elements.playerSprite.alt = 'Personaje principal';
    preloadSprites();
}

function preloadSprites() {
    Object.values(playerState.sprites).forEach(direction => {
        direction.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    });
}

// Sistema de animación
function animatePlayer() {
    if (!playerState.isMoving) {
        elements.playerSprite.src = playerState.sprites[playerState.direction][0];
        return;
    }
    
    const frames = playerState.sprites[playerState.direction];
    elements.playerSprite.src = frames[playerState.animationFrame % frames.length];
    playerState.animationFrame++;
}

// Función de movimiento continuo
function continuousMovement() {
    if (!playerState.activeDirection) return;
    
    switch(playerState.activeDirection) {
        case 'up': 
            playerState.y = Math.max(0, playerState.y - config.speed);
            break;
        case 'down': 
            playerState.y = Math.min(
                elements.gameContainer.offsetHeight - elements.player.offsetHeight, 
                playerState.y + config.speed
            );
            break;
        case 'left': 
            playerState.x = Math.max(0, playerState.x - config.speed);
            break;
        case 'right': 
            playerState.x = Math.min(
                elements.gameContainer.offsetWidth - elements.player.offsetWidth, 
                playerState.x + config.speed
            );
            break;
    }
    
    elements.player.style.transform = `translate(${playerState.x}px, ${playerState.y}px)`;
    checkCollisions();
    checkLetterProximity();
}

// Interacción con la carta
function checkLetterProximity() {
    const letterRect = elements.letter.getBoundingClientRect();
    const playerRect = elements.player.getBoundingClientRect();
    
    const distance = Math.sqrt(
        Math.pow(letterRect.left - playerRect.left, 2) + 
        Math.pow(letterRect.top - playerRect.top, 2)
    );
    
    playerState.isNearLetter = distance < config.interactionDistance;
    
    // Cambia el estilo cuando está cerca
    if (playerState.isNearLetter) {
        elements.letter.style.transform = 'scale(1.2)';
        elements.letter.style.filter = 'drop-shadow(0 0 5px gold)';
    } else {
        elements.letter.style.transform = 'scale(1)';
        elements.letter.style.filter = 'none';
    }

    // Actualiza clase CSS
    if (playerState.isNearLetter) {
        elements.letter.classList.add('player-near');
    } else {
        elements.letter.classList.remove('player-near');
    }
}

function showLetterMessage() {
    if (playerState.isNearLetter) {
        alert(config.letterMessage);
    } else {
        alert("Acércate más a la carta para leerla");
    }
}

// Iniciar movimiento
function movePlayer(direction) {
    playerState.direction = direction;
    playerState.activeDirection = direction;
    playerState.isMoving = true;

    if (!playerState.animationInterval) {
        playerState.animationInterval = setInterval(animatePlayer, config.animationSpeed);
    }
    
    if (!playerState.movementInterval) {
        playerState.movementInterval = setInterval(continuousMovement, 16);
    }
}

// Detener movimiento
function stopPlayer() {
    playerState.isMoving = false;
    playerState.activeDirection = null;
    
    if (playerState.animationInterval) {
        clearInterval(playerState.animationInterval);
        playerState.animationInterval = null;
    }
    
    if (playerState.movementInterval) {
        clearInterval(playerState.movementInterval);
        playerState.movementInterval = null;
    }
    
    elements.playerSprite.src = playerState.sprites[playerState.direction][0];
}

// Manejadores de eventos de teclado
function handleKeyDown(e) {
    switch(e.key) {
        case 'ArrowUp': movePlayer('up'); break;
        case 'ArrowDown': movePlayer('down'); break;
        case 'ArrowLeft': movePlayer('left'); break;
        case 'ArrowRight': movePlayer('right'); break;
        case ' ': showLetterMessage(); break; // Barra espaciadora para interactuar
    }
}

function handleKeyUp(e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        stopPlayer();
    }
}

// Controles táctiles
function setupTouchControls() {
    Object.entries(elements.dpad).forEach(([dir, btn]) => {
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (dir !== 'center') movePlayer(dir);
        });
        
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (dir !== 'center') stopPlayer();
        });
        
        btn.addEventListener('mousedown', () => {
            if (dir !== 'center') movePlayer(dir);
        });
        
        btn.addEventListener('mouseup', stopPlayer);
        btn.addEventListener('mouseleave', stopPlayer);

        
    });

    // Control para la carta (botón central)
    elements.dpad.center.addEventListener('click', showLetterMessage);
    elements.dpad.center.addEventListener('touchend', (e) => {
        e.preventDefault();
        showLetterMessage();
    });
}

// Sistema de colisiones
function checkCollisions() {
    const tableRect = elements.table.getBoundingClientRect();
    const gameRect = elements.gameContainer.getBoundingClientRect();
    
    const playerLeft = gameRect.left + playerState.x;
    const playerTop = gameRect.top + playerState.y;
    const playerRight = playerLeft + elements.player.offsetWidth;
    const playerBottom = playerTop + elements.player.offsetHeight;

    if (
        playerRight > tableRect.left &&
        playerLeft < tableRect.right &&
        playerBottom > tableRect.top &&
        playerTop < tableRect.bottom
    ) {
        playerState.x -= (playerState.direction === 'right') ? config.speed : 
                       (playerState.direction === 'left') ? -config.speed : 0;
        playerState.y -= (playerState.direction === 'down') ? config.speed : 
                       (playerState.direction === 'up') ? -config.speed : 0;
        
        elements.player.style.transform = `translate(${playerState.x}px, ${playerState.y}px)`;
    }
}

// Bucle principal del juego
function gameLoop() {
    checkCollisions();
    checkLetterProximity();
    requestAnimationFrame(gameLoop);
}

// Inicialización del juego
function initGame() {
    initPlayer();
    setupTouchControls();
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    // Posiciona la carta encima de la mesa
    positionLetterOnTable();
    gameLoop();
}

function positionLetterOnTable() {
    const tableRect = elements.table.getBoundingClientRect();
    const gameRect = elements.gameContainer.getBoundingClientRect();
    
    elements.letter.style.left = `${tableRect.left - gameRect.left + elements.table.offsetWidth/2 - 15}px`;
    elements.letter.style.top = `${tableRect.top - gameRect.top - 20}px`;
}

function showLetter() {
    if (!playerState.isNearLetter) {
        alert("Acércate más a la carta para leerla... ✨");
        return;
    }

    // Mostrar elementos
    elements.letterOverlay.style.display = 'block';
    elements.letterModal.style.display = 'flex';
    createMagicStars();

    // Resetear contenido y asegurar scroll al inicio
    elements.letterMessage.textContent = '';
    const textContainer = elements.letterMessage.parentElement;
    textContainer.scrollTop = 0;

    // Efecto de máquina de escribir con scroll automático
    let i = 0;
    let typingTimeout;
    
    function typeWriter() {
        if (i < config.letterContent.length) {
            const char = config.letterContent.charAt(i);
            elements.letterMessage.textContent += char;
            
            // Auto-scroll suave
            textContainer.scrollTo({
                top: textContainer.scrollHeight,
                behavior: 'smooth'
            });
            
            // Pausas naturales
            let delay = 30;
            if (char === '\n') delay = 100;
            if (char.match(/[.,!?¡¿]/)) delay = char === '.' || char === '!' ? 300 : 150;
            
            i++;
            typingTimeout = setTimeout(typeWriter, delay);
        }
    }
    
    // Iniciar efecto de escritura
    typeWriter();

    // Función para cerrar
    function closeLetter() {
        clearTimeout(typingTimeout);
        elements.letterOverlay.style.display = 'none';
        elements.letterModal.style.display = 'none';
        elements.letterOverlay.innerHTML = '';
    }

    // Eventos para cerrar
    document.getElementById('closeLetter').onclick = closeLetter;
    //elements.letterOverlay.onclick = closeLetter;
}

// En setupTouchControls(), modifica el control central:
elements.dpad.center.addEventListener('click', showLetter);
elements.dpad.center.addEventListener('touchend', (e) => {
    e.preventDefault();
    showLetter();
});


function createMagicStars() {
    const overlay = document.getElementById('letterOverlay');
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.classList.add('magic-star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        overlay.appendChild(star);
    }
}



// Inicia el juego
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}