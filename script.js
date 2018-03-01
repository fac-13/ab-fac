document.addEventListener("DOMContentLoaded", function() {
  // Write your code below only:
  const submit = document.getElementById("send");

  submit.addEventListener("click", alertMessageSubmit, false);

  // Don't delete below this comment. Wrtie your code above!
});

function alertMessageSubmit() {
  alert("leaving"); // will change to modal
}
