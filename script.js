// MOBILE MENU

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


// LOGIN

function openLogin() {
  closeModals();
  document.getElementById("loginModal").style.display = "flex";
}


// REGISTER

function openRegister() {
  closeModals();
  document.getElementById("registerModal").style.display = "flex";
}


// CLOSE MODALS

function closeModals() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("registerModal").style.display = "none";
  document.getElementById("noticeModal").style.display = "none";
}


// LOGIN BUTTON

function loginUser() {
  alert("Login system is currently in demo mode.");
}


// REGISTER BUTTON

function registerUser() {
  alert("Registration successful! This is a demo website.");
}


// NOTICE

function showNotice(title) {
  document.getElementById("noticeTitle").innerText = title;
  document.getElementById("noticeModal").style.display = "flex";
}


// CONTACT FORM

function sendMessage(event) {
  event.preventDefault();

  alert("Thank you! Your message has been submitted.");

  event.target.reset();
}


// CLOSE WHEN CLICKING OUTSIDE

window.onclick = function(event) {

  if (event.target.classList.contains("modal")) {
    closeModals();
  }

};
