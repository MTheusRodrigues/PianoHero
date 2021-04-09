
const keys = document.querySelectorAll(".key")

class Instrumento {
  set nameInstrument(value) {
    this._nameInstrument = value;
  }
  get nameInstrument() {
    return this._nameInstrument;
  }
  set octaveInstrument(value) {
    this._octaveInstrument = value;
  }
  get octaveInstrument() {
    return this._octaveInstrument;
  }
}
class Chords {
  set firstNote(value) {
    this._firstNote = value;
  }
  get firstNote() {
    return this._firstNote;
  }
  set secondNode(value) {
    this._secondNode = value;
  }
  get secondNote() {
    return this._secondNode;
  }
  set thirdNote(value) {
    this._thirdNote = value;
  }
  get thirdNote() {
    return this._thirdNote;
  }
}

let newInstr = new Instrumento ()
let newChords = new Chords ()

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);
  
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  console.log(audioKeyCode)
  const cantFoundAnyKey = !key
 
  if(cantFoundAnyKey) {
    return;
    
  }
  
  addPlayingClass(key)
  playAudio(audioKeyCode)
  alterTextDisplayKeys(audioKeyCode)

}







function addPlayingClass(key) {
  key.classList.add('playing')
  
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keypress"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

  function playAudio(audioKeyCode) {

    let instrumentPlay = (newInstr._nameInstrument)
    if (instrumentPlay === 'piano') {
      let instrumentPlayOctave = (newInstr._octaveInstrument)
      if (instrumentPlayOctave === 'octoUp'){
        const audio = document.querySelector(`.piano-octave-up audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDef'){
        const audio = document.querySelector(`.piano-octave-default audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDown'){
        const audio = document.querySelector(`.piano-octave-down audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
    }

    if (instrumentPlay === 'synth') {
      let instrumentPlayOctave = (newInstr._octaveInstrument)
      if (instrumentPlayOctave === 'octoUp'){
        const audio = document.querySelector(`.synth-octave-up audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDef'){
        const audio = document.querySelector(`.synth-octave-default audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDown'){
        const audio = document.querySelector(`.synth-octave-down audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
    }

    if (instrumentPlay === 'flute') {
      let instrumentPlayOctave = (newInstr._octaveInstrument)
      if (instrumentPlayOctave === 'octoUp'){
        const audio = document.querySelector(`.flute-octave-up audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDef'){
        const audio = document.querySelector(`.flute-octave-default audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDown'){
        const audio = document.querySelector(`.flute-octave-down audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }

    }


    if (instrumentPlay === 'bass') {
      let instrumentPlayOctave = (newInstr._octaveInstrument)
      if (instrumentPlayOctave === 'octoUp'){
        const audio = document.querySelector(`.bass-octave-up audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDef'){
        const audio = document.querySelector(`.bass-octave-default audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      if (instrumentPlayOctave === 'octoDown'){
        const audio = document.querySelector(`.bass-octave-down audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
    }
  }
 


  

  

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
    
  })

  window.addEventListener("keypress", playNote)

}
const displayInstrunents = document.querySelector('#piano-display-instruments')
const displayNotes = document.querySelector('#piano-display-notes')


const displayMode = document.querySelector('#piano-display-mode')


const spanInstruments = document.querySelector('#span');
const spanOctave = document.querySelector('#span-octave');
const spanMode = document.querySelector('#span-mode');
const btnPiano = document.querySelector('#imgPiano')
const btnCello = document.querySelector('#imgCello')
const btnSynth = document.querySelector('#imgSynth')
const btnViolin = document.querySelector('#imgViolin')
const btnFlute = document.querySelector('#imgFlute')
const btnBass = document.querySelector('#imgBass')
const btnOctaveUp = document.querySelector('#up')
const btnOctaveDown = document.querySelector('#down')
const btnModeNote = document.querySelector('#mode-note')
const btnModeChords = document.querySelector('#mode-chords')


const displayNote = document.querySelector('#note')
const displayOctave = document.querySelector('#octave')
const displayChords = document.querySelector('#chords')


function insertIconPianoDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/piano-default.png" alt="piano" id="imgPiano"class="instruments-dispaly"><span id="span-dispaly">PIANO</span>'
}
function insertIconCelloDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/cello-default.png" alt="cello" id="imgCello" class="instruments-dispaly"><span id="span-dispaly">CELLO</span>'
}
function insertIconSynthDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/sintetizador-default.png" alt="sintetizador" id="imgSynth" class="instruments-dispaly"><span id="span-dispaly">SYNTHESIZER</span>'
}
function insertIconViolinDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/violino-default.png" alt="violino" id="imgViolin" class="instruments-dispaly"><span id="span-dispaly">VIOLIN</span>'
}
function insertIconFluteDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/flauta-transversal-default.png" alt="flauta-transversal" id="imgFlute" class="instruments-dispaly"><span id="span-dispaly">FLUTE</span>'
}
function insertIconBassDisplay() {
  displayInstrunents.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/bass-guitar-default.png" alt="bass-guitar" id="imgBass" class="instruments-dispaly"><span id="span-dispaly">BASS</span>'
}
function alterIconModeNote() {
  displayMode.innerHTML = '<span class="top-span">MODE</span> <img src="./img/Instruments/musica-default.png" alt="sintetizador" class="instruments-dispaly"><span id="span-dispaly">NOTE</span>'
}
function alterIconModeCord() {
  displayMode.innerHTML = '<span class="top-span">MODE</span> <img src="./img/Instruments/notas-musicais-default.png" alt="sintetizador" class="instruments-dispaly"><span id="span-dispaly">CHORDS</span>'
}


function alterTextOnPiano() {
  spanInstruments.textContent = "PIANO";
}
function alterTextOnCello() {
  spanInstruments.textContent = "CELLO";
}
function alterTextOnSynth() {
  spanInstruments.textContent = "SYNTHESIZER";
}
function alterTextOnViolin() {
  spanInstruments.textContent = "VIOLIN";  
}
function alterTextOnFlute() {
  spanInstruments.textContent = "FLUTE";  
}
function alterTextOnBass() {
  spanInstruments.textContent = "BASS";  
}
function alterTextOut() {
  spanInstruments.textContent = "INSTRUMENTS";
}
function alterTextOnUpOctave() {
  spanOctave.textContent = "UP";
}
function alterTextOnDownOctave() {
  spanOctave.textContent = "DOWN";
}
function alterTextOctaveOut() {
  spanOctave.textContent = "OCTAVE";
}
function alterTextOnNote() {
  spanMode.textContent = "NOTE";
}
function alterTextOnCord() {
  spanMode.textContent = "CHORDS";
}
function alterTextOutMode() {
  spanMode.textContent = "MODE";
}

function alterTextDisplayKeys(audioKeyCode) {
  let keys = audioKeyCode
  
  if(keys == 92 || keys == 74) {
    displayNote.textContent = 'C'
    newChords._firstNote = 'C'
  }
  if(keys == 81 || keys == 73) {
    displayNote.textContent = 'C#/Db'
  }
  if(keys == 65 || keys == 75) {
    displayNote.textContent = 'D'
  }
  if(keys == 87 || keys == 79) {
    displayNote.textContent = 'D#/Eb'
  }
  if(keys == 83 || keys == 76) {
    displayNote.textContent = 'E'
    newChords._secondNode = 'E'
  }
  if(keys == 68 || keys == 186) {
    displayNote.textContent = 'F'
  }
  if(keys == 82 || keys == 80) {
    displayNote.textContent = 'F#/Gb'
  }
  if(keys == 70 || keys == 222) {
    displayNote.textContent = 'G'
    newChords.thirdNote = 'G'
  }
  if(keys == 84 || keys == 219) {
    displayNote.textContent = 'G#/Ab'
  }
  if(keys == 71 || keys == 220) {
    displayNote.textContent = 'A'
  }
  if(keys == 89 || keys == 221) {
    displayNote.textContent = 'A#/Bb'
  }
  if(keys == 72 || keys == 193) {
    displayNote.textContent = 'B'
  }

 if((newChords._firstNote === 'C') && (newChords._secondNode === 'E') && (newChords._thirdNote === 'G')) {
   displayChords.textContent = "C"
 }
 

  
  
 
 
  



}
function alterTextDisplayOctvUp (){
  if(newInstr._octaveInstrument === 'octoUp') {
    displayOctave.textContent = "+1" 
  }
  if(newInstr._octaveInstrument === 'octoDef') {
    displayOctave.textContent = "0" 
  }
  
}
function alterTextDisplayOctvDown (){
  if(newInstr._octaveInstrument === 'octoDown') {
    displayOctave.textContent = "-1" 
  }
  if(newInstr._octaveInstrument === 'octoDef') {
    displayOctave.textContent = "0" 
  }
  
}



function insertPianoPlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'piano'
  
  insertIconPianoDisplay()
}


function insertCelloPlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'cello'
  
  insertIconCelloDisplay
}



function insertSynthPlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'synth'
  
  insertIconSynthDisplay()
}

function insertFlutePlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'flute'
  
  insertIconFluteDisplay()
}

function insertBassPlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'bass'
  
  insertIconBassDisplay()
}





function insertOctaveUp() {
  if(newInstr._octaveInstrument === 'octoDef') {
    newInstr._octaveInstrument = 'octoUp'
    
  }
  if(newInstr._octaveInstrument === 'octoDown') {
    newInstr._octaveInstrument = 'octoDef'
  }
  alterTextDisplayOctvUp()
}

function insertOctaveDown() {
  if(newInstr._octaveInstrument === 'octoDef') {
    newInstr._octaveInstrument = 'octoDown'
  }
  if(newInstr._octaveInstrument === 'octoUp') {
    newInstr._octaveInstrument = 'octoDef'
  }
  alterTextDisplayOctvDown()
}

btnPiano.addEventListener('click',insertPianoPlay )
btnCello.addEventListener('click', insertIconCelloDisplay)
btnSynth.addEventListener('click', insertSynthPlay)
btnViolin.addEventListener('click', insertIconViolinDisplay)
btnFlute.addEventListener('click', insertFlutePlay)
btnBass.addEventListener('click', insertBassPlay)

