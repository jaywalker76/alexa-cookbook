#### Ingredients
## Amazon SES - Simple Email Service <a id="title"></a>


#### Instructions for deploying this sample skill

You will need to grant SES permissions via IAM;
1. From the AWS console, click on IAM
1. Locate and click on the role you use with your Lambda functions, such as "lambda_basic_execution"
1. Click the "Attach Policy" button
1. For a quick demo, filter on "ses" and attach the AmazonSESFullAccess policy.
1. For a production scenario, choose a more fine-grained policy granting access to certain resources.
 *    Review http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
1. SES email recipients must first respond to a verification email you send, before receiving further emails from SES.
  * Review
    * https://console.aws.amazon.com/ses/home?verified-senders-email
    * http://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html
1. Modify the source and destination email addresses, and the body text.



#### Add IAM Role Permissions
Before testing your skill, you will need to add permissions to your IAM Role to allow your Lambda function to call to SES.  See the [IAM Policies](../IAM_POLICIES.md) guide and add the  **```AmazonSESFullAccess```** policy.


 * [Part 2 - Create the skill](./PAGE2.md#title)


<hr />
 *You can learn more about SES from the [Getting Started with SES](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/getting-started.html) documentation.*

Back to the [Home Page](../../README.md#title)

