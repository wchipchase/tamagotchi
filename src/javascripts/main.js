import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import '../styles/main.scss';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
};

init();
