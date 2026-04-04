// Map hotspot interactivity
const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');
const tooltipName = document.getElementById('tooltip-name');

hotspots.forEach(spot => {
  spot.addEventListener('mouseenter', (e) => {
    const name = spot.dataset.name;
    tooltipName.textContent = name;
    tooltip.classList.remove('hidden');
  });

  spot.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + 'px';
  });

  spot.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });

  spot.addEventListener('click', () => {
    const page = spot.dataset.page;
    window.location.href = page;
  });
});
