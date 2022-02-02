# How I Made This Project

---

## Part 1 - setting up the layout

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

---

## Part 2 - login / signup layout

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

- this is a lot simpler, you can just copy paste most the things you need from the sign up, all you need here is the email and password though
- for now, just like sign up, we are going to just prevent default on submit, we will deal with the validation junk later

- we are going to add an error message that will show up if you make a mistake
  - I had the handle submit change the error message so that no matter what there was an error, just to show off how it works. we can change this back later when we are done
- the password has an eye that you can click on to show/hide the password

## Part 3 MongoDB setup

- models/usermodel is next
  - we add a bunch of unread or new objects here to help with layouts later
- profile model
  - we are going to include the user as a type in the profile
- follower model

  - for this one I made a variable for model.Schema so that it

_for the API, there is a folder in the pages that work very well for getting information, I tried to make a branching path, if req.method === "post" do something but to no avail. I will set up camp here and make for the summit tomorrow. For now I made a seperate folder on the root level that holds the API stuff_

`REFACTOR INCOMING`

_once again I return, heart void of contentment. For the error was so easy and I sent so much time on it that no answer would make me whole again... It's "GET" not "get" and "POST" not "post". I am off to commit sudoku as my ancestors did before me... perhaps the simplicity of 1-9 numbers will help to soften the saddness inside_
