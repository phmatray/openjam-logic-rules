# @openjam/logic-rules

**openjam-logic-rules** provides a higher-level wrapper around OpenJam's API and encapsulates all the business logic related to the OpenJam front-end.

[![npm (scoped)](https://img.shields.io/npm/v/@openjam/logic-rules.svg?style=flat)](https://www.npmjs.com/package/@openjam/logic-rules)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Coverage Status](https://img.shields.io/coveralls/openjam-eu/openjam-logic-rules.svg)](https://coveralls.io/github/openjam-eu/openjam-logic-rules)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://img.shields.io/travis/openjam-eu/openjam-logic-rules.svg)](https://travis-ci.org/openjam-eu/openjam-logic-rules)
[![ Dependencies](https://david-dm.org/openjam-eu/openjam-logic-rules.svg)](https://david-dm.org/openjam-eu/openjam-logic-rules)
[![Dev Dependencies](https://david-dm.org/openjam-eu/openjam-logic-rules/dev-status.svg)](https://david-dm.org/openjam-eu/openjam-logic-rules?type=dev)

### Documentation

- https://openjam-eu.github.io/openjam-logic-rules/

### Notes

- _This package is inspired from the article [Front End Architecture — Making rebuild from scratch not so painful](https://medium.com/car2godevs/front-end-architecture-making-rebuild-from-scratch-not-so-painful-7b2232dc1666)._
- _It also use [TypeScript library starter](https://travis-ci.org/alexjoverm/typescript-library-starter) to bootstrap this libray._

# Folders

## Common

This folder contains shared adapters to use inside different layers. _e.g: HttpClient class — creates an instance of axios library and abstract some methods of it as well._

## Entities

In this group, we will create our Business Objects interfaces and classes. If the object needs to own some rules, it would be nice (not mandatory) to implement them here. But it is also acceptable to just export data interfaces and let all validations to the Interactors layer.

## Services

The Services are classes to load/send data from/to APIs, handle localStorage operations, socket connections.

## Interactors

The Interactors are classes that handle business rules. They are responsible to verify if all conditions for a specific user request are fulfilled — basically, they implement use cases.

## Exposers

We are now ready to expose our package to applications. The reasons to use exposers are that we publish an API which can be consumed independently of the implementation, export just a set of methods based on environment or application and use different names for them.

# How to use?

```ts
import OpenJam from '@openjam/logic-rules';

const oj = new OpenJam();

// GET one artist
const artist = oj.getArtist('ID00001');

// GET all artists
const artists = oj.getArtists();

// now, we have the artists from OpenJam <3
```

# NPM scripts

```bash

 # Run test suite
 npm t

 # Run `npm run build` in watch mode
 npm start

 # Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 npm run test:watch

 # Run linting and generate coverage
 npm run test:prod

 # Generate bundles and typings, create docs
 npm run build

 # Lints code
 npm run lint

 # Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
 npm run commit
```

# Todo

- [ ] Add track entity
- [ ] Add user entity
- [ ] Add axios config override to the entry point
