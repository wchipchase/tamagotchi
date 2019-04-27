import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
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
