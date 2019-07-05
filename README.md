# Introduction to React

## Introduction and Expectations

Welcome. You're about to learn the most popular front-end JavaScript framework in the world. Or library, depending on whom you ask. We'll get to that. React is an open-source technology built by Facebook with one objective: the efficient creation of user interfaces for the web. In this course, you'll learn how to make UI components using React and JSX, the chocolate-in-peanut-butter syntax that unites HTML and JavaScript. You'll also learn how to use components properly, manage state in an application, and correctly connect your app to external datasources. Let's begin.

## Materials and Accounts

We're going to use both local and cloud-based tools in this course, so it's important that we have everything we need before we begin. Let's start with things to install.

### Node

You're going to need the LTS version of [NodeJS](https://nodejs.org/en/)—as of this writing, version `10.16.0`. 

### Editor

You're going to need a fairly well-featured text editor. We recommend [VSCode](https://code.visualstudio.com/).

### Package Manager

The Node ecosystem has its own package repository, hosted at [npmjs](https://npmjs.com). We _could_ use the already-installed `npm` command-line package manager. However, we prefer the [Yarn](https://yarnpkg.com) tool. It's fast, secure, and has a bit cleaner output than good ol' `npm`. 

### Bundler

We are going to need a tool, as we'll see, to bundle and transpile our React code. This will be handled for us by [Parcel](https://parceljs.org/). Luckily, you can use Yarn to install it!

```
yarn global add parcel-bundler
```

### repl.it

We're going to be completing assignments using [repl.it](https://repl.it). We'll walk through how together, but for now be certain you have an account there. It's free!

## Unit 1: Hello, React!

### Goals for this Unit

* Be welcomed!
* Understand the reasons for using React
* Get started with Parcel as a bundler

### Theory and Knowledge

By the end of this Unit, you should understand:

* Why React?
* Why do we need JS bundlers?

### Skills

By the end of this Unit, you should be able to:

* Install Yarn/Parcel/React
* Start up a Parcel dev server
* Write your first React component

### Assignments

Using [repl.it](https://repl.it), take our simple React demo in the `01-hello` folder and add some components to it. Try to use the functional component method if you can. Create the components above the `App` entry, then use JSX to add them to `App`. Create at least **two** more components.

## Unit 2: (JS)Xtreme Components

### Goals for this Unit

* Create a UI of multiple components
* Use `import` and `export`
* Organize our source folder
* Understand styling

### Theory and Knowledge

By the end of this Unit, you should understand:

* React Props/Proptypes
* Rendering children
* Lists and Keys
* Functional vs. Class-based Components

### Skills

By the end of this Unit, you should be able to:

* Create React Components using both functional and class-based approaches
* Compose components, effectively using `props`, `propTypes`, and `children`
* Use `.map()` to iteratively create multiple components

### Assignment

Use separate component modules and styling to finish our Hero List. And if you're feeling brave, the teams needs a list and item componet as well.

Currently, the UI leaves something to be desired. What's more, there's a lot more data in each `hero` object that we can display. Be creative! Use your knowledge of JSX and props to efficiently create/modify components to display this information.

## Unit 3: Union of the State—Managing Application State

### Goals for this Unit

* Incorporate state into functional and class-based components
* Pass state to children as props
* Create input-validated forms

### Theory and Knowledge

By the end of this Unit, you should understand:

* How to use `setState()`, and how _not_ to use it
* How React Hooks provide state to functional components
* Data flow to children
* Form events
* Data validation

### Skills

By the end of this Unit, you should be able to:

* Write class-based and functional states/state setters
* Pass state information as props to children
* Write state managers
* Write event handlers for forms
* Update state based on form data

## Unit 4: From Mount to Unmount—The Component Lifecycle

### Goals for this Unit

* Use lifecycle methods to trigger actions

### Theory and Knowledge

By the end of this Unit, you should understand:

* `componentDidMount()`
* `componentDidUnmount
* Rendering Arrays of components

### Skills

By the end of this Unit, you should be able to:

* Write actions that create and render new DOM elements
* Use lifecycle methods to trigger actions

## Unit 5: Wait for It—Asynchronous Data in React

### Goals for this Unit

* Populate state with data from external APIs
* Use `fetch()` and `async/await` to update state

### Theory and Knowledge

By the end of this Unit, you should understand:

* Safe handling of asynchronous data
* What to do with state before it's populated
* The `Promise` model

### Skills

By the end of this Unit, you should be able to:

* Write async functions to populate state
* Use conditional rendering to render something regardless of state

## Unit 6: State, Redux Edition—The Redux Model

This Unit will cover two class sessions.

### Goals for this Unit

* Refactor our code to use the Redux model

### Theory and Knowledge

By the end of this Unit, you should understand:

* Why Redux keeps state safe
* Redux actions and reducers

### Skills

By the end of this Unit, you should be able to:

* Write Redux providers, reducers, and actions
* Integrate Redux concepts into your app

## Unit 7: It's Been a Long Route—React Router

### Goals for this Unit

* Produce multiple routes for your app with React Router

### Theory and Knowledge

By the end of this Unit, you should understand:

* React Router's place in the React ecosystem
* Using `GET` params to inform render

### Skills

By the end of this Unit, you should be able to:

* Write a single-page web application that has multiple paths handled by React-Router

