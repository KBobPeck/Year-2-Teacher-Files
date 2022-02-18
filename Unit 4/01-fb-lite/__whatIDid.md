# How I Made This Project

---

# Part 1 - Start / Signup / Login

---

- npx create-next-app@latest
- added server folder
- created connectDB
- created the .env with the MONGO_URI in it
- created server.js
- make sure you update the package.json scripts
  - if nodemon doesn't run because of school computers just use npx like we used to
- created the Layout.js, HeadTags.js, Navbar.js
  - layout overwrite the style for EVERY component that we are going to make
  - head is part of the layout and lets us overwrite the <head> of every page
  - navbar will always be visible on every page
  - navbar is using semantic UI, the docs are very nice and easily accessable online
  - make sure import the css on the app page or it wont work

_when using the semUI on the navbar the buttons will appear off center. This is a good time to show them how easy it is to overwrite the semUI css. I have a commented out bit of css in the styles.css that will fix it. all you need to do is inspect element, grab the classes and overwrite it_

_The nprogess css is avaible online and there is a link to us on their git hub, you can customize the look of the bar very easily by editing the css file_

## login / signup layout

---

- created the components / common folder
- created WelcomeMessage
- we create login.js and signup.js and place the header and footer messages in there

```javascript
const login = () => {
  return (
    <>
      <HeaderMessage />
      <FooterMessage />
    </>
  );
};
```

### signup.js

---

create the following states I left out all the Socials links in the state at first and added those later

- user state
- user object
- social links state
- passcode state
- error state
- username
  - this is seperate because we are going to check if the name is available
- usernameLoading state
- usernameAvailable
- formLoading

once the states are created then we can work on the form

- if we take a look at the semantic UI page we can see that they include sections for loading and errors so we can include those in the component
- for this part you should copy what I have and then look up anything that doesn't make sense to you

- added the handlers for the onChange and onSubmit
- when I got the the regex test for the username there is a js file in utils that holds the regex

- CommonInputs.js
- added the common js to the signup form, added a divider so seperate the bio better
- added a check for the sign up button

  - IT IS SO MESSY, it just decides to work something and not others, I dont know why but I added an extra check for no real reason and it seems to work ok now. IDK WHY!!!!

- ImageDropDiv.js this is for the image section of the form, allows for easy profile image adding
- added imagedrop to the signup
- dont forget to update the onChang function
- once that is added you are done with the sign up

_currently there is a very large error that appears in the console. This happens because about 2 weeks ago react updated and you can no longer useRef in react.strictmode (no idea why) apparently there is something called refForwarding where you React.createRef() and then pass that on but I spent too much time trying to fix it already. I may try and come back to this. AHHHHHHHHH I just found it by accident after hours of trying... in the next.config.js there is strictmore setting. just make it false... fixed... but I still feel empty inside_

### login.js

---

- this is a lot simpler, you can just copy paste most the things you need from the sign up, all you need here is the email and password though
- for now, just like sign up, we are going to just prevent default on submit, we will deal with the validation junk later

- we are going to add an error message that will show up if you make a mistake
  - I had the handle submit change the error message so that no matter what there was an error, just to show off how it works. we can change this back later when we are done
- the password has an eye that you can click on to show/hide the password

## MongoDB setup

---

- models/usermodel is next
  - we add a bunch of unread or new objects here to help with layouts later
- profile model
  - we are going to include the user as a type in the profile
- follower model

  - for this one I made a variable for model.Schema so that it

_for the API, there is a folder in the pages that work very well for getting information, I tried to make a branching path, if req.method === "post" do something but to no avail. I will set up camp here and make for the summit tomorrow. For now I made a seperate folder on the root level that holds the API stuff_

`REFACTOR INCOMING`

_once again I return, heart void of contentment. For the error was so easy and I sent so much time on it that no answer would make me whole again... It's "GET" not "get" and "POST" not "post". I am off to commit sudoku as my ancestors did before me... perhaps the simplicity of 1-9 numbers will help to soften the saddness inside_

- OK I refactored all the routes into a seperate folder, this should be closer to what we were doing in the node unit
- added controllers and routers to the server file
- fixed up the server.js with the cloudinary that we need and the fileuploader that we need
- at this point you should be able to upload a profile pic and a user to the db/cloudiary and then login with any of the accounts you made.

- I created a snap shot zip of the program so far in the projects section. Im call it Social Media Part 1

---

# Part 2 Home Page

---

## get initial props

- created index.jsx and added the getInitialProps to index and \_app.js
  - getInitialProps is the way that next handles a context file, making it easier for us to use information all around the app
- there is a large commented out section that I used for practice and to show some things that the context can do

## auth middleware

- moved around the controllers and the routers a little to have them make more sense
- made the middleware folder where we are going to do auth work
- imported the middleware auth to server.js
- added the authMiddleware to the Auth route

- once everything is added you can do testing in postman

- use the sign up page to get a token

_post: localhost:3000/api/v1/auth/login_

`{ "user": { "email": "email@test.com", "password": "password" } }`

- get the token from the response

_get: lcoalhost:3000/api/v1/auth_

- with headers Authorization : Bearer {{TOKEN}}
- you will get the user and the followers back in this request. NOTE: you won't get the password back in the user object.

whoo boy... this was also rough to figure out. We can add a checkAuth function to the getInitialProps on anypage that we want to run it on. since I added a check in there that will redirect you away from the login if you are already loggin in, then I would add it to EVERY page, we are going to add a log out button later that they can use to change accounts

now that I spent a while on it I refactored again, you can instead just add this ONCE to the \_app.js page and it will work on EVERY page in the app. treat this like a globalContext page from react

alright, breather here. the authing in the \_app was a lot to understand with all of the context. I would take it slow and have them do a small example with another jsonplaceholder I used [todos](https://jsonplaceholder.typicode.com/todos) and had them build on the index content with coloring from semantic based on complete or not

---

## index styling time

#### this is where we are going to create all of the junk inside of the index

- the layout will be a 3 column grid. a navbar, the content, and a search bar
- just create a sideMenu and a search component in your files and then put some placehodler text. then go back to the layout component and add them

if the placeholder text isnt showing up it is because you need to pass pageProps.user into the layout in \_app.js
since you should already have the get initial props on your \_app and you are returning pageprops with the user in it then it should be simple to get the user in your layout =) This is how next.js handle global context

- once you can see the 3 colums of text, build out the sidemenu and the searchcomponents
- search component requires a new controller and route called search that will find an array of all the users with that name
- hopefully at this point you have a working left side and right side of your site with a middle that holds the homepage.

## posts

- postmodel
- post controllers, routes, server.
- as you are working on this I would test the routes with postman to make sure you are getting back the right data

- I added the post folder in components but I did not add any content just place holder text
  ```javascript
  return <div>CardPost</div>;
  ```
- same for no data in layout
- then built out the index page
- cardPost.jsx is next

  - there is a lot in this, anything you find a thing that you need to make I would just create a small sample file for that thing
  - the Popup is for deleting the post, it pops up with a warning
  - There should only be 3 comments in the front, if you click to view the comment then there should be all of them

- next is calctime.js in util
- postComments.jsx
- commentinput field
- CreatePost
- util/postActions
