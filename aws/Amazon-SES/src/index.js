// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
//  or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.


// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function
var subject = 'Hello' ;
var bodyText = 'Hello! \n'
    + 'Here is your link:  \n'
    + 'https://youtu.be/dQw4w9WgXcQ';

var params = {

    Source: 'robm266@alexamailbox.com',
    Destination: { ToAddresses: ['robm266@alexamailbox.com'] },
    Message: {
        Subject: { Data: subject },
        Body: { Text: { Data: bodyText } }
    },

};


// 2. Skill Code =======================================================================================================


var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.appId = 'amzn1.echo-sdk-ams.app.1234';
    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },

    'MyIntent': function () {

        sendMessage(params, callback=>{
            console.log('sending message to ' + params.Destination.ToAddresses.toString() + ', status: ' );
            var say = 'sent the msg';

            this.emit(':ask', say, 'try again');
        });

    }
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function sendMessage(params, callback) {

    var AWS = require('aws-sdk');
    // AWS.config.loadFromPath('./awsconfig.json');

    var SES = new AWS.SES();


    console.log('sending message');

    SES.sendEmail(params, function(err, data){

        if (err) console.log(err, err.stack);

        callback('message sent');

    });

}
