// Générer un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('attempts').textContent = `Tentatives : ${attempts}`;

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `Félicitations ! Vous avez trouvé le nombre en ${attempts} tentatives.`;
        document.getElementById('message').style.color = 'green';
        document.getElementById('guessInput').disabled = true;
        document.getElementById('guessButton').disabled = true;
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = 'Trop bas ! Essayez un nombre plus élevé.';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').textContent = 'Trop haut ! Essayez un nombre plus bas.';
        document.getElementById('message').style.color = 'red';
    }
});