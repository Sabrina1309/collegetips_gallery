document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const button = document.querySelector('.seeMore button');
    let visibleCount = 2; // Start with 2 images visible

    // Hide all images except the first 2
    images.forEach((img, index) => {
        if (index >= visibleCount) {
            img.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        const nextImages = Array.from(images).slice(visibleCount, visibleCount + 2);
        nextImages.forEach(img => {
            img.style.display = 'block';
        });
        visibleCount += 2;

        // Disable button if all images are visible
        if (visibleCount >= images.length) {
            button.disabled = true;
            button.textContent = 'No More Photos';
        }
    });
});