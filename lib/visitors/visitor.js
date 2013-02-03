// Generated by CoffeeScript 1.4.0
(function() {
  var Visitor, exports;

  Visitor = (function() {

    function Visitor() {}

    Visitor.prototype.accept = function(object) {
      return this.visit(object);
    };

    Visitor.prototype.visit = function(object) {
      return this["visitRelNodes" + object.constructor.name](object);
    };

    return Visitor;

  })();

  exports = module.exports = Visitor;

}).call(this);