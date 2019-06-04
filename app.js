/* global math */

const defaultDistanceBetweenTrees = 15.0;
const defaultRidgelineLength = 108.0;
const defaultSitHeight = 18.0;
const defaultHangAngle = 30.0;

const distanceBetweenTreesInput = document.querySelector('#dt');
const ridgelineLengthInput = document.querySelector('#len');
const sitHeightInput = document.querySelector('#sit');
const hangAngleInput = document.querySelector('#angle');
const weightInput = document.querySelector('#weight');
const ridgelineLengthSelector = document.querySelector('#list');

function getUnitsType() {
  const type = +document.querySelector('input[type="radio"][name="units"]:checked').value;

  if (type === 0) {
    return 'English';
  } else {
    return 'Metric';
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

  hangAngleInput.value = hangAngleInput.value || defaultHangAngle;

  if (units === 'English') {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || defaultDistanceBetweenTrees;
    ridgelineLengthInput.value = ridgelineLengthInput.value || defaultRidgelineLength;
    sitHeightInput.value = sitHeightInput.value || defaultSitHeight;
  } else {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || math.unit(defaultDistanceBetweenTrees, 'ft').toNumber('m');
    ridgelineLengthInput.value = ridgelineLengthInput.value || math.unit(defaultRidgelineLength, 'in').toNumber('cm');
    sitHeightInput.value = sitHeightInput.value || math.unit(defaultSitHeight, 'in').toNumber('cm');
  }

  var d123 = +distanceBetweenTreesInput.value;

  let ridgelineLength = +ridgelineLengthInput.value;

  if (ridgelineLengthSelector.options[ridgelineLengthSelector.selectedIndex].value === 'hammock') {
    ridgelineLength *= Math.cos(+hangAngleInput.value * (Math.PI / 180));
  }

  const sitHeight = +sitHeightInput.value;

  const distanceBetweenTrees = units === 'English' ? math.unit(d123, 'ft').toNumber('in') : math.unit(d123, 'm').toNumber('cm');

  var distanceBetweenTrees_height = Math.tan((hangAngleInput.value * Math.PI) / 180) * (distanceBetweenTrees / 2) + sitHeight;
  var sp = (distanceBetweenTrees - ridgelineLength) / 2 / Math.cos((hangAngleInput.value * Math.PI) / 180);

  if (getUnitsType() === 'Metric') {
    $('#ridgeline span').html(ridgelineLength.toFixed(1) + ' cm');
    $('#suspension-length span').html(sp.toFixed(1) + ' cm');
    $('#hang-height span').html(distanceBetweenTrees_height.toFixed(1) + ' cm');
    $('#sit-height span').html(sitHeight + ' cm');
    $('#tree-distance span').html(d123 + ' m');
    $('#tensile span').html(tension() + ' kg');
    $('#shear span').html(shear() + ' kg');
    $('#hang-weight span').html(weight + ' kg');
  } else {
    $('#ridgeline span').html(ridgelineLength.toFixed(0) + ' in');
    $('#suspension-length span').html(sp.toFixed(1) + ' in');
    $('#hang-height span').html(distanceBetweenTrees_height.toFixed(1) + ' in');
    $('#sit-height span').html(sitHeight + ' in');
    $('#tree-distance span').html(d123 + ' ft');
    $('#tensile span').html(tension() + ' lbs');
    $('#shear span').html(shear() + ' lbs');
    $('#hang-weight span').html(weight + ' lbs');
  }
  $('#hang-angle span').html(hangAngleInput.value + '&deg;');
  return false;
}
