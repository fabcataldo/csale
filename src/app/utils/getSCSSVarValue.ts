export const getSCSSVarValue = (scssProp: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(scssProp);
}