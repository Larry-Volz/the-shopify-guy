$("#wf-form-Contact-Form").on('submit',function(event) {
    var recaptcha = $("#g-recaptcha-response").val();
    if(recaptcha===""){
      event.preventDefault();
      alert("Please reassure me that you are not a robot.")
    }
  });