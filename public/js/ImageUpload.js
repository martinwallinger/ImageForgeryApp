window.addEventListener('load', function() {
    $('#myImg').hide()
    $('#myImgCaption').hide()
    $('.lds-spinner').hide()
  document.getElementById('img').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          $('#myImg').show()
          $('#myImgCaption').show()
          img.onload = () => {
              URL.revokeObjectURL(img.src);  
          }

          img.src = URL.createObjectURL(this.files[0]); 
      }
  });
});

function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
}

//Ajax Submit Form, just to stay on the same page
$(document).ready(function () {
    $("#outputArea").hide();
    $('#submitImage').click(function (event) {
        event.preventDefault();
        $('.lds-spinner').show()

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
                $('.lds-spinner').hide()
                $('#ELAImage').attr('src', './images/ela_image.png');
                $('#outputText').text(data);
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

