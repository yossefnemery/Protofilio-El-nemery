// Smoke
document.addEventListener("mousemove", (e) => {
    let smoke = document.createElement("div");
    smoke.className = "smoke";
    smoke.style.left = e.clientX + "px";
    smoke.style.top = e.clientY + "px";
    document.body.appendChild(smoke);

    setTimeout(() => { smoke.remove(); }, 1500);
});

// Welcome 
const text = "Hi, I'm Yossef , Welcome to my Portfolio ";
const typingElement = document.getElementById("typing");
let i = 0;
let deleting = false;

function typeWriter() {
    if (!deleting && i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else if (deleting && i > 0) {
        typingElement.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(typeWriter, 50);
    } else {
        deleting = !deleting;
        setTimeout(typeWriter, 800);
    }
}
typeWriter();

// Contact 
function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    event.target.reset();
}

// EmailJS 
function sendEmail() {
    const parameters = {
        full_name: document.getElementById("full_name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_dd216cl", "template_3jkoi3h", parameters)
        .then(function (response) {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Your message has been sent successfully!");
        }, function (error) {
            console.error("Failed to send email:", error);
            alert("There was an error sending your message. Please try again later.");
        });
}

// ===== Mobile nav =====
const navEl = document.querySelector('nav');
const burger = document.querySelector('.hamburger');
const navAnchors = document.querySelectorAll('nav .nav-links a');

if (burger && navEl) {
  burger.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : ''; 
  });

  // Close nav
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      navEl.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
