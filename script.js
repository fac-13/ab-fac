document.addEventListener("DOMContentLoaded", function() {
  // global variables
  var modal = document.querySelector("#modal");
  var overlay = document.querySelector("#overlay");
  var previouslyFocusedEl;

  const submit = document.querySelector("#submit");
  const send = document.querySelector("#send");
  const close = document.querySelector("#close");

  send.addEventListener("click", function() {
    event.preventDefault();
    alertMessageSubmit();
  });

  overlay.addEventListener("click", closeModal);
  close.addEventListener("click", closeModal);
});

// OPENS CONTACT FORM SUBMISSION ALERT MODAL //
function alertMessageSubmit() {
  previouslyFocusedEl = document.activeElement;

  modal.style.display = "block";
  overlay.style.display = "block";

  var focusableElsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, tabindex:not([tabindex="-1"])';
  var focusableEls = modal.querySelectorAll(focusableElsString);

  var firstFocusable = focusableEls[0];
  var lastFocusable = focusableEls[1];

  firstFocusable.focus();

  modal.addEventListener("keydown", trapFocus);

  function trapFocus(e) {
    if (e.keyCode == 9) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
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
