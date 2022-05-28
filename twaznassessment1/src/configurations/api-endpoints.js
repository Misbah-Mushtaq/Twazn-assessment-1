export const filmsAPIs = {
  getFilms: "https://swapi.dev/api/films/",
  getFilmById: "https://swapi.dev/api/films/",
};
export const exchangeAPIs = (to, from, amount) => {
  return `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`;
};
