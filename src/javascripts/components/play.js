import util from '../helpers/util';


let play = 50;

const addSuperFun = () => {
  if (play <= 50) {
    play += 50;
    util.printToDom('play', play);
  } else {
    console.error('play cannot exceed 100');
  }
};

const addFun = () => {
  if (play <= 98) {
    play += 2;
    util.printToDom('play', play);
  } else {
    console.error('play cannot exceed 100');
  }
};

const playButtonEvents = () => {
  document.getElementById('fun').addEventListener('click', addFun);
  document.getElementById('super-fun').addEventListener('click', addSuperFun);
};

const playDomStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-play">Play</h2>';
  domString += '<button id="fun">Fun</button>';
  domString += '<button id="super-fun">Super Fun</button>';
  domString += `<h2 id="play">Playfulness: ${play}</h2>`;

  util.printToDom('play', domString);
  playButtonEvents();
};

export default { playDomStringBuilder };

