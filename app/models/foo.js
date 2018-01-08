import Ember from 'ember';

export default Ember.Object.extend({
  isA: Ember.computed.match('name', /^a$/i),
}).reopenClass({
  all() {
    return [
      this.A(),
      this.B(),
      this.C(),
      this.D(),
      this.E(),
    ];
  },

  A() {
    return this.create({
      name: 'a'
    });
  },

  B() {
    return this.create({
      name: 'b'
    });
  },

  C() {
    return this.create({
      name: 'c'
    });
  },

  D() {
    return this.create({
      name: 'd'
    });
  },

  E() {
    return this.create({
      name: 'e'
    });
  }
});
