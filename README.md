<div align="center">

# [FairBnB](https://fairbnb-app-supabase.onrender.com/)

[Link](https://fairbnb-app-supabase.onrender.com/)
[Project Wiki](https://github.com/nawaljahmed/fairbnb/wiki)

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
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

</div>

<div align="center">

## About

<div>

<div align="justify">

FairBnB is an [AirBnB](https://www.airbnb.com/) inspired full-stack web application with dynamic features catered to people who want to list and rent affordable places. FairBnB lets users create listings and other users. Other users can review those listings. Try out the app as a Demo user by clicking on the [link](https://fairbnb-app-supabase.onrender.com/) above!

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

### Home Page

![Main](https://user-images.githubusercontent.com/11577850/173890446-aab27bad-5e84-4020-b070-6b5a878c4e90.png)

### Demo User

![Demo](https://user-images.githubusercontent.com/11577850/173890478-f0277186-70a9-4cca-a4c8-d05462dc2958.png)

### Sign Up

![Signup](https://user-images.githubusercontent.com/11577850/173890498-c7d17f66-9b9d-49f9-9ff4-f8a3a61e38b7.png)

### Login

![Login](https://user-images.githubusercontent.com/11577850/173890268-477bd3b0-f1a9-4fb1-b215-3a690dbb8b7e.png)

### Recommended Listings

![Listings](https://user-images.githubusercontent.com/11577850/173890602-054f6a7c-52de-445a-9f8a-046340915597.png)

### Live Search & Filters

![Search   Filters](https://user-images.githubusercontent.com/11577850/173892229-3b31b8b9-ee86-47f1-93a6-fa8e3ba67868.png)

### Listing Details

![Listing Details And Features](https://user-images.githubusercontent.com/11577850/173894185-cbc412ed-5019-4b6a-b5a3-7b70b914f876.gif)

### Review Functionalities (Create, View, Edit, Delete)

![Reviews](https://user-images.githubusercontent.com/11577850/173890981-1b5dbe61-d866-4339-8619-4c3f0a4e9bf8.gif)

### Create Listing

![Creating Listings](https://user-images.githubusercontent.com/11577850/173891206-1d400107-0068-489f-b078-9f8580a8e019.png)

### My Listings

![Viewing My Listings](https://user-images.githubusercontent.com/11577850/173891246-6dca6f42-a53a-4cce-aca8-41f91d556079.png)

### Booking Reservations

![Booking Reservations](https://user-images.githubusercontent.com/11577850/173891547-1a0c5987-29eb-4960-97d6-55a4b7810c2b.png)

### My Bookings

![Viewing My Bookings](https://user-images.githubusercontent.com/11577850/173891791-5ba495b7-45de-4767-8819-b6dfa8dc3aed.png)

### Changing A Booking

![Changing A Booking](https://user-images.githubusercontent.com/11577850/173891607-e111ff72-4e8f-4dbb-ae74-98f5f5bc9710.png)

### Google Maps & Geolocation API

![Google Maps API](https://user-images.githubusercontent.com/11577850/173891701-00f17638-aba8-4865-97db-0a9ea02b1686.png)

### Google Maps & Geolocation API

![Google Autocomplete API](https://user-images.githubusercontent.com/11577850/173892162-63d336b9-5030-4f18-b3c7-eb7ffec85441.png)


<div>

<div align="center">

## How To Run Locally & Deploy

<div>

<div align="justify">

To run locally, you must have **NodeJS** and **Postgres** installed on your machine. Once they are installed, Download/Git Clone the repo and create an *.env* and database following the *.env.example* located in the root of the repo. Then look at the repo's *package.json* located in both the backend and frontend folders to see what packages the project is dependant on. Use `npm install` in both folders to install those dependencies. If `npm install` doesn't work with React due to an outdated version, then try `npm i --legacy-peer-deps`. (Heroku needs the same thing if you wish to deploy. That's why in the outermost package.json the install script has `"npm --prefix backend install backend && npm --prefix frontend install frontend --legacy-peer-deps"`.) After that, use **Sequelize** in the backend folder to run all the migrations (`npx dotenv sequelize-cli db:migrate`) and then run all pending seeds (`npx dotenv sequelize-cli db:seed:all`). Check to see if the database was properly seeded using **psql**. If seeded correctly, run `npm start` in both folders.

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
- AWS - Cloud Storage.
- Multer - Uploading Middleware.
- Google APIs - Location Features.

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
### Jarif Ahmed

[![Jarif Ahmed - LinkedIn](https://img.shields.io/static/v1?label=Jarif+Ahmed&message=LinkedIn&color=%230077B5&style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/jarifnahmed/) [![Jarif Ahmed - GitHub](https://img.shields.io/static/v1?label=Jarif+Ahmed&message=GitHub&color=%23161B22&style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/jarifnahmed)

<div>

<div align="center">

## Badges Found & Created Using
[Badges4 ReadMe.md Profile](https://github.com/alexandresanlim/Badges4-README.md-Profile) | [Markdown Badges](https://github.com/Ileriayo/markdown-badges) | [Badge Generator](https://michaelcurrin.github.io/badge-generator/#/generic) | [Shields.io](https://shields.io/) | [Simple Icons](https://simpleicons.org/)

<div>
