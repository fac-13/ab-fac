document.addEventListener("DOMContentLoaded", function () {
  // Write your code below only:
  // global variables 
  var modal = document.querySelector("#modal");
  var overlay = document.querySelector("#overlay");
  var previouslyFocusedEl;

  const submit = document.querySelector("#submit");
  const send = document.querySelector("#send");

  send.addEventListener("click", function() {
    event.preventDefault();
    alertMessageSubmit();
  });
  
});

function alertMessageSubmit() {
  previouslyFocusedEl = document.activeElement;

  modal.style.display = "block";
  overlay.style.display = "block";

  var focusableElsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, tabindex:not([tabindex="-1"])';
  var focusableEls = modal.querySelectorAll(focusableElsString);

  var Onlyfocusable = focusableEls[0];

  Onlyfocusable.focus();

  modal.addEventListener("keydown", trapFocus);

  function trapFocus(e) {

    if (e.keyCode == 9) {
      if (e.shiftKey) {
        if (document.activeElement === Onlyfocusable) {
          event.preventDefault();
          Onlyfocusable.focus();
        }
      } else {
        if (document.activeElement === Onlyfocusable) {
          event.preventDefault();
          Onlyfocusable.focus();
        }
      }
    }

    if (e.keyCode == 27) closeModal();
  }

}
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";

  previouslyFocusedEl.focus();
}