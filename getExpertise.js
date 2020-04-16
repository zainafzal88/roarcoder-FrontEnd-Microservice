$(function () {

    $.ajax({
        type: 'GET',
        url: "https://pr5hlbxnyh.execute-api.ap-southeast-2.amazonaws.com/Prod/getexpertise/1",
        crossDomain: true,
        dataType: "json",
        success: function (item) {

            //Design section
            $('#title1').text(item[1].title)
            $('#image1').attr('src', item[1].image1)
            $('#image2').attr('src', item[1].image2)
            $('#image3').attr('src', item[1].image3)
            $('#summary1').text(item[1].summary)

            //Code section
            $('#title2').text(item[0].title)
            $('#title2Image1').attr('src', item[0].image1)
            $('#title2Image2').attr('src', item[0].image2)
            $('#title2Image3').attr('src', item[0].image3)
            $('#summary2').text(item[1].summary)

            //Tools section
            $('#title3').text(item[2].title)
            $('#title3Image1').attr('src', item[2].image1)
            $('#title3Image2').attr('src', item[2].image2)
            $('#title3Image3').attr('src', item[2].image3)
            $('#summary3').text(item[2].summary)

        }
    });
});