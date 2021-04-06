
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

let newInstr = new Instrumento ()

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);
 
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
 
  const cantFoundAnyKey = !key
 
  if(cantFoundAnyKey) {
    return;
    
  }

  addPlayingClass(key)

  playAudio(audioKeyCode)

}

function addPlayingClass(key) {
  key.classList.add('playing')
  
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

  function playAudio(audioKeyCode) {

    let instrumentPlay = (newInstr._nameInstrument)

    if (instrumentPlay === 'guitar') {

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
    if (instrumentPlay === 'bass') {
      const audio = document.querySelector(`.bass-octave-default audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
    }
    if (instrumentPlay === 'synth') {
      const audio = document.querySelector(`.piano-octave-down audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
    }
    if (instrumentPlay === 'flute') {
      const audio = document.querySelector(`.piano-octave-up audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
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

  window.addEventListener("keydown", playNote)
}
const displayL = document.querySelector('#piano-display-lft')
const displayR = document.querySelector('#piano-display-right')
const spanInstruments = document.querySelector('#span');
const spanOctave = document.querySelector('#span-octave');
const spanMode = document.querySelector('#span-mode');
const btnPiano = document.querySelector('#imgPiano')
const btnGuitar = document.querySelector('#imgGuitar')
const btnSynth = document.querySelector('#imgSynth')
const btnViolin = document.querySelector('#imgViolin')
const btnFlute = document.querySelector('#imgFlute')
const btnBass = document.querySelector('#imgBass')
const btnOctaveUp = document.querySelector('#up')
const btnOctaveDown = document.querySelector('#down')
const btnModeNote = document.querySelector('#mode-note')
const btnModeCords = document.querySelector('#mode-cords')

function insertIconPianoDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/piano.png" alt="piano" id="imgPiano"class="instruments-dispaly"><span id="span-dispaly">PIANO</span>'
}
function insertIconGuitarDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/violao-classico.png" alt="violao-classico" id="imgGuitar" class="instruments-dispaly"><span id="span-dispaly">GUITAR</span>'
}
function insertIconSynthDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/sintetizador.png" alt="sintetizador" id="imgSynth" class="instruments-dispaly"><span id="span-dispaly">SYNTHESIZER</span>'
}
function insertIconViolinDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/violino.png" alt="violino" id="imgViolin" class="instruments-dispaly"><span id="span-dispaly">VIOLIN</span>'
}
function insertIconFluteDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/flauta-transversal.png" alt="flauta-transversal" id="imgFlute" class="instruments-dispaly"><span id="span-dispaly">FLUTE</span>'
}
function insertIconBassDisplay() {
  displayL.innerHTML = '<span class="top-span">INSTRUMENTS</span> <img src="./img/Instruments/bass-guitar.png" alt="bass-guitar" id="imgBass" class="instruments-dispaly"><span id="span-dispaly">BASS</span>'
}
function alterIconModeNote() {
  displayR.innerHTML = '<span class="top-span">MODE</span> <img src="./img/Instruments/musica.png" alt="sintetizador" class="instruments-dispaly"><span id="span-dispaly">NOTE</span>'
}
function alterIconModeCord() {
  displayR.innerHTML = '<span class="top-span">MODE</span> <img src="./img/Instruments/notas-musicais.png" alt="sintetizador" class="instruments-dispaly"><span id="span-dispaly">CORDS</span>'
}


function alterTextOnPiano() {
  spanInstruments.textContent = "PIANO";
}
function alterTextOnGuitar() {
  spanInstruments.textContent = "GUITAR";
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
  spanMode.textContent = "CORDS";
}
function alterTextOutMode() {
  spanMode.textContent = "MODE";
}



function insertPianoPlay() {
  newInstr._octaveInstrument = 'octoDef'
  newInstr._nameInstrument = 'guitar'
  
  insertIconPianoDisplay()
}



function insertBassPlay() {
  
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
}

function insertOctaveDown() {
  if(newInstr._octaveInstrument === 'octoDef') {
    newInstr._octaveInstrument = 'octoDown'
  }
  if(newInstr._octaveInstrument === 'octoUp') {
    newInstr._octaveInstrument = 'octoDef'
  }
}

btnPiano.addEventListener('click',insertPianoPlay )
btnGuitar.addEventListener('click', insertIconGuitarDisplay)
btnSynth.addEventListener('click', insertIconSynthDisplay)
btnViolin.addEventListener('click', insertIconViolinDisplay)
btnFlute.addEventListener('click', insertIconFluteDisplay)
btnBass.addEventListener('click', insertBassPlay)

btnOctaveUp.addEventListener('click', insertOctaveUp)
btnOctaveDown.addEventListener('click', insertOctaveDown)



btnModeNote.addEventListener('click', alterIconModeNote)
btnModeCords.addEventListener('click', alterIconModeCord)


btnOctaveUp.addEventListener('mouseover', alterTextOnUpOctave)
btnOctaveDown.addEventListener('mouseover', alterTextOnDownOctave)
btnOctaveUp.addEventListener('mouseout', alterTextOctaveOut)
btnOctaveDown.addEventListener('mouseout', alterTextOctaveOut)
btnModeNote.addEventListener('mouseover', alterTextOnNote)
btnModeNote.addEventListener('mouseout', alterTextOutMode)
btnModeCords.addEventListener('mouseover', alterTextOnCord)
btnModeCords.addEventListener('mouseout', alterTextOutMode)
btnPiano.addEventListener('mouseover', alterTextOnPiano)
btnPiano.addEventListener('mouseout', alterTextOut)
btnGuitar.addEventListener('mouseover', alterTextOnGuitar)
btnGuitar.addEventListener('mouseout', alterTextOut)
btnSynth.addEventListener('mouseover', alterTextOnSynth)
btnSynth.addEventListener('mouseout', alterTextOut)
btnViolin.addEventListener('mouseover', alterTextOnViolin)
btnViolin.addEventListener('mouseout', alterTextOut)
btnFlute.addEventListener('mouseover', alterTextOnFlute)
btnFlute.addEventListener('mouseout', alterTextOut)
btnBass.addEventListener('mouseover', alterTextOnBass)
btnBass.addEventListener('mouseout', alterTextOut)


window.addEventListener("load", registerEvents)


