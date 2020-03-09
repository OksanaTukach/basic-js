const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || sampleActivity.length === 0 || typeof(Number(sampleActivity)) !== 'number') {
    return false;
  } if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) {
    return false;
  }
  let newSampleActivity = parseFloat(sampleActivity);
  if (typeof(newSampleActivity) !== 'number' || isNaN(Number(newSampleActivity))) {
    return false;
  }
  let k = 0.693/HALF_LIFE_PERIOD;
  let result  = Math.ceil(Math.log(MODERN_ACTIVITY/newSampleActivity)/k);
  return result;
};
