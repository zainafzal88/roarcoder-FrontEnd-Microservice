$(function () {

    $.ajax({
        type: 'GET',
        url: "https://pr5hlbxnyh.execute-api.ap-southeast-2.amazonaws.com/Prod/getexpertise/e713ed13-de9d-468a-8990-bbd3ad540274",
        crossDomain: true,
        dataType: "json",
        success: function (items) {

            const expertiseDiv = document.getElementById('expertise');

            expertiseDiv.innerHTML += '<div class="tech">' +
                '<h2 id="title">' + items[0].title + '</h2>' +
                '<img id="image1" width="63" height="63" src="' + items[0].image1 + '"/>' +
                '<img id="image2" width="63" height="63" src="' + items[0].image2 + '"/>' +
                '<img id="image3" width="63" height="63" src="' + items[0].image3 + '"/>' +
                '<p id="summary">' + items[0].summary + '</p>'
            '</div>';
        }
    });
});

$(function () {

    $.ajax({
        type: 'GET',
        url: "https://pr5hlbxnyh.execute-api.ap-southeast-2.amazonaws.com/Prod/getexpertise/4a6dbde5-b845-4873-926d-e164549483e2",
        crossDomain: true,
        dataType: "json",
        success: function (items) {

            const expertiseDiv = document.getElementById('expertise');

            expertiseDiv.innerHTML += '<div class="tech">' +
                '<h2 id="title">' + items[0].title + '</h2>' +
                '<img id="image1" width="63" height="63" src="' + items[0].image1 + '"/>' +
                '<img id="image2" width="63" height="63" src="' + items[0].image2 + '"/>' +
                '<img id="image3" width="63" height="63" src="' + items[0].image3 + '"/>' +
                '<p id="summary">' + items[0].summary + '</p>'
            '</div>';
        }
    });
});

$(function () {

    $.ajax({
        type: 'GET',
        url: "https://pr5hlbxnyh.execute-api.ap-southeast-2.amazonaws.com/Prod/getexpertise/5888c7df-5697-42c6-a607-460655475cb9",
        crossDomain: true,
        dataType: "json",
        success: function (items) {

            const expertiseDiv = document.getElementById('expertise');

            expertiseDiv.innerHTML += '<div class="tech">' +
                '<h2 id="title">' + items[0].title + '</h2>' +
                '<img id="image1" width="63" height="63" src="' + items[0].image1 + '"/>' +
                '<img id="image2" width="63" height="63" src="' + items[0].image2 + '"/>' +
                '<img id="image3" width="63" height="63" src="' + items[0].image3 + '"/>' +
                '<p id="summary">' + items[0].summary + '</p>'
            '</div>';
        }
    });
});