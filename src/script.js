function updateTime() {
  //SEOUL
  let seoulElement = document.querySelector("#seoul_info");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(" h3");
  let seoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<span>]a[</span>]");

  // PRAGUE
  let pragueElement = document.querySelector("#prague_info");
  let pragueDateElement = pragueElement.querySelector(".date");
  let pragueTimeElement = pragueElement.querySelector(" h3");
  let pragueTime = moment().tz("Europe/Prague");
  pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
  pragueTimeElement.innerHTML = pragueTime.format("h:mm:ss [<span>]a[</span>]");
}
updateTime();
setInterval(updateTime, 1000);
