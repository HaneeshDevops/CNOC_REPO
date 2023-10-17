// Function to handle user registration
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the email, password, and username from the form
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;
  const username = document.getElementById('newUsername').value;

  // Create a new user with Firebase authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log('User registered:', user);

      // Optionally, you can update the user's profile with their username
      user.updateProfile({
        displayName: username
      }).then(function() {
        console.log('User profile updated with username');
      }).catch(function(error) {
        console.error('Error updating user profile:', error);
      });

      // Add code for successful registration (e.g., redirect or show success message)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Error:', errorCode, errorMessage);
      // Add code to handle errors (e.g., show error message to user)
    });
});


// Initialize Owl Carousel for client section
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

// Google Map function
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
