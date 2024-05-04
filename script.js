document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var userEmail = document.getElementById('userEmail').value;
  console.log('Password reset requested for:', userEmail);
  alert('If an account with that email or phone number exists, a password reset link will be sent.');
});