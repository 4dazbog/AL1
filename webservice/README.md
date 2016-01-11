
This web service project is for develop purposes.  It emulates the actual web service you will use to upload and receive images from the AI system.  

You run it locally as follows:
1.  Install 'nodejs' via brew.
2.  Clone the github repo to a local directory.
3.  Open a terminal command line and cd into the 'webservice' directory.
4.  Run the web server as follows:  node app.js

Now you can test against the web server as follows:
1.  Open a terminal command line and cd into the webservice/test' directory.
2.  Simulate a login call as follows:  ./login.sh
 ( should get a return message saying login was ok. )
3.  Simulate a logout call as follows: ./logout.sh
 ( should get a return message saying logout was ok. )
4.  Simulate an upload call as follows:  ./upload.sh
 ( a valid respond will be a download image called results.png )

Your app essentially needs to perform 2,3,4 above but as web service calls within the app.

Likely we will need to add small enhancements here and there, but this scaffolding should be useful as you develop locally.
