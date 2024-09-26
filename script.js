// Updated JavaScript to toggle hidden/show with animations
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('show');
        section.classList.add('hidden');
    });

    // Show the clicked section with fade-in animation
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden');
    sectionToShow.classList.add('show');
}

