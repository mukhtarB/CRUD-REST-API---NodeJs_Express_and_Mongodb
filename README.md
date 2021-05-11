# CRUD REST API APP
## Zuri Internship: NodeJs - Task 47 (NodeJs_Express_and_Mongodb)
 Creating an application REST API to perform CRUD operations with NodeJs, Express and Mongodb.
 
 Application hosted on heroku @ https://crud-rest-api-app.herokuapp.com/

	### API Documentation:
	API Model Schema:
	The API operates on a database schema structured to take the following data as json format
	{
		"name": String,
		"email": String,
		"country": String
	}
	
	NB: all entries in the schema are required.
	
	
	API routes:
	All API routes exists at /api/
	
	- Creating a database entry:
		A mongodb document entry can be created via the POST verb - at /api/post-to-db route.
		API endpoint => https://crud-rest-api-app.herokuapp.com/api/post-to-db
	
	- Reading all database documents:
		All mongodb document entries can be fetched via the GET verb - at /api/get-from-db route.
		API endpoint => https://crud-rest-api-app.herokuapp.com/api/get-from-db
		
	- Reading a single database document:
		A single mongodb document entry can be fetched via the GET verb, using the _id parameter - at /api/get-from-db/:id route.
		The id paramater can be gotten when all entries in the database is queried.
		API endpoint => https://crud-rest-api-app.herokuapp.com/api/get-from-db/609ab70773a3ed49183f18c2
		
	- Updating a single database entry:
		A mongodb document entry can be updated via the PUT verb, using the _id paramater - at /api/update-db-entry/:id route.
		API endpoint => https://crud-rest-api-app.herokuapp.com/api/update-db-entry/609ab70773a3ed49183f18c2
		
	- Delete a Single database entry:
		A mongodb document entry can be deleted via the DELETE verb, using the unique _id paramater - at /api/del-single-db-entry/:id route.
		API endpoint => https://crud-rest-api-app.herokuapp.com/api/del-single-db-entry/609ae2c14638fa0015c148c9