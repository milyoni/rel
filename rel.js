// Generated by CoffeeScript 1.4.0
(function() {
  var Nodes, Range, Rel, Table, exports;

  Nodes = require('./lib/nodes/nodes');

  Range = require('./lib/range');

  Table = require('./lib/table');

  Rel = {
    VERSION: '0.0.3',
    sql: function(rawSql) {
      return new Nodes.SqlLiteral(rawSql);
    },
    star: function() {
      return this.sql('*');
    },
    range: function(start, finish) {
      return new Range(start, finish);
    },
    Table: Table
  };

  exports = module.exports = Rel;

}).call(this);
