export default WordBreak = (s, dict, answer) => {
  // console.log(s + '  ' + answer);
  var strLen = s.length;
  if (strLen === 0) {
    console.log(answer);
    return true;
  } else {
    var prefix = "";
    for (var i = 0; i < strLen; i++) {
      // add one char at a time
      prefix += s.charAt(i);
      // check if prefix exists in dictionary
      // if (dict.includes(prefix)) { // Array.prototype.includes() is an ES7 Feature
      if (dict.indexOf(prefix) > -1) {
        //add prefix to the answer and make a recursive call
        answer += prefix + " ";
        var suffix = s.slice(i + 1);
        if (WordBreak(suffix, dict, answer)) {
          return true;
        }
      }
      //console.log(prefix + '  backtrack');
    }
  }
};

var inputStr = "Ihavedog";
var inputDict = ["I", "have", "ha", "am", "this", "dog"];

if (!WordBreak(inputStr, inputDict, "")) {
  console.log("String can not broken.");
} // I ha have dog

var inputStr2 = "Ihavesdog";
if (!WordBreak(inputStr2, inputDict, "")) {
  console.log("String can not broken.");
} // String can not broken.
