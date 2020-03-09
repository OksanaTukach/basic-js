module.exports = function getSeason(date) {
  if (typeof date == 'undefined'){
    return 'Unable to determine the time of year!';
  } else if (typeof date.getTime() == 'undefined') {
    throw new Error('Not a date');
  } else {
    let month =+ date.getMonth();
    let result = (month < 2 || month == 11) ? "winter" : (month < 5) ? "spring" : (month < 8) ? "summer" : "autumn";
    return result;
  }
};
