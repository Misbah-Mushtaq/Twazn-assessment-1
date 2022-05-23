export const formatDate = (value) => {
  value = new Date(value);
  let date = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
  let month =
    value.getMonth() + 1 < 10
      ? `0${value.getMonth() + 1}`
      : value.getMonth() + 1;
  return `${date}/${month}/${value.getFullYear()}`;
};
