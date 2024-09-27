// Show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
    sectionToShow.classList.add('show');
}

// Smooth scroll to section
function smoothScroll(target, duration) {
    const targetSection = document.getElementById(target);
    const targetPosition = targetSection.getBoundingClientRect().top - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Event listeners for smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('onclick').split('\'')[1];
        smoothScroll(sectionId, 1000);
        showSection(sectionId);
    });
});
