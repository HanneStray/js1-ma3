async function getDates() {
  const URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
  const response = await fetch(URL);
  const dates = reults.all;
  console.log(dates.length);
}
  
