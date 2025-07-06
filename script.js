document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return;
  }

  console.log("Form Submitted:", { name, email, message });
  alert("Thank you, " + name + "! Your message has been sent.");

  document.getElementById("contactForm").reset();
});