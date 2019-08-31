import React from 'react';

import { UNITS_IMPERIAL } from './constants';

export const unitSpan = (units, imperialUnit, metricUnit, pluralize = false, value) => {
  let u = units === UNITS_IMPERIAL ? imperialUnit : metricUnit;

  if (pluralize && value !== 1.0) {
    u += 's';
  }

  return <span className="units">{u}</span>;
};
