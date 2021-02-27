# Trello clone

A simple Trello clone with React. No 3rd party react lib used. Using `useReduce` for store management for simplicity. Can be easily leveraged with `redux` in the future.

The app using `prettier` for code formatting and `eslint` as a linter.

Also, some functionality covered by unit tests.

## App functionality

- [x] A user should be able to add and label columns.
- [x] A user should be able to add and edit cards.
- [x] A user should be able to move cards between columns

  _Implemented simple drag-and-drop (cards can be moved between lists but not to a specific position in the list)_
  
- [x] Do make sure the available interactions are intuitive. In other words, we will be considering usability.
- [x] Some kind of persistency(LocalStorage or SessionStorage) is encouraged, though not required.
  _LocalStorage has been chosen_
- [x] Any additional features you find important
   - [x] _A be able to remove card_

## Install

```
yarn
```

## Run

```
yarn start
```

## Tests

```
yarn test
```

## Project structure

We have the following folders at the top:

- `./public` - public assets

- `./src` - source code

There are several folders inside ./src:

- `./src/components` - it should contain a reusable components without any domain specific logic. E.g. "Button" or "Link"

- `./src/container` - domain specific components.

- `./src/actions` - action creators.

- `./src/actionsTypes` - action types.

- `./src/reduces` - store reducers.

- `./src/types` - TypeScript types.

- `./src/reduces` - TypeScript types

- `./src/utils` - Shared utils


## Improvements todo

- [ ] add git hook
- [ ] cover more functionality with unit test
- [ ] add E2E test e.g.with playwright or cypress
- [ ] CI/CD and deployment (Github actions + Github pages can be used for such simple project)
- [ ] form validation

## Tech debts

- [ ] At the moment an `Object.entries` been using to render lists. It's fragile cause JavaScript doesn't guarantee object property order and it works only cause ES2015 iterates object in insertion order. Creating a separate array with for `List` ids will fix the problem.
