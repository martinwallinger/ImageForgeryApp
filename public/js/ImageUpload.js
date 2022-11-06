window.addEventListener('load', function() {
  document.getElementById('img').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');

          //invoke python script with img
          
          img.onload = () => {
              URL.revokeObjectURL(img.src);  
          }

          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
});