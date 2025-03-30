// Add smooth scrolling behavior to anchor links
document.addEventListener('astro:page-load', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Offset to account for fixed header
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      history.pushState(null, null, targetId);
    });
  });
});
