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
- Run the server locally with `npm start`

## View local app in browser

- <http://localhost:5002>
- <http://localhost:5002/todo>

## Demo site hosted with Heroku web hosting service (free tier)

- [Heroku](https://www.heroku.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app Settings, create environment variable MONGODB_URI and set to Atlas Connection string (private and secure).
- Under app Deploy / Deployment mthod / select GitHub master branch to deploy when there's a new commit pushed to master.

## View Heroku app in browser

Optional: update the following URIs to point to your Heroku app:

- <https://todo-server-jwt-heroku-app.herokuapp.com/>
- <https://todo-server-jwt-heroku-app.herokuapp.com/todo>

## Test requests with Postman

- Install [Postman](https://www.getpostman.com/)

Collection: "todo-server-jwt (local)"

- Set VERB + URI (and configure request if sending POST data)
- GET <http://localhost:5002/todo> - Send
- POST <http://localhost:5002/todo> - set Body / Raw / JSON / set "name" - Send
- DELETE <http://localhost:5002/todo/id> - copy id from post call and replace id - Send

Collection: "todo-server-jwt (heroku)"

- GET <https://todo-server-heroku-app.herokuapp.com/todo>
- POST <https://todo-server-heroku-app.herokuapp.com/todo> - set Body / Raw / JSON - Send
- DELETE <https://todo-server-heroku-app.herokuapp.com/todo/id> - copy id from post call and replace id - Send

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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2RmYTcwOGFkNTc0MTYyNGZlOWNiZSIsImlhdCI6MTU2NDM0Mjg5NiwiZXhwIjoxNTY0MzQ2NDk2fQ.rlOyMPuHCx8N5puRRWr-kb--GRpYgocrEwAJxY9twgw",
    "user": {
        "id": "5d3dfa708ad5741624fe9cbe",
        "name": "Denise",
        "email": "dcase@nwmissouri.edu"
    }
}
```

## Now manage todos (providing token)

1. GET <http://localhost:5002/todo> - set Auth / type = 'Bearer Token' / set token based on value above

## Resources

- [JSON Web Tokens](https://jwt.io/)
- [MERN Shopping List](https://github.com/bradtraversy/mern_shopping_list)

## See Also

- [js-colors](https://github.com/profcase/js-colors)
- [js-console](https://github.com/profcase/js-console)
- [js-e1](https://github.com/profcase/js-e1)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [js-node](https://github.com/denisecase/js-node)
- [js-node-express](https://github.com/denisecase/js-node-express)
- [todo-server](https://github.com/profcase/todo-server)
- [todo-server-jwt](https://github.com/profcase/todo-server-jwt)
