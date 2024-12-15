const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function getFormattedDate(date) {
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}
