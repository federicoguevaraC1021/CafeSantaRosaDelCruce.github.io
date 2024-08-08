document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.open-dialog').forEach(button => {
        button.addEventListener('click', event => {
            const category = event.target.getAttribute('data-category');
            const dialog = document.getElementById('detailDialog');
            const dialogImage = document.getElementById('dialogImage');
            const dialogText = document.getElementById('dialogText');

            if (category === 'expreso') {
                dialogImage.src = 'img/cafepolvo.png';
                dialogText.textContent = 'Descripción del Café Molido...';
            } else if (category === 'capuchino') {
                dialogImage.src = 'img/cafegrano.png';
                dialogText.textContent = 'Descripción del Café en Grano...';
            }

            dialog.showModal();
            dialog.classList.add('open');
        });
    });

    document.getElementById('closeDialog').addEventListener('click', () => {
        const dialog = document.getElementById('detailDialog');
        dialog.classList.add('close');
        setTimeout(() => {
            dialog.close();
            dialog.classList.remove('open', 'close');
        }, 400); // Debe coincidir con la duración de la animación en CSS
    });
});

  

function redirectToWhatsApp() {
    var phoneNumber = "573102142103"; 
    var message = "Hola, me gustaría comprar Café Molido.";
    
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappURL;
}

function redirectToWhatsApp1() {
    var phoneNumber = "573102142103"; 
    var message = "Hola, me gustaría comprar Café en Grano.";
    
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappURL;
}