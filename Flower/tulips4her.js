function generateRandomBoxShadow(n) {
    let boxShadow = '';
    for (let i = 0; i < n; i++) {
      boxShadow += `${getRandomValue(2000)}px ${getRandomValue(2000)}px #FFFFFF`;
      if (i < n - 1) {
        boxShadow += ', ';
      }
    }
    return boxShadow;
  }
  
  /* Get a random value up to a maximum */
  function getRandomValue(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  /* Assign generated box shadows to variables */
  var shadowsSmall = generateRandomBoxShadow(700);
  var shadowsMedium = generateRandomBoxShadow(200);
  var shadowsBig = generateRandomBoxShadow(100);

document.getElementById('stars').style.boxShadow = shadowsSmall;
document.getElementById('stars2').style.boxShadow = shadowsMedium;
document.getElementById('stars3').style.boxShadow = shadowsBig;

document.addEventListener("DOMContentLoaded", () => {
    const heartOverlay = document.getElementById("heartOverlay");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Set random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Add animation
        heart.style.animation = `fadeInOut ${Math.random() * 5 + 3}s ease-in-out infinite`;

        heartOverlay.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 10000); // Adjust time to match the animation duration
    }

    // Create hearts at intervals
    setInterval(createHeart, 500); // Adjust interval for frequency of new hearts
});

let flowerCount = 0;

document.addEventListener('click', function (event) {
  const maxFlowers = 20; // Set the maximum number of flowers allowed

  if (flowerCount < maxFlowers) {
    // Get the original flower
    const originalFlower = document.getElementById('originalFlower');

    // Clone the original flower
    const clone = originalFlower.cloneNode(true);

    // Remove the ID to avoid duplicate IDs in the document
    clone.removeAttribute('id');

    // Increment the flower count
    flowerCount++;

    // Set an offset for the clone
        // Set the position for the clone
        clone.style.left = `${event.clientX}px`; // Use clientX to get the X coordinate of the click event
        clone.style.top = `${event.clientY}px`; // Use clientY to get the Y coordinate of the click event

    // Append the clone after the original flower
    originalFlower.parentNode.insertBefore(clone, originalFlower.nextSibling);
  }
});