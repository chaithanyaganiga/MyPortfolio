document.addEventListener('DOMContentLoaded', function () {
    function toggleNav() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('show');
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });

            // Close the navigation menu on mobile
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('show');
        });
    });

    // Form submission alert
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Log the form data to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Optionally, clear the form after submission
        contactForm.reset();

        // Show a success message (you may want to replace this with a more sophisticated notification)
        alert('Message sent successfully!');
    });
});
