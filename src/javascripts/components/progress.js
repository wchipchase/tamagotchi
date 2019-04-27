import eat from './eat';
import fight from './fight';
import play from './play';
import sleep from './sleep';
import util from '../helpers/util';

const progress = Math.floor(((eat.full + fight.fight + play.play + sleep.sleep) / 300) * 100);

const progressDomStringBuilder = () => {
  let domString = '';
  domString += '<br>';
  domString += '<h2 id="h2-progress">Progress</h2>';
  domString += `<h2 id="showFull">Progress: ${progress}</h2>`;
  domString += '<h1 id="error"></h2>';
  domString += '<hr>';


  util.printToDom('progress', domString);
};

export default { progressDomStringBuilder };
