import util from '../helpers/util';

let fight = 90;

const addStrength = () => {
  if (fight <= 90) {
    fight += 10;
    util.printToDom('fight', fight);
  } else {
    console.error('fight cannot exceed 100');
  }
};

const subtractStrength = () => {
  if (fight >= 3) {
    fight -= 3;
    util.printToDom('fight', fight);
  } else {
    console.error('fight cannot be a negative');
  }
};

const eatButtonEvents = () => {
  document.getElementById('runAway').addEventListener('click', addStrength);
  document.getElementById('commitViolence').addEventListener('click', subtractStrength);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-fight">Fight</h2>';
  domString += '<button id="runAway">Run Away</button>';
  domString += '<button id="commitViolence">Commit Violence</button>';
  domString += `<h2 id="fight">fightness: ${fight}</h2>`;

  util.printToDom('fight', domString);
  eatButtonEvents();
};

export default { domStringBuilder };
