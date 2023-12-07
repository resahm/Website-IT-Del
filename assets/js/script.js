document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('#navbar ul li a.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
          section.style.display = 'none';
        });

        // Show the target section
        targetSection.style.display = 'block';
      }
    });
  });
});
