
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('TO YOU FOR NOW QUEEN👑❤️').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

const container = document.querySelector('.unique-bubbles');

// Function to create a heart bubble
function createHeart() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.innerHTML = `
    <svg class="heart" viewBox="0 0 32 32">
      <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
    </svg>
  `;
  container.appendChild(bubble);
}

// Function to generate hearts continuously
function generateHearts() {
  setInterval(() => {
    createHeart();
  }, 200); // Adjust the interval (milliseconds) as needed
}

// Start generating hearts
generateHearts();
