const capitalize_firstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const conver_date = (date) => new Date(date).toDateString();

export { capitalize_firstLetter, conver_date };
