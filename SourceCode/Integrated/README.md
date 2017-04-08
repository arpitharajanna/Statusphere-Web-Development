# CEN5016-Statusphere
All code associated with Statusphere Project; other documentation can be stored here as well.

*Commit early and often*

How to start the server: (make sure you install node and mongodb)

1. npm install (this will install all required node modules)

2. Start mongodb server	
	* mongod --dbpath <path to data folder>
	
3. start node server
	* npm start
	
4. go to http://localhost:3000/ to verify everything is working


Miscellaneous:

Applicant api:

http://localhost:3000/api/applicant    will give list of all applicants
http://localhost:3000/api/applicant/specificusername	will give details of that specific user

To go post, update and delete, I use a chrome extension [https://chrome.google.com/webstore/detail/resteasy/nojelkgnnpdmhpankkiikipkmhgafoch?hl=en-US]

