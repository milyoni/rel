// Generated by CoffeeScript 1.4.0
(function() {
  var FactoryMethods, Nodes, exports;

  Nodes = require('./nodes/nodes');

  FactoryMethods = (function() {

    function FactoryMethods() {}

    FactoryMethods.prototype.createTableAlias = function(relation, name) {
      return new Nodes.TableAlias(relation, name);
    };

    FactoryMethods.prototype.createJoin = function(to, constraint, klass) {
      if (constraint == null) {
        constraint = null;
      }
      if (klass == null) {
        klass = Nodes.InnerJoin;
      }
      return new klass(to, constraint);
    };

    FactoryMethods.prototype.createStringJoin = function(to) {
      return this.createJoin(to, null, Nodes.StringJoin);
    };

    FactoryMethods.prototype.createAnd = function(clauses) {
      return new Nodes.And(clauses);
    };

    FactoryMethods.prototype.createOn = function(expr) {
      return new Nodes.On(expr);
    };

    FactoryMethods.prototype.grouping = function(expr) {
      return new Nodes.Grouping(expr);
    };

    return FactoryMethods;

  })();

  exports = module.exports = FactoryMethods;

}).call(this);
