// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elements = [];
  var elem = document.getElementsByTagName('body')[0];


  // base case
  if (elem.hasChildNodes() === false) {
  	if (elem.className === className) {
  		return elements.push(elem);
  	}
  }

  else {
  	if (elem.className === className) {
  		elements.push(elem);
  	}
  	var len = elem.childNodes.length;
  	for (var i = 0; i < len; i++) {
		getElementsByClassName(className);
  	}
  }

  return elements;

};
