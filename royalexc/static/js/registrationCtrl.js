var app = app || {};

(app.registrationCtrl = function() {
    $(function() {


        jQuery(document).ready(function() {
            $('#api-form').submit(function() {
                app.register();
            });
        });

    });
}).call();

app.api_url = $(this).attr('action');
app.next_step = $(this).data('next-step');
app.is_last = "";
app.error_page = "";
app.success_page = "";

app.register = function() {

    $('#c-form-btn').css('display', 'none'); //hide button to disable duplicated calls
    $('.error-msg').hide();
    app.api_url = $(this).attr('action');
    app.next_step = $(this).data('next-step');
    app.language = app.getParameterByName('lang');
    app.is_last = "";
    app.error_page = "";
    app.success_page = "";

    if (app.next_step == undefined || app.next_step == "") {
        app.error_page = $(this).data('error');
        app.success_page = $(this).data('success');
        app.is_last = true;
    } else {
        app.is_last = false;
    }

    httpService.httpPOST(app.api_url, $(this).serialize(), app.handleRegistrationResponse);

    return false;
};

app.handleRegistrationResponse = function(response) {
    if (app.is_last) {
        app.next_step = (response.Success ? app.success_page : app.error_page);

        if (response.Success) {
            if (language)
                app.next_step += '?lang=' + app.language;
            window.location = app.next_step;
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
        if (!response.Success) {
            $('.error-msg').show();
            alert(response.Message);
        } else {
            if (app.language)
                app.next_step += '?lang=' + app.language;
            window.location = app.next_step;
        }
    }
};

app.getParameterByName = function(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};