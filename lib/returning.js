(function() {

  // Establish the root object, "window" in the browser, or "global" on the server.
  var root = this;

  root.returning = function(obj, func) {
    if(func) { func(obj); }
    return obj;
  };

})();