# goldenspear-react-contacts-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



##### The corresponding back-end can be found [here](https://github.com/lluissuros/goldenspear-simple-backend)


### How to use
First time: `npm install` for dependencies

Get it up and running: `npm start`

(Remember to also `npm start` the Node backend)




# Some relevant information

* I decided to play with Hooks for the first time, and I enjoyed them mostly. Hopefully I dind-t provide any ugly patterns...

* I decided to play with Styled Components for the first time, also I found it interesting and quite nice, although I would nedd to read more on these.

* At the moment, the [JSON web token](https://jwt.io/)) coming from authentication is persisted in the localStorage (or the sessionStorage whe the user chooses to not "Remember me"). I think it is not a good solution for security, as anyone could acces there, but it eases up development for the exercise. If the app was meant to be used in production, I would have stored in in an httpOnly cookie.

* At the moment I didn't provide tests. I think they are very important in production, but I just decided to spend my time playing with new features like Hooks or styled components :)
