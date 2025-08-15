 
 const toggleBtn = document.getElementById ('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
    overlay.classList.toggle('active');
  });

  // Close sidebar when clicking outside
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('visible');
    overlay.classList.remove('active');
  });

