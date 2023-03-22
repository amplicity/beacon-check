# beacon-check
Receive alerts when your ethereum validator is offline. It currently sends a notification to a slack webhook, but can easily be modified to send sms, email, etc.

## AWS Lambda / Serverless Install

1. Create a lambda function powered by Nodejs.
2. Upload the release zip to the lambda function
3. Configure a trigger (I recommend using 'EventBridge') to have the function check https://beaconcha.in/ every so often. IE `0/10 * ? * MON-SUN *` will trigger every 10 minutes.
4. Populate env variables:
`PUBLIC_KEY` - your validator's public key
`REQUEST_URL` - use `https://prater.beaconcha.in/api/v1/validator/`
`SLACK_WEBHOOK_URL` - your slack webhook url where notifications will be sent
`BEACONCHAIN_URL` - url to beaconchain to create link to your validator in balance decrease notifications, IE `https://prater.beaconcha.in/validator/`


That's it! You will be notified when your node is offline.
