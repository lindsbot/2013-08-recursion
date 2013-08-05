// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'string'){
    return '\"' + obj + '\"';
  }else if (typeof obj === 'boolean'){
    return obj + '';
  }else if (typeof obj === 'number'){
    return obj + '';
  }else if (obj == []){
  	return obj + '';
  }else if (_.isArray(obj)){
    return '[' + _.map(obj, stringifyJSON).join(',') + ']';
  }else if (obj == {}){
  	return '{}';
  }else if (obj == null){
  	return "null";
  }else if (typeof obj === 'object'){
  	for (var key in obj){
  	  return '{' + stringifyJSON(key) + '}';
  	}
  }else{
  	return obj + "";
  }




};
