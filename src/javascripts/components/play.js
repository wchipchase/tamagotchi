import util from '../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-play">Play</h2>';
  domString += '<button id="superFun">Super Fun</button>';
  domString += '<button id="slightlyFun">Slightly Fun</button>';
  domString += '<h2 id="fun"></h2>';

  util.printToDom('play', domString);
};

export default { domStringBuilder };
