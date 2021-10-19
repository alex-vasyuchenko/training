function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#subscribe-form").on("submit", function(){
    const email = $("#email").val();
    const valid = isEmail(email);
    
    if (!valid) {
        $("#email").addClass('email-error');
        $(".email-error-text").show();
    }

    return valid;
  })