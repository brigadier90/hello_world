function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

jQuery(document).ready(function() {
  $('#api-form').submit(function() {
  $('#c-form-btn').css('display', 'none'); //hide button to disable duplicated calls

    $('.error-msg').hide();
    let api_url   		= $(this).attr('action'),
        next_step 		= $(this).data('next-step'),
        language        = getParameterByName('lang'),
    	is_last,
        error_page,
        success_page;

    if(next_step == undefined || next_step == "") {
  	  	error_page   = $(this).data('error');
      	success_page = $(this).data('success');
    	is_last      = true;
    } else
     	is_last = false;

    $.ajax({
    	url: api_url,
      	type: "POST",
      	data: $(this).serialize(),
      	success: function(response) {
          	if(is_last) {
            	next_step = (response.Success ? success_page : error_page);

            	if (response.Success) {
                    if (language)
                        next_step += '?lang=' + language;
                    window.location = next_step;
                } else {
					// registration unsucessful - show registration button again
					$('#c-form-btn').css('display', 'block');

            	     var message = response.Message;
                    //display message above the form

                    var displayMessage = "Registration Failed: " + message;

                    console.log(displayMessage);
                    $('#registrationMessage').html(displayMessage);
                    $('#registrationMessage').css('display', 'block');
                }
            } else {
              if(!response.Success) {
                $('.error-msg').show();alert(response.Message);
              } else {
                if(language)
                  next_step += '?lang=' + language;
                window.location = next_step;
              }
           }
        }
    });
    return false;
  });
});