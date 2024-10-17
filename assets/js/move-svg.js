<script>
    window.addEventListener('scroll', function() {
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            const rect = icon.getBoundingClientRect();
            // Verifica si el ícono está dentro de la vista
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                icon.style.opacity = 1; // Muestra el ícono
                icon.style.transform = 'translateX(0)'; // Asegúrate de que se vea desde el lado
            } else {
                icon.style.opacity = 0; // Oculta el ícono si no está en vista
                icon.style.transform = 'translateX(-50px)'; // Mueve el ícono fuera de vista (ajusta según sea necesario)
            }
        });
    });
</script>
