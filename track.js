const soldier = document.getElementById('soldier');
    let mouseX = 0, mouseY = 0; // track cursor pos
    let soldierX = 0, soldierY = 0; // track soldier pos
    let lastX = 0; // store last mouse X pos

    // update cursor position
    document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX + 10; // offset
      mouseY = event.pageY + 10;

      // flip soldier
      if (event.pageX < lastX) {
        soldier.style.transform = "scaleX(-1)"; // flip
      } else {
        soldier.style.transform = "scaleX(1)";
      }

      // update lastX
      lastX = event.pageX;
    });

    // slide the soldier over to the cursor
    function animateSoldier() {
      // soldier new pos (delay)
      soldierX += (mouseX - soldierX) * 0.005;
      soldierY += (mouseY - soldierY) * 0.005;

      // apply pos to the soldier GIF
      soldier.style.left = `${soldierX}px`;
      soldier.style.top = `${soldierY}px`;

      // keep updating pos
      requestAnimationFrame(animateSoldier);
    }

    // start animation
    animateSoldier();