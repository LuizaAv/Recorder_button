




const recButton = document.getElementById("recBtn");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let record = false;
let recognition;

function converter(){
    try{
        recognition = new SpeechRecognition()
        recButton.classList.add("record")
        recognition.start()
        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            console.log(result)
          };
        
          recognition.onspeechend = () => {
            converter()
          }

          recognition.onerror = function(event) {
            console.error(event.error);
        };
    }catch(error) {
        console.error('Error accessing microphone:', error);
    }
}

function stopRecording(){
    recognition.stop()
    recButton.classList.remove("record")
    record = false
}

recButton.addEventListener("mousedown", () => {
    if(!record){
        converter()
        record = true
    }else{
        stopRecording()
    }
})