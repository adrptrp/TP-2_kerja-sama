// Efek interaktif: Filter produk berdasarkan input search

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.header__search');
  const cardSections = [
    document.querySelector('.featured .cards'),
    document.querySelector('.arrivals .cards')
  ];

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      cardSections.forEach(section => {
        if (!section) return;
        const cards = section.querySelectorAll('.card');
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(query)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
