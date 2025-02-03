const gameBoard = document.getElementById('gameBoard');
const pokemon = ['🐱', '🐱', '🐶', '🐶', '🦊', '🦊', '🐻', '🐻', '🐼', '🐼', '🐸', '🐸', '🐵', '🐵', '🐢', '🐢'];
let flippedCards = [];
let matchedPairs = 0;

// Shuffle Pokémon array
pokemon.sort(() => Math.random() - 0.5);

// Create cards
gameBoard.innerHTML = pokemon.map(poke => `<div class="card" data-pokemon="${poke}"></div>`).join('');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
            card.textContent = card.getAttribute('data-pokemon');
            card.classList.add('flipped');
            flippedCards.push(card);
        }
        
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    });
});

function checkMatch() {
    if (flippedCards[0].textContent === flippedCards[1].textContent) {
        flippedCards.forEach(card => card.style.backgroundColor = '#8bc34a');
        matchedPairs++;
        if (matchedPairs === pokemon.length / 2) {
            setTimeout(() => alert('You Win!'), 500);
        }
    } else {
        flippedCards.forEach(card => {
            card.textContent = '';
            card.classList.remove('flipped');
        });
    }
    flippedCards = [];
}
