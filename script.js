function generateRandomCat() {
    // Fetch a random cat image from an API
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(data => {
        const catImage = document.getElementById('cat-image');
        catImage.src = data.file;
      })
      .catch(error => console.log(error));
  }
  
  // Generate a new cat image every 5 seconds
  setInterval(generateRandomCat, 5000);
  