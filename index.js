const emailInput = document.querySelector('#email');
const tickIcon = document.querySelector('.tick');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function updateApprovalStatus() {
  const isValidEmail = emailPattern.test(emailInput.value);
  emailInput.classList.toggle('approve', isValidEmail);
  tickIcon.classList.toggle('approve', isValidEmail);
}

emailInput.addEventListener('input', updateApprovalStatus);