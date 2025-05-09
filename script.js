//home section animations

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

function updateSlides() {
  let items = document.querySelectorAll('.item');

  items.forEach((item, index) => {
    item.classList.remove('active');
    item.style.opacity = '1';
    item.style.zIndex = '0';
    item.style.width = '200px';
    item.style.height = '300px';
    item.style.top = '50%';
    item.style.left = `calc(50% + ${220 * (index - 1)}px)`;
    item.style.transform = 'translate(0, -50%)';
    item.querySelector('.content').style.display = 'none';

    if (index >= 4 && index !== 0) {
      item.style.opacity = '0';
    }
  });

  // Make first item full-screen

  let active = items[0];
  active.style.top = '0';
  active.style.left = '0';
  active.style.width = '100%';
  active.style.height = '100%';
  active.style.borderRadius = '0';
  active.style.transform = 'translate(0, 0)';
  active.style.zIndex = '1';
  active.querySelector('.content').style.display = 'block';
}

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');
  slide.appendChild(items[0]);
  updateSlides();
});

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');
  slide.prepend(items[items.length - 1]);
  updateSlides();
});

// Initial setup
updateSlides();



// About Section Animations

// Animate images on click
document.querySelectorAll('.about-images img').forEach((img) => {
    img.addEventListener('click', () => {
      img.classList.add('clicked');
      setTimeout(() => {
        img.classList.remove('clicked');
      }, 300); // Remove effect after 300ms
    });
  });
  
  // Optional: fade in all images
  window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.about-images img');
    images.forEach((img, index) => {
      img.style.opacity = 0;
      img.style.transition = `opacity 0.6s ease ${index * 0.2}s`;
      setTimeout(() => {
        img.style.opacity = 1;
      }, 100);
    });
  });
  

// About Section Animations
document.querySelectorAll('.about-images img').forEach((img) => {
  img.addEventListener('click', () => {
    img.classList.add('clicked');
    setTimeout(() => {
      img.classList.remove('clicked');
    }, 300);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.about-images img');
  images.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transition = `opacity 0.6s ease ${index * 0.2}s`;
    setTimeout(() => {
      img.style.opacity = 1;
    }, 100);
  });
});


active.querySelector('.content').classList.remove('animated', 'fadeIn', 'whatever-animation-class');


// Modal functionality for Resources Section
     const images = [
       {
         src: "images/articles.jpg",
         caption: "Articles and Guides – Practical tools and expert-written content for improving mental health."
       },
       {
         src: "images/anxiety.jpg",
         caption: "Anxiety – Coping strategies, breathing exercises, and calming techniques."
       },
       {
         src: "images/depression.jpg",
         caption: "Depression – Supportive advice, treatment options, and community stories."
       },
       {
         src: "images/burnout.jpg",
         caption: "Burnout – Prevention tips and energy recovery plans."
       },
       {
         src: "images/selfesteem.jpg",
         caption: "Self-Esteem – Boost confidence and self-worth through cognitive strategies."
       },
       {
         src: "images/grief.jpg",
         caption: "Grief and Loss – Healing journeys and guided reflections."
       }
     ];
     
     let currentSlide = 0;
     
     function openResourceModal(index) {
       currentSlide = index;
       const modal = document.getElementById("resourceModal");
       document.getElementById("modalImg").src = images[index].src;
       document.getElementById("modalCaption").innerText = images[index].caption;
       modal.style.display = "block";
       modal.focus(); // Accessibility
     }
     
     function closeResourceModal() {
       document.getElementById("resourceModal").style.display = "none";
     }
     
     function nextSlide() {
       currentSlide = (currentSlide + 1) % images.length;
       openResourceModal(currentSlide);
     }
     
     function prevSlide() {
       currentSlide = (currentSlide - 1 + images.length) % images.length;
       openResourceModal(currentSlide);
     }
     
// Programs Section Animations using Swiper


     // Swiper initialization
     
     document.addEventListener("DOMContentLoaded", function () {
      const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
      });
    });
     
// Quote Modal Functionality
     const quotes = [
       "You are enough, just as you are.",
       "Healing isn’t linear — be gentle with yourself.",
       "Small steps every day lead to big changes.",
       "You are stronger than you think.",
       "Progress over perfection — always."
     ];
     
     function showQuote() {
       const quoteText = document.getElementById("quoteText");
       const modal = document.getElementById("quoteModal");
     
       const randomIndex = Math.floor(Math.random() * quotes.length);
       quoteText.textContent = quotes[randomIndex];
       
       modal.style.display = "block";
       modal.focus(); // Accessibility
     }
     
     function closeQuoteModal() {
       document.getElementById("quoteModal").style.display = "none";
     }
     
     // Close modals when clicking outside
     window.onclick = function(event) {
       const quoteModal = document.getElementById("quoteModal");
       const resourceModal = document.getElementById("resourceModal");
       
       if (event.target === quoteModal) {
         closeQuoteModal();
       } else if (event.target === resourceModal) {
         closeResourceModal();
       }
     };
