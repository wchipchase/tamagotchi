import util from '../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-fight">Fight</h2>';
  domString += '<button id="runAway">Run Away</button>';
  domString += '<button id="commitViolence">Commit Violence</button>';
  domString += '<h2 id="fight"></h2>';

  util.printToDom('fight', domString);
};

export default { domStringBuilder };