btnOctaveUp.addEventListener('click', insertOctaveUp)
btnOctaveDown.addEventListener('click', insertOctaveDown)



btnModeNote.addEventListener('click', alterIconModeNote)
btnModeChords.addEventListener('click', alterIconModeCord)






btnOctaveUp.addEventListener('mouseover', alterTextOnUpOctave)
btnOctaveDown.addEventListener('mouseover', alterTextOnDownOctave)
btnOctaveUp.addEventListener('mouseout', alterTextOctaveOut)
btnOctaveDown.addEventListener('mouseout', alterTextOctaveOut)
btnModeNote.addEventListener('mouseover', alterTextOnNote)
btnModeNote.addEventListener('mouseout', alterTextOutMode)
btnModeChords.addEventListener('mouseover', alterTextOnCord)
btnModeChords.addEventListener('mouseout', alterTextOutMode)
btnPiano.addEventListener('mouseover', alterTextOnPiano)
btnPiano.addEventListener('mouseout', alterTextOut)
btnCello.addEventListener('mouseover', alterTextOnCello)
btnCello.addEventListener('mouseout', alterTextOut)
btnSynth.addEventListener('mouseover', alterTextOnSynth)
btnSynth.addEventListener('mouseout', alterTextOut)
btnViolin.addEventListener('mouseover', alterTextOnViolin)
btnViolin.addEventListener('mouseout', alterTextOut)
btnFlute.addEventListener('mouseover', alterTextOnFlute)
btnFlute.addEventListener('mouseout', alterTextOut)
btnBass.addEventListener('mouseover', alterTextOnBass)
btnBass.addEventListener('mouseout', alterTextOut)


window.addEventListener("load", registerEvents)


