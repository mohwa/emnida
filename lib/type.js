export function isString(v) {
  return typeof v === 'string';
}

export function isNumber(v) {
  return typeof v === 'number';
}

export function isBoolean(v) {
  return typeof v === 'boolean';
}

export function isUndefined(v) {
  return v === undefined;
}

export function isNull(v) {
  return v === null;
}

export function isSymbol(v) {
  if (!isFunction(window.Symbol)) {
    return false;
  }
  return typeof v === 'symbol';
}

export function isPlainObject(v) {
  return v?.constructor === Object;
}

export function isFunction(v) {
  return typeof v === 'function';
}

export function isArray(v) {
  return Array.isArray(v);
}

export function isBigInt(v) {
  if (!isFunction(window.BigInt)) {
    return false;
  }
  return typeof v === 'bigint';
}

export function isElement(v) {
  return v instanceof HTMLElement;
}

export function isDate(v) {
  return v instanceof Date;
}

export function isArrayLikeObject(v) {
  return !isEmpty(v?.length);
}

export function isIterableObject(v) {
  return typeof v?.[Symbol?.iterator] === 'function';
}

export function isEmpty(v) {
  if (isNumber(v) || isBoolean(v) || isSymbol(v)) return false;

  for (const k in v) {
    if (Object.prototype.hasOwnProperty.call(v, k)) return false;
  }
  return true;
}

export function isEqualType(v, vv) {
  switch (true) {
    case isString(v) && isString(vv): {
      return true;
    }
    case isNumber(v) && isNumber(vv): {
      return true;
    }
    case isBoolean(v) && isBoolean(vv): {
      return true;
    }
    case isUndefined(v) && isUndefined(vv): {
      return true;
    }
    case isNull(v) && isNull(vv): {
      return true;
    }
    case isSymbol(v) && isSymbol(vv): {
      return true;
    }
    case isPlainObject(v) && isPlainObject(vv): {
      return true;
    }
    case isFunction(v) && isFunction(vv): {
      return true;
    }
    case isArray(v) && isArray(vv): {
      return true;
    }
    case isBigInt(v) && isBigInt(vv): {
      return true;
    }
    case isElement(v) && isElement(vv): {
      return true;
    }
    case isDate(v) && isDate(vv): {
      return true;
    }
  }
  return false;
}
