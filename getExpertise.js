$(function () {

    $.ajax({
        type: 'GET',
        url: "https://pr5hlbxnyh.execute-api.ap-southeast-2.amazonaws.com/Prod/getexpertise/1",
        crossDomain: true,
        dataType: "json",
        success: function (items) {

            const expertiseDiv = document.getElementById('expertise');

            //load area of expertise div dynamically based
            for (let i = 0; i <= items.length; i++) {

                expertiseDiv.innerHTML += '<div class="tech">' +
                    '<h2 id="title"' + [i + 1] + '>' + items[i].title + '</h2>' +
                    '<img id="image"' + [i + 1] + 'width="63" height="63" src="' + items[i].image1 + '"/>' +
                    '<img id="image"' + [i + 2] + 'width="63" height="63" src="' + items[i].image2 + '"/>' +
                    '<img id="image"' + [i + 3] + 'width="63" height="63" src="' + items[i].image3 + '"/>' +
                    '<p id="summary"' + [i + 1] + '>' + items[i].summary + '</p>'
                '</div>';
            }
        }
    });
});