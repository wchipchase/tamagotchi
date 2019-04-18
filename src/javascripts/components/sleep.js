import util from '../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-sleep">Sleep</h2>';
  domString += '<button id="nap">Take a Nap</button>';
  domString += '<button id="deepSleep">Deeply Slumber</button>';
  domString += '<h2 id="sleep"></h2>';

  util.printToDom('sleep', domString);
};

export default { domStringBuilder };
