# CarryOkay

Deployed Database: [CarryOkay Database](https://carryokay-server.herokuapp.com/)

This is a Mod 3 [Front-End Project](https://frontend.turing.io/projects/module-3/stretch.html) by [Elizabeth Hahn](https://github.com/elizhahn), [Jessica Justice](https://github.com/m1073496), [Marika Shanahan](https://github.com/monshan).

1. [Project Overview](#project-overview)
2. [App Overview](#app-overview)
3. [Planning Resources](#planning-resources)
4. [Learning Goals](#learning-goals)
5. [Tech Stack](#tech-stack)
7. [API Documentation](#api-documentation)
9. [Future Iterations](#future-iterations)


## Project Overview

The goal of this project was to self-teach back-end technologies by creating a database, building out a server, and making network requests to access that data. We decided to learn PostgreSQL and Knex.js, and to build upon our understanding of Node.js and Express.js. We also built out the front-end of the application using React.js, HTML5 and CSS3/SCSS, and implemented an automated testing suite using Cypress. In summary, this is a fully tested, PERN stack application.

## App Overview

To take a look at the application this repo corresponds to, checkout the smash hit karaoke app [CarryOkay](https://github.com/elizhahn/karaoke-stretch)

## Planning Resources 

- [Project Board](https://trello.com/b/rcWungoW/stretch-project)
- [Wireframes](https://excalidraw.com/#room=d828264f851b55b0ddac,tFSr5q35FXeVUoMCcn2YWA)
- [Miro Board - Class & Database Structure](https://miro.com/welcomeonboard/wws0nQE5F4wGSqWiccWs4RYJGZU5lMpbtFCgcL3hrrTnddj7FfLMs1eOCRSbTWtc)
- [DTR](https://gist.github.com/m1073496/f53e32c1796ab41ed5f767ef74846c6a)

## Learning Goals

### Team Goals
    
 - Fill in gaps of knowledge between front-end and back-end
 - How to create a database / understand how a database works / how to hook it up with the front-end
 - How to deploy the site (full stack)
 - We'll know we're successful when we produce a fully-functional app and we all feel comfortable with our new technologies


## Tech Stack

### [Front-End](https://github.com/elizhahn/karaoke-stretch/blob/main/README.md):
- JavaScript ECMA6
  - React (create-react-app)
  - React Router
- HTML5
- CSS3
  - SASS / SCSS

### Back-End:
- Node.js
  - Express.js
- PostgresSQL
- Knex.js

## API Documentation

All API endpoints (also known as “routes”) are prefixed with https://carryokay-server.herokuapp.com. Also, wherever you see a :id in the endpoint documentation, that would be replaced by the ID value in your request, like 15, for instance. Here are the endpoints available:

| Purpose               | URL           | Verb          | Request Body        | Sample Response (Happy Path) |
| :---                  |    :----:     |      :----:   |     :----:          |                         ---: |
| Get all songs         | `/songs`      | GET           | N/A                 | All songs in database: [{"id":15,"title":"Jigsaw falling into place","artist":"Radiohead","album_cover":"https://www.nme.com/wp- content/uploads/2016/09/62_radiohead-1.jpg","created_at":"2021-04-18T22:16:50.063Z","updated_at":"2021-04-18T22:16:50.063Z"}, ...]
| Get all genres        | `/genres`     | GET           | N/A                 | All genres from relational table: [{"song_id":15,"Electronica":true,"Alternative":false,"Pop":false,"Dance":false,"Hip Hop":false,"Rap":false,"R&B":false,"Country":false,"Rock":true,"Metal":false,"created_at":"2021-04-18T22:16:50.079Z","updated_at":"2021-04-18T22:16:50.079Z","id":9}, ...]
| Get genres by song id | `/:id/genres` | GET           | N/A                 | An individual song's genres: [{"song_id":15,"Electronica":true,"Alternative":false,"Pop":false,"Dance":false,"Hip Hop":false,"Rap":false,"R&B":false,"Country":false,"Rock":true,"Metal":false,"created_at":"2021-04-18T22:16:50.079Z","updated_at":"2021-04-18T22:16:50.079Z","id":9}] 

## Future Iterations

  - Create endpoints to complete CRUD --> we would need a POST, PUT and DELETE request, ideally for creating new PostgreSQL tables to store new users' data, update that data, or delete the data altogether
  - Find a way to utilize the GET request that returns an individual song's set of genres
