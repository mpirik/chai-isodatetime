declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Chai {
    interface Assertion {
      equalDate(expected?: Date | null, message?: string): void;
    }


    export interface Assert {
      equalDate(val?: Date | null, exp?: Date | null, msg?: string): void;
    }
  }
}

export function isoDateTime(chai: Chai.ChaiStatic): void {
  chai.Assertion.addChainableMethod('equalDate', function equalDate(this: Chai.AssertionStatic, expected?: Date | null): void {
    const actualValue = this._obj && Object.prototype.toString.call(this._obj) === '[object Date]' ? this._obj.toISOString() : this._obj;
    const expectedValue = expected && Object.prototype.toString.call(expected) === '[object Date]' ? expected.toISOString() : expected;

    return this.assert(actualValue === expectedValue, `Expected ${actualValue} to equal ${expectedValue}`, `Expected ${actualValue} to not equal ${expectedValue}`, String(actualValue), String(expectedValue));
  });

  // eslint-disable-next-line no-param-reassign,@typescript-eslint/unbound-method
  chai.assert.equalDate = (val?: Date | null, exp?: Date | null, msg?: string): void => {
    new chai.Assertion(val, msg).to.be.equalDate(exp);
  };
}
