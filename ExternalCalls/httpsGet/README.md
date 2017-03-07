#### Ingredients
## httpsGet <a id="title"></a>
<hr />


#### What you will learn

AWS Lambda functions running Node.JS can make calls over the Internet to APIs and services using the ```https``` module included in Javascript.

For example, your function can define the following module:

```var https = require('https');```

You can make a GET call to a service such as:

https://cp6gckjt97.execute-api.us-east-1.amazonaws.com/prod/stateresource?usstate=New%20Jersey

You will need to break apart the web service URL into components as shown:


```
        var options = {
            host: 'cp6gckjt97.execute-api.us-east-1.amazonaws.com',
            port: 443,
            path: '/prod/stateresource?usstate=' + encodeURIComponent('New Jersey'),
            method: 'GET'
        };
```

This particular service returns a JSON object.  Your code will need to parse and process the response data from your web service.

Sample response:
```
{"Name":"New Jersey","population":9000000,"rank":11}
```


Read the full documentation on [Node.JS https](https://nodejs.org/api/https.html#https_https_request_options_callback) including how to add options to define x509 certificate keys, if required.


#### Instructions for deploying this sample skill

 * [Part 2 - Create the skill](./PAGE2.md#title)


<hr />
Back to the [Home Page](../../README.md#title)



