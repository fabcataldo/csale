import { getSCSSVarValue } from "./getSCSSVarValue";

export const getColorOccupationLevel = (occupationLevel) => {
    if (occupationLevel === 'low') {
      return getSCSSVarValue('--green');
    } else {
      if (occupationLevel === 'moderate') {
        return getSCSSVarValue('--orange');
      } else {
        return getSCSSVarValue('--red');
      }
    }
  }