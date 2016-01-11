
This web service project is for develop purposes.  It emulates the actual web service you will use to upload and receive images from the AI system.  

You run it locally as follows:
1.  Install 'nodejs' via brew.
2.  Clone the github repo to a local directory.
3.  Open a terminal command line and cd into the 'webservice' directory.
4.  Run the web server as follows:  node app.js

Now you can test against the web server as follows:
1.  Open a terminal command line and cd into the webservice/test' directory.
2.  Simulate a login call as follows:  ./login.sh
 ( should get a return message saying login was ok and a session id. )
3.  Simulate a logout call as follows: ./logout.sh
 ( should get a return message saying logout was ok. )
4.  Simulate an upload call as follows:  ./upload.sh
 ( a valid respond will be a downloaded image called results.png )

Your app essentially needs to perform 2,3,4 above but as web service calls within the app.

Likely we will need to add small enhancements here and there, but this scaffolding should be useful as you develop locally.  I know the following we will need:

1.  Probably need a 'status' web service call so you can get the status of a possibly long running blend.

2.  Per #1 above, 'upload' should probably return a job id.

3.  We will need to limit the size of uploads, which means the web service will likely have to return error codes.  

So we'll need a list of error codes that the web service calls return.

4.  Possibly move everything to JSON, depending on app developer feedback.

5.  Move to certificate based / SSL / HTTPS eventually.

6.  Session timeout and related error codes.


Error Codes:

We'll need error codes for the following:
Invalid login
Session timed out
Invalid image
Image too big
Blend failed
