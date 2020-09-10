var character = 
document.getElementById("character");
var block = 
document.getElementById("block");

var score = 0;
var scoreId = document.getElementById("score");
var characterId = document.getElementById("character");
var tecla = 0;

// document.addEventListener('keypress', function(event) {
//     if (event.which === 32) {
//         // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
//         // e.preventDefault()
//         tecla = event.which;

//         console.log(tecla);
//     }
// })




function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
        scoreId.textContent = 0;
    }
    
    setTimeout(function() {
        character.classList.remove("animate");
        scoreId.textContent = score;
        score++;
        if (score >= 5) characterId.style.backgroundImage = "url('./poke-evolution.png')";
    }, 500);
}


var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        scoreId.textContent = 0;
        alert("Você foi capturado! 😄");
        score = 0;
        characterId.style.backgroundImage = "url('./ppokemon-pixel-art.png')";
    } else {
        scoreId.textContent = score;
    }
}, 10);


