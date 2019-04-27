import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import progress from './components/progress';


const init = () => {
  eat.eatDomStringBuilder();
  fight.fightDomStringBuilder();
  play.playDomStringBuilder();
  sleep.sleepDomStringBuilder();
  progress.progressDomStringBuilder();

};

init();
