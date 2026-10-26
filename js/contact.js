// Validation du formulaire de contact
document.getElementById('form-contact')?.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const nom = document.getElementById('nom').value.trim();
  const message = document.getElementById('message').value.trim();
  
  // Validation e-mail
  if (!email.includes('@')) {
    e.preventDefault();
    alert('Adresse e-mail invalide');
    return;
  }
  
  // Validation champs vides
  if (!nom || !message) {
    e.preventDefault();
    alert('Tous les champs sont obligatoires');
    return;
  }
  
  alert('Merci ! Votre message a été envoyé.');
});
