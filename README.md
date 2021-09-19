# MobX

## Setting up React

### Plain Setup

- https://medium.com/@shoaibbhimani1392/getting-started-with-mobx-82306df92d90
- https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-windows-10/
	- https://www.npmjs.com/package/create-react-app

### Setup with Webpack

- https://www.robinwieruch.de/minimal-react-webpack-babel-setup

### Introducing MobX to React

- https://github.com/mobxjs/mobx-react#choosing-your-version
- https://mobx.js.org/react-integration.html

### Different Syntaxes

- https://github.com/mobxjs/mobx-react/blob/master/README_v5.md#observercomponentclass
- https://www.mobxjs.com/refguide/observer-component.html#observer-automatically-tracks-observables-used-during-render
- https://mobx.js.org/observable-state.html#makeobservable

### Babel

Babel transpiles newer ECMAScript versions to older and more supported ECMAScript versions.  
We need it here for annotations support. 

- https://stackoverflow.com/questions/60288375/when-to-use-babel-config-js-and-babelrc/60349119#60349119
- https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy
- https://stackoverflow.com/questions/52262084/syntax-error-support-for-the-experimental-syntax-decorators-legacy-isnt-cur/66019089#66019089

- https://blog.jakoblind.no/babel-preset-env/
- https://babeljs.io/docs/en/babel-preset-react

### Setup

```
npm install -g create-react-app
create-react-app react-mobx
cd react-mobx
npm install mobx mobx-react
npm install --save-dev @babel/plugin-proposal-decorators
npm install --save-dev customize-cra react-app-rewired
```

`config-overrides.js`
```js
const { addDecoratorsLegacy, override } = require('customize-cra')

module.exports = override(addDecoratorsLegacy())
```

`babel.config.js`: Replace `react-scripts` with `react-app-rewired`
```js
module.exports = {
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
}
```

`package.json`
```js
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
}
```

### Possible problems

- https://github.com/facebook/create-react-app/issues/5708
- https://stackoverflow.com/questions/59611597/error-cannot-find-module-webpack-cli-bin-config-yargs
- https://stackoverflow.com/questions/40721277/mobx-leading-decorators-must-be-attached-to-a-class-declaration

## Other tutorials

- https://www.youtube.com/watch?v=_q50BXqkAfI&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b&index=22 (Webpack, babel 6)
- https://learnwebtutorials.com/tutorial-intro-to-first-mobx-react-app (babel 6)
- https://dev.to/rosyshrestha/build-your-first-app-with-mobx-and-react-4896 (Webpack, babel 7)

- https://www.youtube.com/playlist?list=PLNkWIWHIRwMFK-Gpb4NE45_1_Himhyi-K
- https://www.youtube.com/watch?v=pnhIJA64ByY
- https://www.youtube.com/watch?v=NIj2J3Ux1q4&list=PLEhEHUEU3x5qz5OYDXamBmYnLvwboYTdH&index=4
- https://www.youtube.com/watch?v=GQCJbRbA9Ms&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL&index=9
- https://www.youtube.com/watch?v=gED6KGBQgak&list=PLNqp92_EXZBKa1U7JbgUwBnDk3XzYDvXe&index=14
- https://hackernoon.com/how-to-build-your-first-app-with-mobx-and-react-aea54fbb3265
- https://learnwebtutorials.com/tutorial-intro-to-first-mobx-react-app

- https://stackoverflow.com/questions/53483066/babel-7-using-the-export-keyword-between-a-decorator-and-a-class-is-not-allowed

- https://codingislove.com/setup-mobx-react-context/

---

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
