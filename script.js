async function loadData() {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  return data;
}
loadData().then(data => {
  displayData(data);
});

// fetch("https://restcountries.eu/rest/v2/all")
//   .then((res) => res.json())
//   .then((data) => {
//     displayData(data);
//   });

function displayData(data) {
  var tbl = document.createElement("table");
  tbl.className = "table table-hover";
  var thd = document.createElement("thead");
  thd.className = "table-dark";
  var trh = document.createElement("tr");
  var thHash = document.createElement("th");
  thHash.innerText = "#";
  var thName = document.createElement("th");
  thName.innerHTML = "Name";
  var thCapital = document.createElement("th");
  thCapital.innerText = "Capital";
  var thRegion = document.createElement("th");
  thRegion.innerText = "Region";
  var thFlag = document.createElement("th");
  thFlag.innerText = "Flag";

  var tbdy = document.createElement("tbody");

  let rw = document.getElementById("rw");
  trh.appendChild(thHash);
  trh.appendChild(thName);
  trh.appendChild(thCapital);
  trh.appendChild(thRegion);
  trh.appendChild(thFlag);

  for (let i = 0; i < data.length; i++) {
    var trb = document.createElement("tr");
    var thbHash = document.createElement("th");
    thbHash.innerText = i + 1;
    let item = document.createElement("td");
    item.innerHTML = data[i].name;
    let tdCapital = document.createElement("td");
    tdCapital.innerText = data[i].capital;
    let tdRegion = document.createElement("td");
    tdRegion.innerText = data[i].subregion;
    
    let tdFlag = document.createElement("td");
    tdFlag.className = "w-25";
    tdFlag.title = data[i].name;
    var img = document.createElement('img');
    img.src = data[i].flag;
    img.className = "img-fluid img-thumbnail";
    img.alt = "sheep";
    img.width = "40";
    img.height = "40";
    tdFlag.appendChild(img);

    trb.appendChild(thbHash);
    trb.appendChild(item);
    trb.appendChild(tdCapital);
    trb.appendChild(tdRegion);
    trb.appendChild(tdFlag);

    tbdy.appendChild(trb);
  }
  thd.appendChild(trh);

  tbl.appendChild(thd);
  tbl.appendChild(tbdy);
  rw.appendChild(tbl);
}

function Clicked() {
  console.log("Clicked");
}