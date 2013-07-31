// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	
	var body = document.body;
	var elements = [];

	var classTest = function(element) {
		//base cases
		if (element.hasChildNodes() === false) {
			if (element.className === className) {
				elements.push(element);
			}
		}

		//recursive case
		else {
			var children = element.childNodes;
			if (element.className === className) {
				elements.push(element);
			}
			for (var i = 0, len = children.length; i < len; i++) {
				classTest(children[i]);
			}

		}
	};

	classTest(body);

	return elements;

};







  // your code here
  // var elements = [];

  // var classTest = function(element, name) {
  // 	 // base case
  // 	if (element.hasChildNodes() === false) {
  // 		if (element.className === name) {
  // 			return elements.push(element);
  // 		}
  // 	} 
  // 	 // recursive case
  // 	var children = element.childNodes;
  // 	else {
  // 		if (element.className === name) {
  // 			elements.push(element);
  // 		}
  // 		var len = children.length;
  // 		for (var i = 0; i < len; i++) {
  // 			classTest(children[i], className);
  // 		}
  // 	}
  // };

  // return elements;










