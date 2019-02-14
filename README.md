# @openjam/logic-rules

This package is inspired from the article [Front End Architecture — Making rebuild from scratch not so painful](https://medium.com/car2godevs/front-end-architecture-making-rebuild-from-scratch-not-so-painful-7b2232dc1666).

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

# How to start?

## Scripts

```bash
# Install dependencies
npm install

# Start development
npm start

# Develop tests
npm run test-dev

# Develop tests and check coverage
npm run test-dev-coverage

# Run tests and check coverage
npm test

# Build package
npm run build
```
