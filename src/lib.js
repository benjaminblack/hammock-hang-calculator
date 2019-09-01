import React from 'react';

import { UNITS_IMPERIAL } from './constants';

export const unitSpan = (units, imperialUnit, metricUnit, pluralize = false, value) => (
  <span className="units">{units === UNITS_IMPERIAL ? imperialUnit : metricUnit}</span>
);
