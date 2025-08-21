document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("thankYou").style.display = "block";
  this.reset(); // clear form after submit
});