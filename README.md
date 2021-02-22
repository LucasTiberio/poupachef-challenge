Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

made with ❤️ by [Lucas](https://www.linkedin.com/in/lucas-tiberio/)

## Definitions of usage

I opted for the Context API instead of Redux, to avoid manipulation of great information and logic. Using only to save the state in more nested objects.
I used a UX technique called Fast-Feedback, to avoid repeating unnecessary requests or renders. Thus updating the direct values ​​in the state, right after the request is answered.
To stylize the components, I chose to use styled-components, to keep the code cleaner and readable. In addition to the possibility of theme control across the state.
For architecture, I decided to choose DDD, thus having the possibility to model the most important / central classes of the project, in a way that reduces the complexity and maintenance of these.
Lighthouse feedback is in the file: localhost_2021-02-22_14-16-53.report.html.

## .env

REACT_APP_BASIC_AUTH_PASSWORD=dd3ed90e-667f-4248-a671-9266261dba5b

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
Your app is ready to be deployed!
