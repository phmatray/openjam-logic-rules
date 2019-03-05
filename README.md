# @openjam/logic-rules

**openjam-logic-rules** provides a higher-level wrapper around OpenJam's API and encapsulates all the business logic related to the OpenJam front-end.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Travis](https://img.shields.io/travis/openjam-eu/openjam-logic-rules.svg)](https://travis-ci.org/openjam-eu/openjam-logic-rules)
[![Coverage Status](https://img.shields.io/coveralls/openjam-eu/openjam-logic-rules.svg)](https://coveralls.io/github/openjam-eu/openjam-logic-rules)

[![npm (scoped)](https://img.shields.io/npm/v/@openjam/logic-rules.svg?style=flat)](https://www.npmjs.com/package/@openjam/logic-rules)
[![ Dependencies](https://david-dm.org/openjam-eu/openjam-logic-rules.svg)](https://david-dm.org/openjam-eu/openjam-logic-rules)
[![Dev Dependencies](https://david-dm.org/openjam-eu/openjam-logic-rules/dev-status.svg)](https://david-dm.org/openjam-eu/openjam-logic-rules?type=dev)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/openjam-eu/openjam-logic-rules/issues)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/openjam-eu/openjam-logic-rules.svg)](https://greenkeeper.io/)

### Documentation

- https://openjam-eu.github.io/openjam-logic-rules/

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

 # Read the manual ;-)
 npm info

 # Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
 npm run commit
```
