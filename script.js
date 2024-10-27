// Show the selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Add event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.dataset.section;
        showSection(sectionId);
    });
});

// Show About section by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
