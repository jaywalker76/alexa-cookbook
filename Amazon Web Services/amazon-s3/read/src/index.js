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

        var pop = 0;
        var myRequest = 'Florida';

        var myParams = {
            Bucket: 'alexabucket12',  // replace with your own bucket name!
            Key: 'hello.txt'
        };

        S3read(myParams,  myResult => {
                console.log("sent     : " + JSON.stringify(myParams));
                console.log("received : " + myResult);

                this.emit(':tell', 'The S3 file says, ' + myResult );

            }
        );

    }
};

// END of Intent Handlers ---------------------------------------------------------------------
// Paste in any helper functions below --------------------------------------------------------


    S3read: function (params, callback) {
        // call AWS S3
        var AWS = require('aws-sdk');
        var s3 = new AWS.S3();


        s3.getObject(params, function(err, data) {
            if(err) { console.log(err, err.stack); }
            else {

                var fileText = data.Body.toString();  // this is the complete file contents

                callback(fileText);

            }
        });
    }

