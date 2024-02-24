document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    var petName = document.getElementById("petName").value;
    var needs = document.getElementById("needs").value;
    var date = document.getElementById("date").value;
  
    // Send form data via email (This is just a placeholder)
    var emailContent = "Pet Name(s): " + petName + "\nNeeds: " + needs + "\nDate: " + date;
    alert("Form submitted!\n\n" + emailContent);
  });
