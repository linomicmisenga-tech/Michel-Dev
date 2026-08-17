  // Met automatiquement l’année en cours dans le footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Toggle du menu mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            burger.classList.toggle('is-open', isOpen);
            burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Fermer le menu quand on clique sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                burger.classList.remove('is-open');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
    }
    const menuBtn =
    document.getElementById("menuBnt");
    menuBtn.addEventListener("click", () => 
    {
        alert("Menu ouvert");
    });

    document.getElementById("formwhatsapp").addEventListener("submit",function(e) {
        e.preventDefault(); // Empêche normal du formulaire

        // 1. Récupérer ce que le client à taper
        let nom =document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // 2. Construire le message Whatsapp
        let texte = `Nouveau message depuis Michel Dev:%0A%0A` +
                    `Nom: ${nom}%0A` +
                    `Email: ${email}%0A` +
                    `Message: ${message}`;
        
        // 3. Ton numero en format international
        let numero = "2438927434205";

        // 4. Ouvrir Whatsapp avec le message
        let url = `https://wa.me/${numero}?text=${texte}`;
        window.open(url,'_blank');
    })




