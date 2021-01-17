// STEP 6
(function (window) {
// STEP 7
  var byeSpeaker = {}
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";
// STEP 8
  byeSpeaker.speak = function (nomi) {
  console.log(speakWord + " " + nomi);
}
// STEP 9
window.byeSpeaker = byeSpeaker;

})(window);