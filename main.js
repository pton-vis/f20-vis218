document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.querySelector('.tooltip');

  document.querySelectorAll('.images__list__item img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
      tooltip.classList.add('active');
      tooltip.innerText = img.alt;
    })

    img.addEventListener('mouseleave', () => {
      tooltip.classList.remove('active');
    })
  });

  document.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.clientX + 10 + 'px';
    tooltip.style.top = e.clientY + 10 + 'px';
  })
});