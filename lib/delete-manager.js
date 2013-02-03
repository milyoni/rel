// Generated by CoffeeScript 1.4.0
(function() {
  var DeleteManager, DeleteStatement, Nodes, TreeManager, exports, u,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  u = require('underscore');

  TreeManager = require('./tree-manager');

  DeleteStatement = require('./nodes/delete-statement');

  Nodes = require('./nodes/nodes');

  DeleteManager = (function(_super) {

    __extends(DeleteManager, _super);

    function DeleteManager() {
      DeleteManager.__super__.constructor.call(this);
      this.ast = new DeleteStatement();
      this.ctx = this.ast;
    }

    DeleteManager.prototype.from = function(relation) {
      this.ast.relation = relation;
      return this;
    };

    DeleteManager.prototype.wheres = function(list) {
      return this.ast.wheres = list;
    };

    return DeleteManager;

  })(TreeManager);

  exports = module.exports = DeleteManager;

}).call(this);