import * as _ from 'lodash';

const dates = {
  day: _.range(1, 32),
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  year: _.range(1870, 2020),
};

export default dates;
