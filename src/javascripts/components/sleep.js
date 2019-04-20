import util from '../helpers/util';

let sleep = 50;

const addNap = () => {
  if (sleep <= 50) {
    sleep += 50;
    util.printToDom('sleep', sleep);
  } else {
    console.error('sleep cannot exceed 100');
  }
};

const addSlumber = () => {
  if (sleep <= 40) {
    sleep += 60;
    util.printToDom('sleep', sleep);
  } else {
    console.error('sleep cannot exceed 100');
  }
};

const sleepButtonEvents = () => {
  document.getElementById('nap').addEventListener('click', addNap);
  document.getElementById('slumber').addEventListener('click', addSlumber);
};

const sleepDomStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-sleep">Sleep</h2>';
  domString += '<button id="nap">Nap</button>';
  domString += '<button id="slumber">Slumber</button>';
  domString += `<h2 id="sleep">Sleepiness: ${sleep}</h2>`;

  util.printToDom('sleep', domString);
  sleepButtonEvents();
};

export default { sleepDomStringBuilder };
