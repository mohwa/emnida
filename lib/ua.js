function _isIE() {
  const { userAgent } = window.navigator;

  const isMSIE = userAgent.indexOf('MSIE') > -1;
  const isIE11 = userAgent.indexOf('Trident/') > -1;

  return isMSIE || isIE11;
}

export function isBrowser() {
  try {
    return !!window;
  } catch (e) {
    return false;
  }
}

export function isIE(v) {
  if (_isIE()) {
    if (v) {
      const { userAgent } = window.navigator;

      if (v === 11) {
        return !!userAgent.match(/rv:\d+/)?.[0];
      }
      const version = userAgent.match(/MSIE\s+(\d+)/)?.[1];

      return parseInt(version) === v;
    }
    return true;
  }
  return false;
}
/**
 * @link https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
export function isIOS() {
  const { platform, userAgent } = window.navigator;

  return (
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(platform) ||
    // iPad on iOS 13 detection
    (userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

export function isAndroid() {
  const { vendor, userAgent } = window.navigator;

  return /android/i.test(userAgent || vendor || window.opera);
}
