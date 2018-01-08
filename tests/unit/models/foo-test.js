import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';
import Foo from 'test-app/models/foo';

describe('Unit | Model | foo', function() {
  setupModelTest('foo', {
    // Specify the other units that are required for this test.
      needs: []
  });

  let arr;
  beforeEach(function() {
    arr = [
      Foo.create({ id: 1}),
      Foo.create({ id: 2 })
    ];
  });

  it('tests', function() {
      expect(arr).to.contain('foo');
  });

  it.only('test the other thing', function() {
    expect(Foo.all()).to.deep.equal([
      Foo.A(),
      Foo.B(),
      Foo.C(),
      Foo.D(),
      Foo.E()
    ])
  });
});
