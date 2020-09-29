const keyValueToString = ([key, value]) => {
  if (Object.prototype.toString.call(value) === '[object Object]') {
    throw new Error('Please check your params');
  }

  return `${key}=${value}`;
};

const queryString = obj => Object.entries(obj).map(keyValueToString).join('&');

const parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );

export { queryString, parse };
