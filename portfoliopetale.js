function createPetale() {
    const petale = document.createElement('div');
    petale.className = 'petale';
    petale.style.left = `${Math.random() * 100}vw`;
    petale.style.animationDuration = `${Math.random() * 5 + 5}s`;

    document.body.appendChild(petale);

    setTimeout(() => {
        petale.remove();
    }, 10000); // Supprimer les pétales après 10 secondes
}

setInterval(createPetale, 300); // Créer un nouveau pétale toutes les 300ms

