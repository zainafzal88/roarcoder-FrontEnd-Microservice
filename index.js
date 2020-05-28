$(function () {

    $.ajax({
        type: 'GET',
        url: 'https://dotnet.roarcoder.dev/api/userinfo/2',
        success: function(user){
            $('#fullName').text(user.firstName + " " + user.lastName)
            $('#occupation').text(user.occupation)
            $('#email').attr('href', 'mailto:' + user.email)
            $('#linkedIn').attr('href', user.url_LinkedIn)
            $('#github').attr('href', user.url_Github)
            $('#blogs').attr('href', user.url_Blogs)
        }
    })
})