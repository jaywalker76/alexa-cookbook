// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
//  or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.


// 1. Text strings =====================================================================================================
//    Modify these strings and messages to change the behavior of your Lambda function

var myRequest = ['apples','oranges','strawberries'];  // Array of items

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

        sayArray(myRequest,  'and', myResult => {
                console.log("sent     : " + myRequest);
                console.log("received : " + myResult);

                this.emit(':tell', 'the list contains ' + myResult);

            }
        );

    }
};


//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================


var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html
// try other APIs such as the current bitcoin price : https://btc-e.com/api/2/btc_usd/ticker  returns ticker.last

function sayArray(myData, andor, callback) {
    // the first argument is an array [] of items
    // the second argument is the list penultimate word; and/or/nor etc.

    var listString = '';

    if (myData.length == 1) {
        listString = myData[0];
    } else {
        for (var i = 0; i < myData.length; i++) {
            if (i < myData.length - 2) {
                listString = listString + myData[i] + ', ';
                if (i = myData.length - 2) {
                    listString = listString + myData[i] + ', ' + andor + ' ';
                }

            } else {
                listString = listString + myData[i];
            }

        }

    }


    callback(listString);
}


