# README

# Description of Park Search App

Park Search App allows users to search parks and facilities located in the USA using activity-filter. Also, users can keep their history of trips.

## Installation
In the repository of this app, copy information about this repository in **Code** section.
In your terminal, type *git clone* and paste what you have copied from GitHub, push Enter.

To get set up, run:
### `$ bundle install`
### `$ rails db:create db:migrate db:seed`
### `$ npm install --prefix client`  


To start the server, type in your terminal: 
### `$ rails s`
 
This will run your server on port
[http://localhost:3000](http://localhost:3000).

To start working with database in your terminal:
### `$ rails c`

To run the app in the development mode:
### `$ npm start --prefix client`

It will run on port 3000:
[http://localhost:4000](http://localhost:4000) 

## APIKey
To work with the app, you have to get APIKey at https://ridb.recreation.gov/landing. After signing up, you will find their free APIKey in your profile. Copy the APIKey and go to db/seeds.rb in the app. There find next two lines and paste in your APIKEY:
- to upload data in facility_copies table:
response = RestClient.get "https://ridb.recreation.gov/api/v1/facilities?limit=#{limit}&offset=#{offset}", headers={apikey: 'PASTE_YOUR_APIKEY_HERE'} 
- to upload data in activities table:
response = RestClient.get "https://ridb.recreation.gov/api/v1/activities?", headers={apikey: 'PASTE_YOUR_APIKEY_HERE'}

When seeding is done, you can delete next working files that are not necessary anymore: 
- in controllers folder delete facility_copies_controller.rb;
- in models folder delete facility_copy.rb;
- in serializers folder delete facility_copy_serializer.rb.

## API database 
The database has five tables: users, trips, facility, activities, and activity_facilities. Between user and trip, there is one-to-many relationship: a user has many trips, and trip has one user.

Between users and facilities tables, there is many-to-many relationship: a user has visited many facilities, and one facility might have been visited by other users. This relationship is established in a join table trips with foreign keys - user_id and facility_id. 

Between activities and facilities tables, there is many-to-many relationship: several facilities might have the same activity, and one facility might have several activities. This relationship is established in a join table activity_facilities with foreign keys - activity_id and facility_id. 

# How to use?
First, log in or sign up.

On the first page called **PARK SEARCH** filter parks by choosing one activity you are interested in. The result of the search will be on the page. Each facility shows **All activities** it provides on the place. Also, facility has a short description. To get full description, push **Read more**. 

In order to **add** a new trip, push **Add trip**, then fill out the form. Such fields as review, my comment, visited at are necessary.

To **delete** a trip, push **X** in the right upper corner of the trip card.

To **update** a trip, push **Update** in the trip card. 


## Routing using Rails on Ruby
This API has next routes:
  - post '/login'
  - delete '/logout'

  - get '/me'
  - post '/signup'

  - post '/trips'
  - delete '/trips/:id'
  - patch '/trips/:id'
  - get '/users/trips'

  - get '/activities'
  - get '/activity_facilities'
  - get '/facilities'

Working with this routes,  you request facilities, activities, user, and user's trips from the database. Also, you add, delete, and update new trips.

# License
[MIT](https://choosealicense.com/licenses/mit/)
