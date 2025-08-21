document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.parentElement;
    // Close others if you want only one open at a time:
    document.querySelectorAll('.faq-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
  });
});