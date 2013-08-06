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
  }else if (obj == null){
  	return "null";
  }else if (_.isEmpty(obj)){
    return '{}';
  }else if (typeof obj === 'object'){

    for (var key in obj){
      if (obj[key] === undefined || typeof obj[key] === 'function'){
        console.log('Im looping');
        return '{}';
      }
      else{
        return '{' + _.map(obj, function(key, value){return stringifyJSON(value) + ':' + stringifyJSON(key);}).join(',') + '}';
      }
    }
  }else{
  	return obj + "";
  }




};
