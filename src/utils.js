
export const timeUnits = [
  'minute',
  'minutes',
  'hour',
  'hours',
  'day',
  'days',
  'week',
  'weeks'
];

/**
 * @param {number} to Target time, in millis. 
 * @param {number} from Source time, in millis. Defaults to current.
 * @returns {Time} Time difference from source time to target time.
 */
export const timeDiff = (to, from = Date.now()) => {
  let delta = to - from;
  const floor = Math.floor;

  let { units } = Time;
  let unit = 0;

  //  delta to mins
  delta = floor(delta / (60 * 1000));

  unit = delta <= 1 ? units.minute : units.minutes;
  if (delta >= 60) {
    //  To hours
    delta = floor(delta / 60);
    unit = delta == 1 ? units.hour : units.hours;

    if (delta >= 24) {
      //  To days
      delta = floor(delta / 24);
      unit = delta == 1 ? units.day : units.days;

      if (delta >= 7) {
        //  To weeks
        delta = floor(delta / 7);
        unit = delta == 1 ? units.week : units.weeks;
      }
    }
  }

  return {
    unit: unit,
    delta: delta
  }
}

export class Time {
  static units = {
    minute: 0,
    minutes: 1,
    hour: 2,
    hours: 3,
    day: 4,
    days: 5,
    week: 6,
    weeks: 7,
  }
  delta = 0;
  unit = 0;
}