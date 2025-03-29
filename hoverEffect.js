// Select all images or elements that need hover-like functionality
const images = document.querySelectorAll('.image-container');

images.forEach((image) => {
  let isHovered = false;

  // Add touch event listener
  image.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior like scrolling

    if (!isHovered) {
      // Simulate hover effect on first touch
      image.classList.add('hover');
      isHovered = true;
    } else {
      // Trigger primary action on second touch
      image.classList.remove('hover');
      isHovered = false;

      // Perform primary action (e.g., navigate to a link or open a project)
      const button = image.querySelector('.view-project-button');
      if (button) {
        button.click(); // Simulate button click
      }
    }
  });

  // Optional: Reset hover state on touchend or touchcancel
  image.addEventListener('touchend', () => {
    setTimeout(() => {
      isHovered = false;
    }, 300); // Reset after a short delay to prevent accidental double taps
  });
});
