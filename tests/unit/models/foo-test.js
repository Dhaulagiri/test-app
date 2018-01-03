import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';
import EmberObject from '@ember/object';

describe('Unit | Model | foo', function() {
  setupModelTest('foo', {
    // Specify the other units that are required for this test.
      needs: []
  });

  let arr;
  beforeEach(function() {
    arr = [
      EmberObject.create({ id: 1 }),
      EmberObject.create({ id: 2 })
    ];
  });

  it('tests', function() {
      expect(arr).to.contain('foo');
  });
});
