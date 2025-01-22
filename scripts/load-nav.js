// Use fetch to load navigation
fetch('navigation.html') // Fetch the navigation HTML
  .then((response) => {
    if (!response.ok) {
      // Check if the response is successful
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // Parse the response as plain text
  })
  .then((data) => {
    document.getElementById('nav-placeholder').innerHTML = data; // Insert into the placeholder

    navSlide();
  })
  .catch((error) => {
    console.error('Error loading navigation:', error); // Log any errors
  });
