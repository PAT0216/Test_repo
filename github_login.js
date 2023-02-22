$('#github-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('4a215ecc6323ebe45d39');
    // Use popup for OAuth
    OAuth.popup('github').then(github => {
      console.log(github);
      // Retrieves user data from oauth provider
      console.log(github.me());
    });
  })