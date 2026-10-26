// Filtre des produits par catégorie
document.getElementById('categorie')?.addEventListener('change', (e) => {
  const choix = e.target.value;
  if (typeof afficher === 'function' && typeof tousLesProduits !== 'undefined') {
    afficher(choix === 'tous' ? tousLesProduits : tousLesProduits.filter(p => 
      p.categorie === choix
    ));
  }
});
