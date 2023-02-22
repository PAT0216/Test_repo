$('#github-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('gZeK0rjdjMpH70JACRM_kaKLUIc');
    // Use popup for OAuth
    OAuth.popup('github').then(github => {
      console.log(github);
      // Retrieves user data from oauth provider
      console.log(github.me());
    });
  })