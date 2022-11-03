window.addEventListener('load', function() {
  document.getElementById('img').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');

          //invoke python script with img
          
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});