// Change these settings to point this web app to your IOT Thing

// 1. Login to AWS IOT console, and select a Region at the top-right
//      such as Ireland (eu-west-1)  or N. Virginia (us-east-1)

const REGION         = 'eu-west-1';

// 2. Click on Registry, and add a new Thing, such as waterPump

// IOT Thing
const ThingName      = 'waterPump';
const SubscribeTopic = '$aws/things/' + ThingName + '/shadow/update/accepted';

// 3. Click on the Interact menu item, to reveal the API Endpoint:
const mqttEndpoint   = "a3npzlqeeeeeee.iot.eu-west-1.amazonaws.com";


// 4. Login to the AWS Cognito console
//  Click "Manage Federated Identities"
//  Click "Create new identity pool" such as MyPool
//  Name your pool and check the box to "Enable access to unauthenticated providers"
//  Once your pool is created, click on the "Sample Code" menu item
//  Within your code, find the RED string called Identity Pool ID and paste this value in the variable below

// Cognito Identity Pool ID
const IdentityPoolId = 'eu-west-1:c2489a27-b975-4444-8c6a-47200000000';

// 5. Go to the AWS IAM Console
//  Click Roles
//  Click on the new Unauth role, such as Cognito_MyPoolUnauth_Role
//  Click the "Attach Policy" button to add the appropriate permissions to your role
//   For the IOT webapp, choose AWSIoTDataAccess or define a specific set of permissions
//
