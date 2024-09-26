document.addEventListener('DOMContentLoaded', function () {
    // Function to show and hide sections
    function showSection(sectionId) {
        // Get all sections and hide them
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('show');  // Remove show class
            section.classList.add('hidden');  // Add hidden class
        });

        // Get the clicked section and show it with a smooth animation
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.classList.remove('hidden');
        sectionToShow.classList.add('show');
    }

    // Event listeners for the navigation bar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior

            const sectionId = this.getAttribute('onclick').split('\'')[1];
            showSection(sectionId);
        });
    });

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

    // Event listeners for smooth scroll on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior
            const target = this.getAttribute('onclick').split('\'')[1];
            smoothScroll(target, 1000);  // Smooth scroll for 1 second
        });
    });

    // Hover effect on the profile picture
    const profilePic = document.querySelector('.profile-picture img');
    profilePic.addEventListener('mouseover', function () {
        profilePic.style.transform = 'scale(1.1)';  // Zoom in effect
        profilePic.style.transition = 'transform 0.5s ease';  // Smooth transition
    });

    profilePic.addEventListener('mouseout', function () {
        profilePic.style.transform = 'scale(1)';  // Reset zoom
    });

    // Back to top button (optional)
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '⬆';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button on scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function () {
        smoothScroll('about', 1000);
    });
});
