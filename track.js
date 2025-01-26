const soldier = document.getElementById('soldier');
let mouseX = 0, mouseY = 0; // track cursor pos
let soldierX = 0, soldierY = 0; // track soldier pos
let lastX = 0; // store last mouse X pos

document.addEventListener('mousemove', (event) => {
  mouseX = event.pageX + 10; // offset
  mouseY = event.pageY + 10;

  // flip soldier only if moving towards the mouse
  if (mouseX < soldierX) {
    soldier.style.transform = "scaleX(-1)"; // look left
  } else {
    soldier.style.transform = "scaleX(1)"; // look right
  }
});


// slide the soldier over to the cursor
function animateSoldier() {
  // get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const soldierWidth = soldier.offsetWidth;
  const soldierHeight = soldier.offsetHeight;

  // calculate soldier's new position with a delay
  soldierX += (mouseX - soldierX) * 0.005;
  soldierY += (mouseY - soldierY) * 0.005;

  // prevent soldier from moving outside
  soldierX = Math.min(Math.max(soldierX, 0), viewportWidth - soldierWidth);
  soldierY = Math.min(Math.max(soldierY, 0), viewportHeight - soldierHeight);

  // apply position to the soldier GIF
  soldier.style.left = `${soldierX}px`;
  soldier.style.top = `${soldierY}px`;

  // keep updating position
  requestAnimationFrame(animateSoldier);
}

// start animation
animateSoldier();
