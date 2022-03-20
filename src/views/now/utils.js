
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MONTHS = [
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
  'December'
]

const date2text = date => {
  const now = new Date();
  const ago = (now - date) / 1000;
  let text= '';

  if (ago < 1)  text = 'now';
  else if (ago < 120) text = `${Math.round(ago)} seconds ago`;
  else if (ago < 7200) text = `${Math.round(ago / 60)} minutes ago`;
  else if (ago < 172800) text = `${Math.round(ago / 3600)} hours ago`;
  else if (ago < 604800) text = `last ${DAYS[date.getDay() - 1]}`;
  else {
    text = `${MONTHS[date.getMonth()]} ${date.getDate()}`;
    if (date.getFullYear() !== now.getFullYear()) text += `${date.getFullYear()} ${text}`;
  }

  return text;
};

const findInNest = (nest, needle) => {
  let find = null;

  Object.values(nest).forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (key === needle) find = obj[key];
    })
  });

  return find;
};

export { date2text, findInNest };
