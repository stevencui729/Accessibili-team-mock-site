var HIDDEN_CLASS = 'hidden';

var synth = window.speechSynthesis;
synth.cancel();


const text = 'The site is not secure and' + 
            document.getElementById("audiotext").innerText +
            'Click the blue button to return to safety';

let utterThis = new SpeechSynthesisUtterance(text);
utterThis.rate = .95;
console.log(utterThis)

// logging functions for Speech Synthesis Utterance
utterThis.onstart = function(event) {
  console.log("started speaking")
}
utterThis.onend = function(event) {
  console.log("stopped speaking")
}
utterThis.onpause = function(event) {
  console.log("paused speaking")
}

document.getElementById("playButton").addEventListener("click", function() {
  console.log("clicked playButton")
  if (synth.speaking) {
    synth.resume(utterThis);
  } else {
    synth.speak(utterThis);
  }
})

document.getElementById("pauseButton").addEventListener("click", function() {
  console.log("clicked pauseButton")
  if (synth.speaking && !synth.paused) {
    synth.pause(utterThis);
  }
})

document.getElementById("stopButton").addEventListener("click", function() {
  console.log("clicked stopButton")
  synth.cancel();
})

document.getElementById('error-code').addEventListener('click', function() {
  document.getElementById("error-debugging-info").classList.toggle(HIDDEN_CLASS);
});


synth.speak(utterThis);