# IOOF Code Challenge

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Requirements

To install the dependencies and run the development server you need to have [`npm` installed](https://docs.npmjs.com/getting-started/installing-node).

### Installing dependencies

```bash
npm i
```

### Starting the development server

```bash
npm start
```

The app should now be served on [http://localhost:3000/](http://localhost:3000/).

There are 3 routes defined in this Single Page App:

- [Home](http://localhost:3000/)
- [Counter](http://localhost:3000/counter)
- [Tree View](http://localhost:3000/tree-view)

## Challenge Parameters

### Rules

The provided application code can be modified in any way. `npm` packages and static assets can be added or removed as appropriate.

### Task 1 - Delayed increment and decrement

When clicking the buttons, incrementing and decrementing of the value should be delayed by approximately 1 second.

#### Definion of done

Increment

1. Navigate to the [Counter](http://localhost:3000/counter)
2. Press the `+` button
3. Counter value should increment after approximately 1 second

Decrement

1. Navigate to the [Counter](http://localhost:3000/counter)
2. Press the `-` button
3. Counter value should decrement after approximately 1 second

### Task 2 - Styling

The app currently has no styling. Please refer to UX mockups (in assets folder) for visual styles and provided assets and implement it.

### Task 3 - Fix the bug

We have reports of a bug on the tree view where all the counters increment and decrement together. We require the all the counters not to interfere with each other.

#### Steps to reproduce

1. Navigate to the [Tree View](http://localhost:3000/tree-view)
2. Add multiple counters
3. Use the navigation to go to the tree view
4. Observe the incorrect component state.

### Task 4 - Add an about page

Add a new route for [/about](http://localhost:3000/about). On this page tell us about yourself (similar to a resume). You can style this page however you like, express yourself and be creative.
