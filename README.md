<h1 align="center">
  <br>
  <img src="https://reactnative.dev/img/header_logo.svg" alt="React Native Boilerplate" width="200">
  <br>
    React Native Boilerplate
  <br>
</h1>

<h4 align="center">A React Native Boilerplate built to Scale</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#application-structure">Application Structure</a> •
  <a href="#license">License</a>
</p>

## Key Features

- :fire: Built with react-native-cli with hermes engine enabled

  - Built with the native cli for very low package size
  - Hermes enabled for small size bundles and optimized development and builds

- :chart_with_upwards_trend: Redux and Redux Thunk but with less boilerplate. See <a href="/src/store">store</a>

- :cop: Eslint and Prettier configured with git hooks

  - Eslint and prettier configured together for auto save format and error checks
  - No git commit allowed if errors and warnings are present

- :raised_hands: Global HTTP error and auth handler. See <a href="/src/services">services</a>

- :tada: [Huge](https://oblador.github.io/react-native-vector-icons/) SVG Icon library and more!

  - React Native Vector Icons loaded which covers a huge collections of svg icons
  - Need a custom SVG to load? SVG loader configured, just import the svg and you're good to go.

  `import SVG Icon from './icon.svg'; `

- :nail_care: Many Custom Styled component framework for fast development <a href="/src/styles">styles</a>

- :capital_abcd: Multilingual. See <a href="/src/config">config</a>

- :rocket: Develepment scope based App config file for deployment. See <a href="/src/config">config</a>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

Setup the environtment based on your OS following instruactions from [here](https://reactnative.dev/docs/environment-setup)

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd react-native-boilerplate

# Install dependencies
$ yarn install or npm i

# Run the app for android
$ yarn android

# Run the app for ios
$ yarn ios


```

## Application structure

> The directory layout of this boilerplate

    .
    ├── .vscode                 # Vscode config, for autoformat on save.
    ├── android                 # All Android related files and config goes here
    ├── ios                     # All iOS related files and config goes here
    ├── node_modules            # NPM dependency folder
    ├── public                  # Reacts public folder for the html and static assets
    ├── src                     # Source directory for the React Application
    │   │
    │   ├── api                   # API async functions folder.
    │   ├── assets                # Static assets folder for the global scope. Example: images, icons, fonts etc.
    │   ├── components            # Typical React component folder but only for global components.
    │   ├── config                # App config (More details inside the folder)
    │   ├── features              # Features pattern folder for Application features (More details inside the folder)
    │   ├── lib                   # Global helper functions and custom hooks folder
    │   ├── screens               # Screen component folder
    │   ├── navigator             # Application navigation/routing config (More details inside the folder)
    │   ├── services              # Folder for services like custom axios instance, analytics etc.
    │   ├── store                 # Application Redux store
    │   ├── styles                # Custom Styled Components
    │   └── App.js                # Entry component for the React App.
    │
    ├── jsconfig.json           # Adjust file paths to use absolute file path for React
    ├── package.json            # The NPM config file for all the packages installed and scripts and more
    ├── .env.json               # Cause .env is a hassle on React native
    ├── .eslintrc               # Configure Eslint
    ├── .eslinignore            # ignore certain files for Eslint
    ├── .gitignore              # ignore certain files for git (example: .env)
    ├── .prettierrc             # Configure prettier (example: .env)
    └── .prettierignore         # ignore certain files for Prettier

## Credits

This software uses the following open source packages:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React Redux](https://react-redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [i18next](https://www.i18next.com/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Axios](https://github.com/axios/axios)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)
- And more..

## License

MIT
