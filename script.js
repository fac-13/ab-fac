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

  // finding all the stuff in the modal that can be tabable
  var focusableElsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, tabindex:not([tabindex="-1"])';
  var focusableEls = modal.querySelectorAll(focusableElsString);

  //assigning focus to the first tabable item
  var firstFocusable = focusableEls[0];
  var lastFocusable = focusableEls[1];

  firstFocusable.focus();

  // create eventlistener that says whenever a key pressed call trap function
  modal.addEventListener("keydown", trapFocus);

  // defining trap function to say that if you press a key nothing happens - focus doesnt leave the modal
  function trapFocus(e) {
    if (e.keyCode == 9) {
      // if tab pressed
      if (e.shiftKey) {
        // if tab is pressed with shift
        if (document.activeElement === firstFocusable) {
          // if currently on first element
          event.preventDefault(); // then go to the last element
          lastFocusable.focus();
        }
      } else {
        // if tab pressed without shift
        if (document.activeElement === lastFocusable) {
          // and active element is the last element
          event.preventDefault(); // then send to the first tabable element in the modal (i.e. stops from escaping)
          firstFocusable.focus();
        }
      }
    }

    if (e.keyCode == 27) closeModal(); // if press esc then call close modal function
  }
}

// define closemodal function  - basically turn modal and overlay to display none and focus goes back to previous focus on the page
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";

  previouslyFocusedEl.focus();
}
