function updateTime() {
  //SEOUL
  let seoulElement = document.querySelector("#seoul_info");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(" h3");
    let seoulTime = moment().tz("Asia/Seoul");
    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<span>]a[</span>]");
  }
  // PRAGUE
  let pragueElement = document.querySelector("#prague_info");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(" h3");
    let pragueTime = moment().tz("Europe/Prague");
    pragueDateElement.innerHTML = pragueTime.format("MMMM Do YYYY");
    pragueTimeElement.innerHTML = pragueTime.format(
      "h:mm:ss [<span>]a[</span>]"
    );
  }
}

function zoneSelection(event) {
  let selectedZone = event.target.value;
  let selectedZoneDisplay = selectedZone.replace("-", " ").split("/")[1];
  let selectedTimeZone = moment().tz(selectedZone);
  let zoneContainer = document.querySelector("#zones_container");
  // adding a plus to increment 1 more zone under the previus ones - 'innerHTML += ...'
  zoneContainer.innerHTML = `<div class="zone-div row align-items-center">
    <div class="col text-start">
      <h2>${selectedZoneDisplay}</h2>
      <p class="date">${selectedTimeZone.format("MMMM Do YYYY")}</p>
    </div>
    <div class="col">
      <h3 class="d-flex justify-content-end align-items-start">
      ${selectedTimeZone.format("h:mm:ss [<span>]a[</span>]")}
      </h3>
    </div>
  </div>`;
}

let zoneSelectElement = document.querySelector("#zone_select");
zoneSelectElement.addEventListener("change", zoneSelection);

updateTime();
setInterval(updateTime, 1000);
