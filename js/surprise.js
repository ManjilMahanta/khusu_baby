const noBtn = document.getElementById("noBtn");
const responseText = document.getElementById("responseText");

let escaped = false;

// YES button action
function sayYes() {
  responseText.textContent =
    "Hehe 😌 I knew it. Talking to you makes my day better too 💖";

  setTimeout(() => {
    window.location.href = "final.html";
  }, 1500); // 1.5 sec pause for emotions
}


// NO button bubble escape
noBtn.addEventListener("click", () => {
  if (escaped) return;
  escaped = true;

  // Turn into bubble
  noBtn.classList.add("bubble");

  // Random screen position
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.textContent = "Nope 😜";

  // Disable clicking forever
  noBtn.style.pointerEvents = "none";
});
