const copyContainer = document.querySelector('.copy-container');
const copyText = document.querySelector('.copy-text');
const copyClone = document.querySelector('.copy-clone');

copyContainer.addEventListener('click', () => {
  // Create a clone of the copyText element
  const clone = copyText.cloneNode(true);
  
  // Set the text of the clone to be the same as the original
  clone.innerText = copyText.innerText;
  
  // Add the clone to the container
  copyContainer.appendChild(clone);
  
  // Animate the clone
  anime({
    targets: clone,
    opacity: [1, 0],
    translateY: ['-50%', '-150%'],
    scale: [1, 1.5],
    easing: 'easeOutExpo',
    duration: 1000,
    complete: () => {
      // Remove the clone once the animation is done
      copyContainer.removeChild(clone);
    }
  });
});
