document.getElementById('recherche').addEventListener('input', (e) => { 
  const texte = e.target.value.toLowerCase(); 
  afficher(tousLesProduits.filter(p => p.nom.toLowerCase().includes(texte))); 
}); 
