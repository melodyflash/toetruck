document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form data
  var petName = document.getElementById("petName").value;
  var needs = document.getElementById("needs").value;
  var date = document.getElementById("date").value;

  // Construct the data to be sent
  var formData = new FormData();
  formData.append('petName', petName);
  formData.append('needs', needs);
  formData.append('date', date);

  // Send the form data to a PHP script using fetch
  fetch('process_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(data => {
    alert(data); // Show the response from the server
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
