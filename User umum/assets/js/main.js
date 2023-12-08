(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    window.addEventListener("load", () => {
      let programContainer = select(".program-container");
      if (programContainer) {
        let programIsotope = new Isotope(programContainer, {
          itemSelector: ".program-item",
          layoutMode: "fitRows",
        });

        let programFilters = select("#program-flters li", true);

        on("click", "#program-flters li", function (e) {
          e.preventDefault();
          programFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          programIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          programIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        }, true);
      }
    });

    const programLightbox = GLightbox({
      selector: ".program-lightbox",
    });

    new Swiper(".program-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    /**
     * Animation on scroll
     */
    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#fasilitas-flters li');
    const fasilitasItems = document.querySelectorAll('.fasilitas-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove the 'filter-active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        // Add the 'filter-active' class to the clicked button
        this.classList.add('filter-active');

        const filterValue = this.getAttribute('data-filter');

        // Show or hide items based on the clicked button
        fasilitasItems.forEach(item => {
          if (filterValue === '*' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
})();
