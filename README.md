# chai-isodatetime

[![NPM version](https://img.shields.io/npm/v/chai-isodatetime.svg?style=flat)](https://npmjs.org/package/chai-isodatetime)

Plugin for Chai to use .toISODate() for date comparisons

## Usage

```ts
import * as chai from 'chai';
import { isoDateTime } from 'chai-isodatetime';
chai.use(isoDateTime);
```

## Assertions

* equalDate - Checks if both dates equal each other using .toISODate() for comparison

```ts
const date1 = new Date(2013, 4, 30, 16, 5);
const date2 = new Date(2013, 4, 30, 17);

date1.should.equalDate(date2);
expect(date1).to.equalDate(date2)
assert.equalDate(date1, date2)
```

### Acknowledgement

Thanks to [chai-datetime](https://github.com/mguterl/chai-datetime) for getting me most of the way there!

## License
MIT
