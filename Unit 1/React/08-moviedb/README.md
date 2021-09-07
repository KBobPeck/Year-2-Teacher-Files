You need to go to omdbapi and get an API key for you to be able to use this. 

Teach the students that if there is something important they need to keep away from others who are using this program they need to create a .env file in the source. 

you can place variables in that file just make sure they are all CAPS

REACT_APP_MOVIE_API_KEY=########

This file is not read by git and will not be pushed to github, saving the secret variable that you want to hide

To use this variable we call the process.env
process.env.REACT_APP_MOVIE_API_KEY

**if you modify the .env at all you need to restart the react server to have it register


