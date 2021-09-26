// const e = require("express");

$('document').ready(function () {
    // alert();
    $('#register-form-submit').on('click', function (e) {
        e.preventDefault();
        var formData = $('#register-form').serialize();
        console.log(formData);
        $.ajax({
            type: "post",
            data: formData,
            url: '/register',
            success: function (data) {
                // console.log(data);
                $("#register-from-error").text(data.regsiterMsg);
            }
        })
    })

    // Login form submit throught AJAX
    $('#login-form-submit').on('click', function (e) {
        e.preventDefault();
        var formData = $('[action="/login"]').serialize();
        console.log(formData);
        $.ajax({
            type: "post",
            data: formData,
            url: '/login',
            success: function (data) {
                console.log(data);
                $('#error-text').text(data.msg);
            }
        })
    })
    // Login form submit throught AJAX
    $('#ajax-form-submit').on('click', function (e) {
        e.preventDefault();
        var objForm = document.getElementById('ajax-profile-form');
        var formData = new FormData(objForm);
        console.log(formData);
        $.ajax({
            type: "post",
            data: formData,
            url: '/profile',
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                // $('#error-text').text(data.msg);
            }
        })
    })
})