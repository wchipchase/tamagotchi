import util from '../helpers/util';

// const healthyBtn = document.getElementById('healthy');
// const unhealthyBtn = document.getElementById('unhealthy');
// const eatCounter = document.getElementById('eat-counter');

let full = 100;

const addFood = () => {
  if (full <= 90) {
    full += 10;
    util.printToDom('full', full);
  } else {
    console.error('Full cannot exceed 100');
  }
};

const subtractFood = () => {
  if (full >= 3) {
    full -= 3;
    util.printToDom('full', full);
  } else {
    console.error('Full cannot be a negative');
  }
};

const eatButtonEvents = () => {
  document.getElementById('healthy').addEventListener('click', addFood);
  document.getElementById('unhealthy').addEventListener('click', subtractFood);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2 id="h2-eat">Eat</h2>';
  domString += '<button id="healthy">Healthy</button>';
  domString += '<button id="unhealthy">Unhealthy</button>';
  domString += `<h2 id="full">Fullness: ${full}</h2>`;

  util.printToDom('eat', domString);
  eatButtonEvents();
};

// healthyBtn.onclick = function () {
//   full += 10;
//   eatCounter.innerHTML = full;
// };

export default { domStringBuilder };
