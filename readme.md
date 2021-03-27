#Flyb-test-web-app

- [Flyb-test-app](#flyb-test-web-app)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
  - [External Libraries](#external-libraries)
  - [Improvements](#improvements)

---

## Introduction

Flyb-test-app is a [React](https://reactjs.org/) web application with mobile responsive design. This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript) and formatted through [prettier](https://prettier.io/).

### Development mode

In the development mode, the front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading.

### Production mode

In the production mode, All the client side code will be bundled into static files using webpack and it will be served by [webpack dev server](https://webpack.js.org/configuration/dev-server/) in production mode. Where as in actual production movement we can either serve it by the Node.js/[Express](https://expressjs.com/) or [Nginx](https://www.nginx.com/).

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/sivaish/flyb-test-repo.git

# Go inside the directory
cd flyb-test-repo

# Install dependencies
npm (or yarn install)

# Start development server
npm dev (or yarn run dev)

# Build for production
npm build (or yarn run build)

# Start application in production mode
npm start (or yarn start)
```

---
## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client directory. All the frontend code (react, css, js and any other assets) will be in client directory.

### Babel
[Babel](https://babeljs.io/) helps us to write code in the latest version of JavaScript and helps us to convert JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel. Below is the .babelrc file which used in this app.

```javascript
{
    "presets": ["env", "react"]
}
```

Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset **env** allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset **react** allows us to use JSX syntax and it will transform JSX to Javascript.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack.

---
## External Libraries

In this app [Formik](https://formik.org/) is used to create, update and validate the form. This library is widley used and trusted.

Yes, it is possible to create, update and validate the form by using handleChange functions for each and every input field and validate them seperatelly.

---
## Improvements

With help of [MATERIAL-UI](https://material-ui.com/) or [React Bootstrap](https://react-bootstrap.github.io/) we can enrich the UI. 

The test requirement is to build using react, HTML and CSS, so I haven't used [MATERIAL-UI](https://material-ui.com/) or [React Bootstrap](https://react-bootstrap.github.io/).
