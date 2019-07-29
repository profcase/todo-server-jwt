# todo-server-jwt

> Simple server app with JWT authentication that uses MongoDB, Node.js, and the Express web framework to provide a todo API.
Returns JSON data using standard REST requests. Can be used to support MEAN/MERN/MEVN full-stack apps.

This is just the server-side - no client-side GUI is included.

## Links

- [Server Demo](https://todo-server-jwt.herokuapp.com/)
- [Server Source](https://github.com/profcase/todo-server-jwt)

## Requirements

- A browser (e.g., Firefox or Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)
- Windows Powershell to run commands
- Node.js
- Atlas MongoDB hosting account (free)
- Heroku web app hosting account (free)

## Adding JWT Authentication to [todo-server](https://github.com/profcase/todo-server)

- package.json: add bcryptjs, jsonwebtoken
- app.json: add new routes (/auth, /user)
- config: add jwtSecret entry
- models: add user.js
- routes: add auth.js, user.js
- routes: set access for existing API to private (include auth as second param)

## Optional Windows - installing & upgrading programs

- Install [Chocolatey](https://chocolatey.org/) windows package manager

```Powershell
choco install nodejs postman -y
choco upgrade all -y
```

## Data hosted with Atlas (free tier)

- [Atlas](https://www.mongodb.com/cloud/atlas)
- In Atlas, create new context (e.g., todo-server-data)
- Get connection string
- config: copy example to default.json and add password
- config/default.json: listed in .gitignore to keep password secure

## Run locally against your Atlas MongoDB

- Fork the repo
- Clone your repo down to your local machine
- Create config/default.json
- Install dependencies with `npm install`
- Run the server locally with `npm run dev`

## View local app in browser

- <http://localhost:5002>
- <http://localhost:5002/todo>

## Demo site hosted with Heroku web hosting service (free tier)

- [Heroku](https://www.heroku.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app Settings, create environment variable MONGODB_URI and set to Atlas Connection string (private and secure).
- Under app Settings, create environment variable JWT_SECRET and set to same value as in config/default.json.
- Under app Deploy / Deployment mthod / select GitHub master branch to deploy when there's a new commit pushed to master.

## View Heroku app in browser

Optional: update the following URIs to point to your Heroku app:

- <https://todo-server-jwt-heroku-app.herokuapp.com/>
- <https://todo-server-jwt-heroku-app.herokuapp.com/todo>

## Test requests with Postman

- Install [Postman](https://www.getpostman.com/)
- Additional details in following sections

Collection: "todo-server-jwt (local)"

- Set VERB + URI (and configure request if sending POST data)
- GET <http://localhost:5002/todo> - Send
- POST <http://localhost:5002/user> - set  Body / Raw / JSON & get back token
- POST <http://localhost:5002/todo> - set Auth / Bearer Token & Body / Raw / JSON / set "name" - Send
- DELETE <http://localhost:5002/todo/id> - set Auth / Bearer Token & copy id from post call and replace id - Send

Collection: "todo-server-jwt (heroku)"

- GET <https://todo-server-jwt-heroku-app.herokuapp.com/todo>
- POST <https://todo-server-jwt-heroku-app.herokuapp.com/user> - set  Body / Raw / JSON & get back token
- POST <https://todo-server-jwt-heroku-app.herokuapp.com/todo> - set Auth / Bearer Token & set Body / Raw / JSON - Send
- DELETE <https://todo-server-jwt-heroku-app.herokuapp.com/todo/id> - set Auth / Bearer Token copy id from post call and replace id - Send

## Create user with Postman (provides token)

1. POST <http://localhost:5002/user> - set Body / Raw / JSON - Send

```JSON
{
  "name": "Denise",
  "email": "dcase@nwmissouri.edu",
  "password": "Denise"
}
```

Should return something like:

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2U0MGYyMjNiMWE3MGVkNGVhOTU1NCIsImlhdCI6MTU2NDM2MDk0NiwiZXhwIjoxNTY0MzY0NTQ2fQ.ggEXYwFa2_-0CVAh1uC77FtM1N6ZdKFblC2S4iI8G6Y",
    "user": {
        "id": "5d3e35e6dbd66034a044c8a0",
        "name": "Denise",
        "email": "dcase@nwmissouri.edu"
    }
}
```

1. POST <http://localhost:5002/auth> - set Body / Raw / JSON - Send

```JSON
{
  "name": "Denise",
  "email": "dcase@nwmissouri.edu",
  "password": "Denise"
}
```

Should return something like:

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2UzNWU2ZGJkNjYwMzRhMDQ0YzhhMCIsImlhdCI6MTU2NDM2MTE2MCwiZXhwIjoxNTY0MzY0NzYwfQ.o2J4AoqOqBxjan4oJ_4zXNqzaOTtrW5VjRkkKh8qr3A",
    "user": {
        "id": "5d3e35e6dbd66034a044c8a0",
        "name": "Denise",
        "email": "dcase@nwmissouri.edu"
    }
}
```

## Resources

- [JSON Web Tokens](https://jwt.io/)
- [JWT Authentication & Authorization in NodeJs/Express & MongoDB REST APIs(2019)](https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122)
- [MERN Shopping List](https://github.com/bradtraversy/mern_shopping_list)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)

