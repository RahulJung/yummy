# Welcome To Yummy

Yummy is an online directory that allows users to search for local restaurant, bar and cafe.
_________________________
# HOME PAGE VIEW

![Uploading x.gif…]()

_________________________
# User Stories

* As a user, I want to be able to search for an address and get autocomplete suggestions
* As a user, I want to be able to click on the address and get a list of local restaurants
* As a user, I want to be able to see the location of the restaurants on the Google Maps
* As a user, I want to be able to click on the Markers and see the restauant's photo, name and ratings
* As a user, I want to be able to see which restaurants are open
* As a user, I want to be able to see all the user reviews/ratings of the restaurants
* As a user, I want to be able to add revews to the resturants
* As a user, I want to be able to click on a compass icon which will take me back to my current location on the Google Maps
_______________________

# Yet to Come
* As a user, I want to be able to signup/login to my profile
* As a user, I want to sort the resturants by ratings and distance
* As a restaurant owner, I want to be able to add my restaurant to the app and upload pictures
_______________________
# Tech Stack
Yummy uses a number of open source projects to work properly:

<table>
  <tr>
    <th>Front-End</th>
    <th>Back-End</th>
    <th>APIs</th>
  </tr>
  <tr>
    <td>React</td>
    <td>Node JS</td>
    <td>Google Map API</td>
    </tr>
  <tr>
    <td>React Hooks</td>
    <td>Express JS</td>
    <td>Google Places API</td>
  </tr>
  <tr>
    <td></td>
    <td>MySQL</td>
    <td></td>
  </tr>
</table>

_______________________
# Get Started
To run the app in your localhost, you will need to take the following steps:
- MySQL should be running on your machine
- Add user and password to config.js file in database folder
- You will need to register for a [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)

From terminal in the index folder:
```
$ npm install
$ npm run test
$ npm start
```
