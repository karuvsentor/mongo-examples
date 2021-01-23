//Employees

// List all the employees.
db.employees.find().pretty()
// Find the employee with whose name is Steve.
db.employees.find({"name": "Steve"}).pretty()
// Find all employees whose age is greater than 30.
db.employees.find({"age":{ $gt: 30 }}).pretty()
// Find the employee whose extension is 2143.
db.employees.find({"phone.ext": "2143" }).pretty()
// Find all employees that are over 30.
db.employees.find({"age":{$gte: 30 }}).pretty()
// Find all employees that are less than or equal to 30.
db.employees.find({"age":{$lte: 30 }}).pretty()
// Find all the employees whose favorite food is pizza.
db.employees.find({"favorites.food" : "pizza"}).pretty()
// Change Willy’s personal phone number to "93-123-45-67".
db.employees.updateOne({ name: "Willy" }, { $set: { "phone.personal": "93-123-45-67" } })
db.employees.find({"name": "Willy"}).pretty()
// Change Bob’s privilege to normal user.---
db.employees.updateOne({ "name": "Bob" }, { $set: { "privileges": "user" } })
db.employees.find({"name": "Bob"}).pretty()
// Find all employees whose favorite artist is equal to Picasso.
db.employees.find({ "favorites.artist":"Picasso"}).pretty()
// Delete the user John.
db.employees.deleteOne({"name":"John"})

//Restaurants

// List all the restaurants.

// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.

// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.

// Find the restaurants which are in the borough Bronx.

// Find the restaurants which are in the borough Brooklyn with Steak cuisine.

// Find the restaurants which have achieved a score bigger than 90.

// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.

// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.

// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)

// Update Morris Park Bake Shop address street to Calle falsa 123.

// Delete all the restaurants with address zipcode 10466.


//Companies

// Find all the companies that include 'Facebook' on the name field.

// Let's do it one more together:

// Find all the companies which category_code is 'web'. Retrive only their name field:

// Find all the companies named "Twitter", and retrieve only their name, category_code and founded_year fields.

// Find all the companies who have web as their category_code, but limit the search to 50 companies.

// Find all the companies which category_code is 'enterprise' and have been founded in 2005. Retrieve only the name, category_code and founded_year fields.

// Find all the companies that have been founded on the 2000 or have 20 employees. Sort them descendingly by their number_of_employees.

// Find all the companies that do not include web nor social on their category_code. Limit the search to 20 documents and retrieve only their name and category_code.

// Find all the companies that were not founded on 'June'. Skip the first 50 results and retrieve only the founded_month and name fields.

// Find all the companies that have 50 employees, but do not correspond to the 'web' category_code.

// Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.

// Find all the companies which the price_amount of the acquisition was 40.000.000. Sort them by name.

// Find all the companies that have been acquired on January of 2014. Retrieve only the acquisition and name fields.

