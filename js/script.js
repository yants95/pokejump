let character = document.getElementById('character');
let block = document.getElementById('block');

let scoreId = document.getElementById('score');
let characterId = document.getElementById('character');
let gameId = document.getElementById('game');

let score = 0;
let tecla = 0;

// document.addEventListener('keypress', function(event) {
//     if (event.which === 32) {
//         // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
//         // e.preventDefault()
//         tecla = event.which;

//         console.log(tecla);
//     }
// })

function jump() {
    if (character.classList != 'jump') {
        character.classList.add('jump');
        scoreId.textContent = 0;
    }
    
    setTimeout(function() {
        character.classList.remove('jump');
        scoreId.textContent = score;
        score++;
        
        if (score >= 5 && score < 25) {
            characterId.style.backgroundImage = "url('../images/eevee/evolutions/level2.png')";
        } else if (score >= 25 && score < 50) {
            characterId.style.backgroundImage = "url('../images/eevee/evolutions/flareon.png')";
        } else if (score >= 50 && score < 100) {
            gameId.style.backgroundImage = "url('../images/bg-night.jpg')";
            characterId.style.backgroundImage = "url('../images/eevee/evolutions/esperion.png')";
        } else if (score >= 100) {
            gameId.style.backgroundImage = "url('../images/bg-morning.png')";
        }
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window
        .getComputedStyle(character)
        .getPropertyValue('top')
    );
    var blockLeft = parseInt(window
        .getComputedStyle(block)
        .getPropertyValue('left')
    );
            
    scoreId.textContent = score;
    block.style.animation = 'block 1s infinite linear';
        
    if (blockLeft > 0 && blockLeft < 40 && characterTop >= 130) {
        score = 0;
        scoreId.textContent = 0;
        block.style.animation = "none";
        
        alert('Você foi capturado! 😄');

        gameId.style.backgroundImage = "url('../images/bg-morning.png')";
        characterId.style.backgroundImage = "url('../images/eevee/level1.png')";
    }
}, 10);
        