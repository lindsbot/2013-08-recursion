// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var results = [];

  var checkClass = function(node){

    var classes = node.classList || [];
    for (var i = 0; i < classes.length; i++) {
      if (classes[i] === className) {
        results.push(node);
      }
    }

    var children = node.childNodes || [];

    for(var j = 0; j < children.length; j++) {
      checkClass(children[j]);
    }
  };

  checkClass(document.body);
  return results;

};




