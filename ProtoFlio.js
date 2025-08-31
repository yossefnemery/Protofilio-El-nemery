
document.addEventListener("mousemove", (e) => {
    createSmoke(e.clientX, e.clientY);
});


document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    createSmoke(touch.clientX, touch.clientY);
});

function createSmoke(x, y) {
    let smoke = document.createElement("div");
    smoke.className = "smoke";
    smoke.style.left = x + "px";
    smoke.style.top = y + "px";
    document.body.appendChild(smoke);
    setTimeout(() => { smoke.remove(); }, 1500);
}



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


function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    event.target.reset();
}


function sendEmail() {
    const parameters = {
        full_name: document.getElementById("full_name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        budget: document.getElementById("budget").value,
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

let selectedRating = 0; 

function fillStars(count) {
  const stars = document.querySelectorAll(".rating-form .stars i");
  stars.forEach((s, i) => {
    if (i < count) {
      s.classList.remove("fa-regular");
      s.classList.add("fa-solid", "active");
    } else {
      s.classList.remove("fa-solid", "active");
      s.classList.add("fa-regular");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingForm = document.querySelector(".rating-form");
  const stars = ratingForm.querySelectorAll(".stars i");

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => fillStars(index + 1));
    star.addEventListener("click", () => {
      selectedRating = index + 1;
      fillStars(selectedRating);
    });
  });

  ratingForm.querySelector(".stars").addEventListener("mouseleave", () => fillStars(selectedRating));

  ratingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (selectedRating === 0) {
      alert("⚠️ Please select a star rating before submitting!");
      return;
    }

    const params = {
      name_rate: document.getElementById("name-rate").value,
      email_rate: document.getElementById("email-rate").value,
      message_rate: document.getElementById("message-rate").value,
      link: document.getElementById("link-project").value,
      rating: selectedRating
    };

    emailjs.send("service_dd216cl", "template_oyhdq6n", params)
      .then(() => {
        alert("Feedback sent successfully");
        e.target.reset();
        selectedRating = 0;
        fillStars(0);
      }, (error) => {
        console.error("EmailJS Rating Error:", error);
        alert("Error sending feedback. Please try again later.");
      });
  });
});






// Testimonials Slider 
// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".testimonial-card");
//     const prevBtn = document.querySelector(".arrow.left");
//     const nextBtn = document.querySelector(".arrow.right");
//     const slider = document.querySelector(".testimonials-slider");

//     let currentIndex = 0;

//     function showCard(index) {
//         cards.forEach((card, i) => {
//             card.classList.remove("active");
//             if (i === index) {
//                 card.classList.add("active");
//             }
//         });
//     }

//     function nextCard() {
//         currentIndex = (currentIndex + 1) % cards.length;
//         showCard(currentIndex);
//     }

//     function prevCard() {
//         currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//         showCard(currentIndex);
//     }

//     // أزرار التنقل
//     nextBtn.addEventListener("click", nextCard);
//     prevBtn.addEventListener("click", prevCard);

//     // دعم السحب (Swipe) للموبايل
//     let startX = 0;
//     let endX = 0;

//     slider.addEventListener("touchstart", (e) => {
//         startX = e.touches[0].clientX;
//     });

//     slider.addEventListener("touchend", (e) => {
//         endX = e.changedTouches[0].clientX;
//         if (startX - endX > 50) {
//             nextCard(); // سحب لليسار → التالي
//         } else if (endX - startX > 50) {
//             prevCard(); // سحب لليمين ← السابق
//         }
//     });

//     // أول كارت يظهر
//     showCard(currentIndex);
// });










const navEl = document.querySelector('nav');
const burger = document.querySelector('.hamburger');
const navAnchors = document.querySelectorAll('nav .nav-links a');

if (burger && navEl) {
  burger.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : ''; 
  });


  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      navEl.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
