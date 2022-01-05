import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import Resolvable from './index';

chai.use(chaiAsPromised);
const { expect } = chai;

describe('Resolvable', () => {

  it('should be instantiable as a class (2.0 style)', () => {
    expect(new Resolvable()).to.not.be.undefined;
  });

  it('should be instantiable as a function (1.0 style)', () => {
    const makeResolvable = Resolvable;
    expect(makeResolvable()).to.not.be.undefined;
  });

  it('should be an instance of Promise', () => {
    expect(new Resolvable()).to.be.instanceof(Promise);
  });

  it('should resolve when called with external resolve function', async () => {
    let externalResolveCalled = false;
    const resolvable = new Resolvable();

    setImmediate(() => {
      externalResolveCalled = true;
      resolvable.resolve();
    });

    await resolvable;

    expect(externalResolveCalled).to.be.true;
    await expect(resolvable).to.be.fulfilled;
  });

  it('should reject when called with external reject function', async () => {
    const resolvable = new Resolvable();

    setImmediate(() => {
      resolvable.reject();
    });

    await expect(resolvable).to.be.rejected;
  });

  it('should return resolved value when called with external resolve function', async () => {
    const resolvable = new Resolvable();
    resolvable.resolve(42);

    await expect(resolvable).to.eventually.equal(42);
  });

  it('should reject with given error when called with external reject function', async () => {
    const resolvable = new Resolvable();
    const error = new Error('test');
    resolvable.reject(error);

    await expect(resolvable).to.be.rejectedWith(error);
  });

  it('should behave as parent promise when given a promise as constructor argument', async () => {
    const resolvingResolvable = new Resolvable(Promise.resolve(42));
    await expect(resolvingResolvable).to.eventually.equal(42);

    const rejectingResolvable = new Resolvable(Promise.reject(new Error('test')));
    await expect(rejectingResolvable).to.be.rejected;
  });

  it('should behave as promise if given promise executor function as constructor argument', async () => {
    const resolvingResolvable = new Resolvable((resolve) => { resolve(42);});
    await expect(resolvingResolvable).to.eventually.equal(42);

    const rejectingResolvable = new Resolvable((resolve, reject) => { reject(new Error('test'));});
    await expect(rejectingResolvable).to.be.rejected;
  });

});