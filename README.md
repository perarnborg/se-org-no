# se-org-no

Validation for Swedish style organization numbers (organisationsnummer).

## Getting started

The library is available as an [npm package](https://www.npmjs.com/package/se-org-no).
To install the package including peer dependency [se-ssn](https://www.npmjs.com/package/se-ssn) run:

```bash
npm install se-ssn se-org-no --save
```

Use like this:

```js
import {isValidOrgNo} from 'se-org-no'


isValidOrgNo('5569565368')
//=> true

isValidOrgNo('foo')
//=> false

// By default personnummer (SSN) are accepted if they are for a user that is 16 years or older
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

If you are in a multinational context you can use the alias isValidSwedishOrgNo for clarity:

```js
import {isValidSwedishOrgNo} from 'se-org-no'

isValidSwedishOrgNo('8101013608')
//=> true
```

Alternatively with CommonJS:
```js
var seOrgNo = require("se-org-no")

seOrgNo.isValidOrgNo('8101013608')
//=> true
```

## Legacy support

IE8 is not supported.

## License

[MIT](LICENSE).
