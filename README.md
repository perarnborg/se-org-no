# se-org-no

Validation for Swedish style organization numbers (organisationsnummer).

## Getting started

The library is available as an [npm package](https://www.npmjs.com/package/se-org-no).
To install the package run:

```bash
npm install se-org-no --save
```

Use like this:

```js
import {isValidOrgNo} from 'se-org-no'


isValidOrgNo('5569565368')
//=> true

isValidOrgNo('foo')
//=> false

// By default personnummer (SSN) are accepted if they are for a user that is older than 18 years
// This is for organizations of type enskild firma
isValidOrgNo('8101013608')
//=> true

// To only accept other organization forms:

// Optionally validate that a ssn is for a person of at least a certain age
isValidOrgNo('8101013608', {allowSsn: false})
//=> false

// Optionally validate that a ssn is for a person of at least a certain age
isValidOrgNo('8101013608', {ssnMinYears: 80})
//=> false
```

## License

[MIT](LICENSE).
