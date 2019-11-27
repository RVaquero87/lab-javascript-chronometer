var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var listOl      = document.getElementById('splits');

function printTime() {
  setInterval(function(){
    printSeconds();
    printMinutes();
  },1)
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  minutes = chronometer.twoDigitsNumber(minutes)
  //console.log('minutes', minutes)
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  seconds = chronometer.twoDigitsNumber(seconds)
  //console.log('seconds', seconds)
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  var newLi  = document.createElement('li');
  listOl.appendChild(newLi);
  let li = document.querySelector('#splits li:last-child');
  //console.log(li)
  let min = minDec.textContent+minUni.textContent;
  let seg = secDec.textContent+secUni.textContent;
  let milseg = milDec.textContent+milUni.textContent;
  li.innerHTML = min+':'+seg+':'+milseg;
}

function clearSplits() {
  listOl.innerHTML = ""
}

function setStopBtn() {
  chronometer.stopClick()
  clearInterval(chronometer.intervalId)
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  chronometer.startClick();
  printTime()
}

function setResetBtn() {
  chronometer.resetClick();
  printTime()
  clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(this.classList.contains('start')){
    this.classList.remove('start');
    this.classList.add('stop');
    this.innerHTML = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
    setStartBtn()
  }else{
    this.classList.remove('stop');
    this.classList.add('start');
    this.innerHTML = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(this.classList.contains('reset')){
    setResetBtn();
  }else{
    setSplitBtn();
  }
});