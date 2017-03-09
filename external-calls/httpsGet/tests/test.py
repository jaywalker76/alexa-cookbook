import json
import sys


sys.path.insert(0, '../src')


import index  ## the Lambda source code file at ../src/index.py

with open('events/alexa-start-session.json') as test_request:  ## the request JSON stored in a separate file
    request_json = json.load(test_request)
    # print request_json

myEvent = json.loads(json.dumps(request_json))
myContext = '{}'

# print("testing your Lambda Python function")

res = index.lambda_handler(myEvent, myContext)  ## execute the source code

print(res)
