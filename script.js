function palindrome(string) {
  var re = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(re, '');
  var strLength = string.length;
  for (let i = 0; i < strLength/2; i++) {
    if(string[i] !== string[strLength - 1 - i]){
      return false;
    }
  }
  return true;



}

palindrome('Ivo loto lovi');