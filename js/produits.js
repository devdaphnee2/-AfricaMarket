let tousLesProduits = [];

async function chargerProduits() {
    const reponse = await fetch('data/produits.json');
    tousLesProduits = await reponse.json();
    afficher(tousLesProduits);
}

function afficher(liste) {
    const conteneur = document.getElementById('liste-produits');
    conteneur.innerHTML = liste.map(p => `
        <article class="carte">
            <img src="${p.image}" alt="${p.nom}">
            <h3>${p.nom}</h3>
            <p class="origine">${p.pays} · ${p.categorie}</p>
            <p class="prix">${p.prix.toLocaleString('fr-FR')} FCFA</p>
        </article>`).join('');
}

chargerProduits();