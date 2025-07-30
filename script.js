document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const successBox = document.createElement("div");
    successBox.innerHTML = `
      <div style="
        font-size: 1.2rem;
        animation: popIn 0.6s ease-out forwards;
        background: #1e2a45;
        padding: 20px;
        border-radius: 10px;
        color: #00ffff;
        box-shadow: 0 0 20px #00ffff66;
        text-align: center;
        margin-top: 20px;">
         Thank you for contacting me!<br>I’ll get back to you soon. 
      </div>
    `;

    // Fade out the form
    form.style.transition = "opacity 0.5s ease";
    form.style.opacity = "0";

    // After fade out, hide and show success message
    setTimeout(() => {
      form.style.display = "none";
      form.parentElement.appendChild(successBox);
    }, 500);

    // Reset the form inputs
    form.reset();
  });
});

