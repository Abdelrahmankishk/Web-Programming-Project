// js/dynamic-content.js

document.addEventListener("DOMContentLoaded", () => {
    const services = [
        { title: "Task Creation", description: "Add new tasks easily with our intuitive interface." },
        { title: "Task Management", description: "Update, delete, or mark tasks as complete effortlessly." },
        { title: "Personal Dashboard", description: "View all your tasks in one organized dashboard." },
        { title: "Responsive Design", description: "Access your tasks on any device, anywhere." },
    ];

    const servicesList = document.getElementById("services-list");
    if (servicesList) {
        services.forEach(service => {
            const serviceItem = document.createElement("div");
            serviceItem.classList.add("service-item");
            const title = document.createElement("h2");
            title.textContent = service.title;
            const description = document.createElement("p");
            description.textContent = service.description;
            serviceItem.appendChild(title);
            serviceItem.appendChild(description);
            servicesList.appendChild(serviceItem);
        });
    }

    const dynamicMessage = document.getElementById("dynamic-message");
    if (dynamicMessage) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("info-box", "slide-up");
        const messageTitle = document.createElement("h2");
        messageTitle.textContent = "Why Choose Us?";
        const messageText = document.createElement("p");
        messageText.textContent = "Our task management system is designed to help you achieve your goals with ease and efficiency. Start managing your tasks today!";
        messageDiv.appendChild(messageTitle);
        messageDiv.appendChild(messageText);
        dynamicMessage.appendChild(messageDiv);
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent actual submission for now
            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        });
    }
});
