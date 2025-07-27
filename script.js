document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            // Removed 'subject' as it's not present in the HTML form
            const message = document.getElementById('message').value;

            // Simple validation
            if (name === '' || email === '' || message === '') {
                displayMessage('الرجاء تعبئة جميع الحقول المطلوبة.', 'error');
                return;
            }
            if (!validateEmail(email)) {
                displayMessage('الرجاء إدخال بريد إلكتروني صحيح.', 'error');
                return;
            }

            // Simulate form submission (in a real scenario, you'd send data to a server)
            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            // console.log('Subject:', subject); // Removed
            console.log('Message:', message);

            // Display success message
            displayMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');

            // Clear the form fields after successful submission
            contactForm.reset();
        });
    }

    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = 'form-message ' + type; // Reset classes and add new type
        formMessage.style.display = 'block';
        // Optional: Hide message after a few seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 7000);
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\\]\\.,;:\s@"]+(\.[^<>()[\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Testimonials Slider (This part of the code is present but currently unused as there's no corresponding HTML structure for a slider in index.html)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    if (testimonialSlider && dots.length > 0) {
        const showSlide = (index) => {
            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === index);
            });
            currentSlide = index;
        };

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slide);
                showSlide(slideIndex);
            });
        });

        // Optional: Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            showSlide(currentSlide);
        }, 5000); // Change slide every 5 seconds
    }
});

// Update current year in footer (moved outside DOMContentLoaded as it's a simple, direct DOM manipulation)
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Scroll to section and active link highlighting (moved outside DOMContentLoaded to ensure it runs)
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // #hero, #services, etc.
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll
            });
        }

        // Add 'active' class to current link and remove from others
        document.querySelectorAll('header nav ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});