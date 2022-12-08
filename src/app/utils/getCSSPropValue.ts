export const getCSSPropValue = (cssProp: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(cssProp);
}