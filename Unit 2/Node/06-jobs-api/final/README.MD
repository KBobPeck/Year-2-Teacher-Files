#### Project Setup

In order to spin up the project, in the root create .env with these two variables, with your own values.

MONGO_URI
JWT_SECRET

After that run this command

```bash
npm install && npm start
```

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```

# Setting up Heroku

first you need to create a heroku account

- then install the heroku CLI tools
- this will require a restart of your pc once it is finished
- you can check to see if it is working by typing `heroku -v` into the terminal

then you need to set up a git repo on the project that you want to host,

- this means you may need to remove the .git that is already there and init a new one
- git add, git commit

config your package.json

- find your node version by typing `node -v` (last time I did it I got 14.x)
- add the following to your package:
  `"engines": { "node": "14.x" }`
- change your start script to node app.js
- create a Procfile
  - add `web: node app.js`

log into your heroku using "heroku login" and using the browser

- type `heroku login` and it will take you to their site on the browser
- `heroku create [name]` will then create a heroku project using the git that we sent up
- you can check the git by typing `git remote -v`

set up your env on heroku

- `heroku config:set [env setting]`
- once you add all of your settings you need to push your app to heroku
- `git push heroku main` if main doesn't work try master
- some values are annoying to do like the MONGO URL since that has values like "&" and ":" so in those cases you can
  - go to the heroku dashboard
  - click the project
  - click on settings
  - show config vars
  - and manually add the key value pairs

Restarting the Dynos

- go back to the app that you want to work on
- in the top right you will see a more drop down
- click on restart all dynos to manually restart the server, saving any envs that you added and then you can check the logs to see that the port has been automatically assigned.
- ### THIS IS WHY IT IS IMPORTANT TO USE A PORT VARIABLE ON THE .ENV AND NOT JUST 3000

Heroku has its own version of git and stores our data just like git hub

- to clone a project from heroku
  - login to heroku
  - use command `heroku git:clone -a`
  - copy all .env vars from the config

# APIMATIC
