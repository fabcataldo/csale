export const getOccupationLevelName = (occupationLevel) => {
    if (occupationLevel === 'low') {
      return 'Ocupación baja';
    } else {
      if (occupationLevel === 'moderate') {
        return 'Ocupación media';
      } else {
        return 'Ocupación alta';
      }
    }
  }