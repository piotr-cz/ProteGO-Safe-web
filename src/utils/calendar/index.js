import moment from 'moment';
import PropTypes from 'prop-types';

const dayWeekFormat = 'dddd';
const dateFormat = 'D-MM-YYYY';

const descending = (a, b) => b - a;

// filledDays contains moments
export const createDaysDetails = (
  filledDays = [],
  dateFormatIn = dateFormat
) => {
  return filledDays.sort(descending).map(_timestamp => {
    return {
      day: moment.unix(_timestamp).format(dateFormatIn),
      dayWeek: moment.unix(_timestamp).format(dayWeekFormat),
      timestamp: _timestamp
    };
  });
};

export const daysDetailsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    day: PropTypes.string.isRequired,
    dayWeek: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
).isRequired;
