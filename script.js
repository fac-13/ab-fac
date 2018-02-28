document.addEventListener("DOMContentLoaded", function() {
  // Write your code below only:
  const submit = document.getElementById("send");
  function alertSent() {
    submit.style.display = "none";
  }

  submit.addEventListener("click", alertSent, false);

  // Don't delete below this comment. Wrtie your code above!
});
