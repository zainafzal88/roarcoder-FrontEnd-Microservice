$(function () {

    $.ajax({
        type: 'GET',
        url: 'https://w17sapv34a.execute-api.ap-southeast-2.amazonaws.com/Prod/getuser/1',
        success: function(user){
            $('#fullName').append(user.firstName + " " + user.lastName)
        }
    })
})