import { getCSSPropValue } from "./getCSSPropValue";

export const getColorOccupationLevel = (occupationLevel) => {
    if (occupationLevel === 'low') {
      return getCSSPropValue('--green');
    } else {
      if (occupationLevel === 'moderate') {
        return getCSSPropValue('--orange');
      } else {
        return getCSSPropValue('--red');
      }
    }
  }