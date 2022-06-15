<div align="center">

# [FairBnB](https://fairbnb-app.herokuapp.com/)

[![Website](https://img.shields.io/website?down_message=OFFLINE%20%3A%28&label=APP%20IS%20&logo=HEROKU&style=for-the-badge&up_message=ONLINE.%20CLICK%20HERE%21&url=https%3A%2F%2Ffairbnb-app.herokuapp.com%2F)](https://fairbnb-app.herokuapp.com/)
[![Project Wiki - Click Here!](https://img.shields.io/static/v1?label=Project+Wiki&message=Click+Here!&color=%23CFD8DC&style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/NawalJAhmed/fairbnb/wiki)

## Technologies

![JS Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/static/v1?label=&message=Sequelize&color=%232F406A&style=for-the-badge&logo=Sequelize&logoColor=%2303AFEF)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

</div>

<div align="center">

## About

<div>

<div align="justify">

FairBnB is an [AirBnB](https://www.airbnb.com/) inspired full-stack web application with dynamic features catered to people who want to list and rent affordable places. FairBnB lets users create listings and other users. Other users can review those listings. Try out the app as a Demo user by clicking on the [link](https://fairbnb-app.herokuapp.com/) above!

<div>

<div align="center">

## Features

<div>

<div align="justify">

- Account Signup/Login/Logout
- Recommended Listings Viewed Upon Signup
- Demo User
- Create, Update, and Delete Listings
- Dashboard For Viewing Own Listings
- Filtered View For Other Listings
- Add New Reviews
- Edit and Delete Reviews
- Create, View, Edit, and Delete Bookings
- Live Search Bar and Filters
- AWS S3 Bucket Upload
- Google Location Autocomplete API
- Google Geolocation Capture API
- Google Maps API
- Neumorphic Design

<div>

<div align="center">

## Screenshots

<div>

<div align="center">

### Demo User

![demo](https://user-images.githubusercontent.com/11577850/151828224-161be74a-83cc-4bf6-982c-134cb6f63c70.png)

### Sign Up

![signup](https://user-images.githubusercontent.com/11577850/151828276-27ed651e-7cf3-4971-8d56-d2f1a28bbfa7.png)

### Login

![login](https://user-images.githubusercontent.com/11577850/151828334-d7eaa130-e67e-4cc5-8dda-cd7655b65215.png)

### Signed-In Navigation Bar

![signed-in-navbar](https://user-images.githubusercontent.com/11577850/151828500-88b24516-b144-44fa-b5e5-d3c7fa73bf18.png)

### Recommended Listings

![recommended listings](https://user-images.githubusercontent.com/11577850/151828609-5c02fad4-91a7-45fe-b043-63073e48e01f.png)

### View Listing

![view-listing](https://user-images.githubusercontent.com/11577850/151828687-c4d1dc42-46f7-4e73-b5ce-d4e724872e51.png)

### View & Create Reviews

![view-review](https://user-images.githubusercontent.com/11577850/151828770-0ab14a0d-e518-4025-9301-08ca0fba6216.png)

### Review Functionalities

![review-options](https://user-images.githubusercontent.com/11577850/151828914-2d8bf668-9d51-4782-8f4a-650e5ee2a1f8.png)

### Editing A Review

![editing-review](https://user-images.githubusercontent.com/11577850/151829009-0c18029a-ccca-4260-b042-491e1c978d2b.png)

### Create Listing

![create-listing](https://user-images.githubusercontent.com/11577850/151829091-7f7bed8f-513e-45c1-afdc-be9032427bce.png)

### My Listings

![my-listings](https://user-images.githubusercontent.com/11577850/151829218-e621ca9e-8acd-4c19-be6b-e6f0efcdca10.png)

### Owner Of A Listing

![owner-listing](https://user-images.githubusercontent.com/11577850/151829359-c5ecfdbc-444e-4e51-a588-ca30d1e93eba.png)

### Edit A Listing

![edit-listing](https://user-images.githubusercontent.com/11577850/151829400-01bfc1f0-f1c7-46ca-bac2-e224682f5091.png)

<div>

<div align="center">

## How To Run Locally

<div>

<div align="justify">

To run locally, you must have **NodeJS** and **Postgres** installed on your machine. Once they are installed, Download/Git Clone the repo and create an *.env* and database following the *.env.example* located in the root of the repo. Then look at the repo's *package.json* located in both the backend and frontend folders to see what packages the project is dependant on. Use `npm install` in both folders to install those dependencies. After that, use **Sequelize** in the backend folder to run all the migrations (`npx dotenv sequelize-cli db:migrate`) and then run all pending seeds (`npx dotenv sequelize-cli db:seed:all`). Check to see if the database was properly seeded using **psql**. If seeded correctly, run `npm start` in both folders.

<div>

<div align="center">

## Dependencies

<div>

<div align="justify">

- BcryptJS - Bcrypt in JS (hash passwords).
- Cookie-Parser - Parse HTTPS request cookies.
- Csurf - Node.js CSRF protection middleware.
- Express - Node.js web framework.
- Express Session - Session middleware for Express.
- Express Validator - Validator module middleware for Express.
- HTTP Errors - Create HTTP Error Objects.
- Morgan - HTTP request logger middleware.
- Per ENV - Clean up package.json.
- React - User Interface Components.
- Redux - State Management.
- Sequelize - ORM.
- Dotenv - Load environment variables.
- Nodemon - Development monitoring script.

<div>

<div align="center">

## Future Features

<div>

<div align="justify">

- ~~Implement a bookings feature.~~ Completed!
- ~~Implement a search feature.~~ Completed!
- ~~Implement a side map that shows location.~~ Completed!
- Animation.
- ~~Improved UI/UX.~~ Completed!
- ~~Extended create listings functionality.~~ Completed!
- Extended create reviews functionality.

<div>


<div align="center">

## Technical Implementation

<div>

<div align="justify">

This is a great project for practicing making CRUD features with the PERN stack. It is also good practice for using Redux which is used for state management.

My map for making CRUD features goes as the following:
1. Ensure that your database is set up correctly.
2. Set up your router on your backend to hit the database.
3. Set up your thunk function to hit the API server and dispatch the action creator.
4. Set up your action creator / action object.
5. Set up your reducer with switches and default cases.
6. Be sure to export your reducer to rootReducer.
7. Make a controlled component / useEffect that dispatches the thunk.
8. useSelector is then used to listen into the state and pull relevant information from the "slice of state". You can now use that information to display data from your database.

<div>


<div align="center">

## Project Created By
### Nawal Ahmed

[![Nawal Ahmed - LinkedIn](https://img.shields.io/static/v1?label=Nawal+Ahmed&message=LinkedIn&color=%230077B5&style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/nawaljahmed/) [![Nawal Ahmed - GitHub](https://img.shields.io/static/v1?label=Nawal+Ahmed&message=GitHub&color=%23161B22&style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/nawaljahmed)

<div>

<div align="center">

## Badges Found & Created Using
[Badges4 ReadMe.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile) | [Markdown Badges](https://github.com/Ileriayo/markdown-badges) | [Badge Generator](https://michaelcurrin.github.io/badge-generator/#/generic) | [Shields.io](https://shields.io/) | [Simple Icons](https://simpleicons.org/)

<div>
