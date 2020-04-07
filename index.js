$(function () {

    $.ajax({
        type: 'GET',
        url: 'https://w17sapv34a.execute-api.ap-southeast-2.amazonaws.com/Prod/getuser/1',
        success: function(user){
            $('#fullName').append(user.firstName + " " + user.lastName)
            $('#occupation').text(user.occupation)
            $('#email').attr('href', 'mailto:' + user.email)
            $('#linkedIn').attr('href', user.url_LinkedIn)
            $('#github').attr('href', user.url_Github)
        }
    })
})