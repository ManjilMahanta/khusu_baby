function goNext() {
  window.location.href = "surprise.html";
}

function handleYes() {
  // FAKE ANGER EFFECT
  document.body.classList.add("angry");

  setTimeout(() => {
    document.body.classList.remove("angry");

    const popup = document.getElementById("popup");
    const countdownEl = document.getElementById("countdown");

    popup.classList.remove("hidden");

    let timeLeft = 10;
    countdownEl.textContent = timeLeft;

    const timer = setInterval(() => {
      timeLeft--;
      countdownEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        window.location.href = "surprise.html";
      }
    }, 1000);

  }, 1200); // anger duration 😡
}

