/* global math */

const distanceBetweenTreesInput = document.querySelector('#dt');
const ridgelineLengthInput = document.querySelector('#len');
const sitHeightInput = document.querySelector('#sit');
const hangAngleInput = document.querySelector('#angle');
const weightInput = document.querySelector('#weight');

function cm(inches) {
  return math.unit(inches, 'in').toNumber('cm');
}

function feet(meters) {
  return math.unit(meters, 'm').toNumber('ft');
}

function inches(cm) {
  return math.unit(cm, 'cm').toNumber('in');
}

function lbs(kilo) {
  return math.unit(kilo, 'kg').toNumber('lb');
}

function kilo(lbs) {
  return math.unit(lbs, 'lb').toNumber('kg');
}

function getUnitsType() {
  const type = document.querySelector('input[type="radio"][name="units"]:checked').value;

  if (type === 0) {
    return 'Metric';
  } else {
    return 'English';
  }
}

function setEnglish() {
  distanceBetweenTreesInput.value = feet(distanceBetweenTreesInput.value);
  ridgelineLengthInput.value = inches(ridgelineLengthInput.value);
  sitHeightInput.value = inches(sitHeightInput.value);
  weightInput.value = lbs(weightInput.value);
  hang();
}

function setMetric() {
  distanceBetweenTreesInput.value = math.unit(+distanceBetweenTreesInput.value, 'ft').toNumber('m');
  ridgelineLengthInput.value = cm(+ridgelineLengthInput.value);
  sitHeightInput.value = cm(+sitHeightInput.value);
  weightInput.value = kilo(+weightInput.value);
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
  var defaultDistanceBetweenTrees = 15.0;
  var defaultRidgelineLength = 108.0;
  var defaultSitHeight = 18.0;
  var defaultHangAngle = 30.0;

  var weight = +weightInput.value;

  if (getUnitsType() === 'English') {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || defaultDistanceBetweenTrees;
    ridgelineLengthInput.value = ridgelineLengthInput.value || defaultRidgelineLength;
    sitHeightInput.value = sitHeightInput.value || defaultSitHeight;
  } else {
    distanceBetweenTreesInput.value = distanceBetweenTreesInput.value || meters(defaultDistanceBetweenTrees);
    ridgelineLengthInput.value = ridgelineLengthInput.value || cm(defaultRidgelineLength);
    sitHeightInput.value = sitHeightInput.value || cm(defaultSitHeight);
  }

  hangAngleInput.value = hangAngleInput.value || defaultHangAngle;

  var distanceBetweenTrees_len = +distanceBetweenTreesInput.value;
  var distanceBetweenTreess;

  var rl = +ridgelineLengthInput.value;

  if ($('#list').val() == 1) {
    rl = rl * Math.cos((hangAngleInput.value * Math.PI) / 180);
  }

  var sitHeight = +sitHeightInput.value;

  if (getUnitsType() === 'English') {
    distanceBetweenTreess = 12.0 * distanceBetweenTrees_len;
  } else {
    distanceBetweenTreess = 100.0 * distanceBetweenTrees_len;
  }
  var distanceBetweenTrees_height = Math.tan((hangAngleInput.value * Math.PI) / 180) * (distanceBetweenTreess / 2) + sitHeight;
  var sp = (distanceBetweenTreess - rl) / 2 / Math.cos((hangAngleInput.value * Math.PI) / 180);

  if (getUnitsType() === 'Metric') {
    $('#ridgeline span').html(rl.toFixed(1) + ' cm');
    $('#suspension-length span').html(sp.toFixed(1) + ' cm');
    $('#hang-height span').html(distanceBetweenTrees_height.toFixed(1) + ' cm');
    $('#sit-height span').html(sitHeight + ' cm');
    $('#tree-distance span').html(distanceBetweenTrees_len + ' m');
    $('#tensile span').html(tension() + ' kg');
    $('#shear span').html(shear() + ' kg');
    $('#hang-weight span').html(weight + ' kg');
  } else {
    $('#ridgeline span').html(rl.toFixed(0) + ' in');
    $('#suspension-length span').html(sp.toFixed(1) + ' in');
    $('#hang-height span').html(distanceBetweenTrees_height.toFixed(1) + ' in');
    $('#sit-height span').html(sitHeight + ' in');
    $('#tree-distance span').html(distanceBetweenTrees_len + ' ft');
    $('#tensile span').html(tension() + ' lbs');
    $('#shear span').html(shear() + ' lbs');
    $('#hang-weight span').html(weight + ' lbs');
  }
  $('#hang-angle span').html(hangAngleInput.value + '&deg;');
  return false;
}
