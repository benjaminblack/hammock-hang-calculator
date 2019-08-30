const DEFAULT_DISTANCE_BETWEEN_TREES = 15.0;
const DEFAULT_RIDGELINE_LENGTH = 108.0;
const DEFAULT_SIT_HEIGHT = 18.0;
const DEFAULT_HANG_ANGLE = 30.0;

const UNITS_IMPERIAL = 'English';
const UNITS_METRIC = 'Metric';

const distanceBetweenTreesInput = document.querySelector('#dt');
const ridgelineLengthInput = document.querySelector('#len');
const sitHeightInput = document.querySelector('#sit');
const hangAngleInput = document.querySelector('#angle');
const weightInput = document.querySelector('#weight');
const ridgelineLengthSelector = document.querySelector('#list');

function getUnitsType() {
  const type = +document.querySelector('input[type="radio"][name="units"]:checked').value;

  if (type === 0) {
    return UNITS_IMPERIAL;
  } else {
    return UNITS_METRIC;
  }
}

function setEnglish() {
  distanceBetweenTreesInput.value = math.unit(+distanceBetweenTreesInput.value, 'm').toNumber('ft');
  ridgelineLengthInput.value = math.unit(+ridgelineLengthInput.value, 'cm').toNumber('in');
  sitHeightInput.value = math.unit(+sitHeightInput.value, 'cm').toNumber('in');
  weightInput.value = math.unit(+weightInput.value, 'kg').toNumber('lb');

  hang();
}

function setMetric() {
  distanceBetweenTreesInput.value = math.unit(+distanceBetweenTreesInput.value, 'ft').toNumber('m');
  ridgelineLengthInput.value = math.unit(+ridgelineLengthInput.value, 'in').toNumber('cm');
  sitHeightInput.value = math.unit(+sitHeightInput.value, 'in').toNumber('cm');
  weightInput.value = math.unit(+weightInput.value, 'lb').toNumber('kg');

  hang();
}

function shear() {
  const weight = +weightInput.value;
  const hangAngle = +hangAngleInput.value;
  const force = weight / (2 * Math.tan(hangAngle * (Math.PI / 180)));
  return force.toFixed(2);
}

function tension() {
  const weight = +weightInput.value;
  const hangAngle = +hangAngleInput.value;
  const force = weight / (2 * Math.sin(hangAngle * (Math.PI / 180)));
  return force.toFixed(2);
}

function hang() {
  const weight = +weightInput.value;
  const units = getUnitsType();

  hangAngleInput.value = hangAngleInput.value || DEFAULT_HANG_ANGLE;

  if (units === UNITS_IMPERIAL) {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || DEFAULT_DISTANCE_BETWEEN_TREES;
    ridgelineLengthInput.value = ridgelineLengthInput.value || DEFAULT_RIDGELINE_LENGTH;
    sitHeightInput.value = sitHeightInput.value || DEFAULT_SIT_HEIGHT;
  } else {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || math.unit(DEFAULT_DISTANCE_BETWEEN_TREES, 'ft').toNumber('m');
    ridgelineLengthInput.value = ridgelineLengthInput.value || math.unit(DEFAULT_RIDGELINE_LENGTH, 'in').toNumber('cm');
    sitHeightInput.value = sitHeightInput.value || math.unit(DEFAULT_SIT_HEIGHT, 'in').toNumber('cm');
  }

  var d123 = +distanceBetweenTreesInput.value;

  let ridgelineLength = +ridgelineLengthInput.value;

  if (ridgelineLengthSelector.options[ridgelineLengthSelector.selectedIndex].value === 'hammock') {
    ridgelineLength *= Math.cos(+hangAngleInput.value * (Math.PI / 180));
  }

  const sitHeight = +sitHeightInput.value;

  const distanceBetweenTrees = units === UNITS_IMPERIAL ? math.unit(d123, 'ft').toNumber('in') : math.unit(d123, 'm').toNumber('cm');

  var distanceBetweenTrees_height = Math.tan((hangAngleInput.value * Math.PI) / 180) * (distanceBetweenTrees / 2) + sitHeight;
  var sp = (distanceBetweenTrees - ridgelineLength) / 2 / Math.cos((hangAngleInput.value * Math.PI) / 180);

  if (getUnitsType() === UNITS_METRIC) {
    document.querySelector('#ridgeline span').innerHTML = (ridgelineLength.toFixed(1) + ' cm');
    document.querySelector('#suspension-length span').innerHTML = (sp.toFixed(1) + ' cm');
    document.querySelector('#hang-height span').innerHTML = (distanceBetweenTrees_height.toFixed(1) + ' cm');
    document.querySelector('#sit-height span').innerHTML = (sitHeight + ' cm');
    document.querySelector('#tree-distance span').innerHTML = (d123 + ' m');
    document.querySelector('#tensile span').innerHTML = (tension() + ' kg');
    document.querySelector('#shear span').innerHTML = (shear() + ' kg');
    document.querySelector('#hang-weight span').innerHTML = (weight + ' kg');
  } else {
    document.querySelector('#ridgeline span').innerHTML = (ridgelineLength.toFixed(0) + ' in');
    document.querySelector('#suspension-length span').innerHTML = (sp.toFixed(1) + ' in');
    document.querySelector('#hang-height span').innerHTML = (distanceBetweenTrees_height.toFixed(1) + ' in');
    document.querySelector('#sit-height span').innerHTML = (sitHeight + ' in');
    document.querySelector('#tree-distance span').innerHTML = (d123 + ' ft');
    document.querySelector('#tensile span').innerHTML = (tension() + ' lbs');
    document.querySelector('#shear span').innerHTML = (shear() + ' lbs');
    document.querySelector('#hang-weight span').innerHTML = (weight + ' lbs');
  }

  document.querySelector('#hang-angle span').innerHTML = (hangAngleInput.value + '&deg;');

  return false;
}

async function main() {
  hang();
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    hang();
  });
  document.querySelector('#english').addEventListener('click', () => setEnglish());
  document.querySelector('#metric').addEventListener('click', () => setMetric());

  [
    '#dt',
    '#sit',
    '#weight',
  ].forEach((el) => document.querySelector(el).addEventListener('blur', () => hang()));

  document.querySelector('#angle').addEventListener('change', () => hang());
}

main().catch(console.error);
