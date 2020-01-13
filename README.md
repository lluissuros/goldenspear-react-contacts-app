### The corresponding back-end can be found [here](https://github.com/lluissuros/goldenspear-simple-backend)

### Live deploy in [here](https://goldenspear-react-contacts-app.lluissuros.now.sh/)



# goldenspear-react-contacts-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






### How to use
First time: `npm install` for dependencies

Get it up and running: `npm start`

(Remember to also `npm start` the Node backend)




# Some relevant information

* I decided to play with Hooks for the first time, and I enjoyed them a lot, but I still need to research more on them. Hopefully I dind-t provide any ugly patterns...

* I decided to play with Styled Components for the first time, also I found it interesting and quite nice, although I would nedd to read more on these to get the most benefits. What I really loved about styled-components among other css-in-js solutions is that the code is real css, so it is possible to copy-paste directly what you hack in the browser developer tools. 

* At the moment, the [JSON web token](https://jwt.io/)) coming from authentication is persisted in the localStorage (or the sessionStorage whe the user chooses to not "Remember me"). I think it is not a good solution for security, as anyone could acces there, but it eases up development for the exercise. If the app was meant to be used in production, I would probably have stored it in an httpOnly cookie.

* I am providing an api for dealing with token auth within the front-end in a separate js file (`src/utils/AuthHelperMethods`). I think it works well but it is not the most React way. In a future iteration, I would probably try to provide this auth Api with a Context Provider (maybe taking some inspiration from [here](https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff))

* At the moment I didn't provide tests. I think they are very important in real life projects, but I just decided to spend my time playing with new features like Hooks or styled components :) But let me know if you want to see my unit testing writing, and I can provide it for you.
