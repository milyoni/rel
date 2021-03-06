// Generated by CoffeeScript 1.4.0
(function() {
  var Nodes, TreeManager, UpdateManager, UpdateStatement, exports, u,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  u = require('underscore');

  TreeManager = require('./tree-manager');

  UpdateStatement = require('./nodes/update-statement');

  Nodes = require('./nodes/nodes');

  UpdateManager = (function(_super) {

    __extends(UpdateManager, _super);

    function UpdateManager() {
      UpdateManager.__super__.constructor.call(this);
      this.ast = new UpdateStatement();
      this.ctx = this.ast;
    }

    UpdateManager.prototype.take = function(limit) {
      if (limit != null) {
        this.ast.limit = new Nodes.Limit(limit);
      }
      return this;
    };

    UpdateManager.prototype.key = function(key) {
      return this.ast.key = key;
    };

    UpdateManager.prototype.order = function() {
      var expr;
      expr = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.ast.orders = expr;
      return this;
    };

    UpdateManager.prototype.table = function(table) {
      this.ast.relation = table;
      return this;
    };

    UpdateManager.prototype.wheres = function() {
      var expr;
      expr = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return this.ast.wheres = expr;
    };

    UpdateManager.prototype.where = function(expr) {
      this.ast.wheres.push(expr);
      return this;
    };

    UpdateManager.prototype.set = function(values) {
      var _this = this;
      if (values.constructor === String) {
        this.ast.values = [values];
      } else if (values.constructor === Nodes.SqlLiteral) {
        this.ast.values = [values];
      } else {
        this.ast.values = values.map(function(val) {
          var column, value;
          column = val[0];
          value = val[1];
          return new Nodes.Assignment(new Nodes.UnqualifiedColumn(column), value);
        });
      }
      return this;
    };

    return UpdateManager;

  })(TreeManager);

  exports = module.exports = UpdateManager;

}).call(this);
