window.addEventListener('load', function() {
  document.getElementById('img').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          
          img.onload = () => {
              URL.revokeObjectURL(img.src);  
          }

          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
});

//Ajax Submit Form, just to stay on the same page
$(document).ready(function () {
    $("#outputArea").hide();
    $('#submitImage').click(function (event) {
        event.preventDefault();

        var formData = new FormData($('#imageform')[0]);

        $("#submitImage").prop("disabled", true);

        $.ajax({
            enctype: "multipart/form-data",
            type: 'POST',
            url: '/upload',
            data: formData,
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            cache: false,
            timeout: 30000,
            success: function (data) {
                var output = data.responseText;
                $('#imageform').hide();
                $('#outputArea').show();
                $('#ELAImage').attr('src', './images/ela_image.png');
                $('#outputText').html(data);
                console.log("SUCCESS : ", data);
            },
            error: function (data) {
                $('#outputArea').show();
                $("#outputText").text(e.responseText);
                console.log("ERROR : ", e);
            }
        });
        $("#submitImage").prop("disabled", false);
    })
})

