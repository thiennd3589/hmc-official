export const DEVICE_TYPE = {
    TABLET: "TABLET",
    MOBILE: "MOBILE",
    DESKTOP: "DESKTOP"
}

export const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return DEVICE_TYPE.TABLET;
    }
    if (
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    ) {
        return DEVICE_TYPE.MOBILE;
    }
    return DEVICE_TYPE.DESKTOP;
};