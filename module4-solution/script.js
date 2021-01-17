// Module 4 Assignment
// STEP 1
(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// STEP 10
  for (var nomi in names) {
// STEP 11
    var firstLetter = names[nomi].charAt(0).toLowerCase();
// STEP 12:
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[nomi]);
  } else {
  helloSpeaker.speak(names[nomi]);
  }
}

})();