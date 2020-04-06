const request = require('request')

request('https://w17sapv34a.execute-api.ap-southeast-2.amazonaws.com/Prod/getuser/1', function (error, response, body){
    if (!error && response.statusCode == 200) {
        console.log(body)
      }
})