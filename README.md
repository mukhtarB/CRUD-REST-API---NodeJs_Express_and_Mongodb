# CRUD REST API APP
## Zuri Internship: NodeJs - Task 47 (NodeJs_Express_and_Mongodb)
 Creating an application REST API to perform CRUD operations with NodeJs, Express and Mongodb.
 
 Application hosted on heroku @ https://crud-rest-api-app.herokuapp.com/

### API Documentation:
 API Model Schema:
 The API operates on a database schema structured to take the following data as json format
 	```javascript
   {
 		"name": String,
 		"email": String,
 		"country": String
 	}
   ```
 NB: all entries in the schema are required.


 API routes:
------
 All API routes exists at /api/..

 All routes requests return a statusCode, and a payload having a message and some data.
    Response:
    +On success:
      statusCode: 200 or 404
      payload => a success / info message & data i.e ({msg, data})
    
    +On error:
      statusCode: 500
      payload => an error message & error i.e ({msg, Err})

 Appropriate db entry id's should replace "(a valid id parameter)" where seen further in the documentation.
 DB Entry Id's can be gotten by querying the database for all it's entries.

 CRUD Operations:

 - Creating a database entry:
    API endpoint => https://crud-rest-api-app.herokuapp.com/api/post-to-db
  
  Accepts json data modelled after the schema through the post verb. & creates an entry with it. - at /api/post-to-db route.
  

 - Reading all database documents:
    API endpoint => https://crud-rest-api-app.herokuapp.com/api/get-from-db
  
  Fetches all mongodb document entires via the GET verb - at /api/get-from-db route.
  

 - Reading a single database document:
  API endpoint => https://crud-rest-api-app.herokuapp.com/api/get-from-db/(a valid id parameter)
  
  Fetches a single mongodb document entry via the GET verb, using the unique _id parameter - at /api/get-from-db/:id route.
  
	
 - Updating a single database entry:
  API endpoint => https://crud-rest-api-app.herokuapp.com/api/update-db-entry/(a valid id parameter)
  
  Accepts json data modelled after database schema & Updates mongodb document entry via the PUT verb, using the unique _id paramater - at /api/update-db-entry/:id route.
	

 - Delete a Single database entry:
  API endpoint => https://crud-rest-api-app.herokuapp.com/api/del-single-db-entry/(a valid id parameter)
  
  A mongodb document entry can be deleted via the DELETE verb, using the unique _id paramater - at /api/del-single-db-entry/:id route.
  
### Author:
  Abdulrazaq Mukhtar Bolaji (mukhtar.b_)
  
  
  
  
  
  
  
  
  
  
  
  
  
  