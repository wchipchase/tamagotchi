import util from '../helpers/util';

let fight = 100;

const addStrength = () => {
  if (fight <= 99) {
    fight += 1;
    util.printToDom('fight', fight);
  } else {
    console.error('fight cannot exceed 100');
  }
};

const subtractStrength = () => {
  if (fight >= 10) {
    fight -= 10;
    util.printToDom('fight', fight);
  } else {
    console.error('fight cannot be a negative');
  }
};

const fightButtonEvents = () => {
  document.getElementById('runAway').addEventListener('click', addStrength);
  document.getElementById('commitViolence').addEventListener('click', subtractStrength);
};

const fightDomStringBuilder = () => {

  let domString = '';
  domString += '<h2 id="h2-fight">Fight</h2>';
  domString += '<button id="runAway">Run Away</button>';
  domString += '<button id="commitViolence">Commit Violence</button>';
  domString += `<h2 id="fight">Fightness: ${fight}</h2>`;

  util.printToDom('fight', domString);
  fightButtonEvents();
};

export default { fightDomStringBuilder };

