async function loadData() {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  return data;
}

loadData().then((data) => {
  displayData(data);
});

function displayData(data) {
  console.log(data[0]);
  let list = document.getElementById("list");
  for (let i = 0; i < data.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = (data[i].name + " " + data[i].capital + " " + data[i].region)
      list.appendChild(item);
  }

//   let tableBody = document.createElement("tbody");
//   createTable(tableBody);

//   table.appendChild(tableBody);
//   for (let i = 0; i < data.length - 240; i++) {
//     let tableRow = document.createElement("tr");
//     let count = document.createElement("th");
//     let name = document.createElement("td");
//     let capital = document.createElement("td");
//     let region = document.createElement("td");

//     count.innerHTML = i + 1;
//     count.scope = "row";
//     name.innerHTML = data[i].name;
//     capital.innerHTML = data.capital;
//     region.innerHTML = data.subregion;

//     tableBody.appendChild(tableRow);
//     tableRow.appendChild(count);
//     tableRow.appendChild(name);
//     tableRow.appendChild(capital);
//     tableRow.appendChild(region);

//     //console.log(data[i].name);
//   }
}

// function createTable() {
//   const rw = document.getElementById("rw");
//   // cardBody.className = 'card-body';
//   let table = document.createElement("table");
//   table.className = "table";

//   let tableHead = document.createElement("thead");
//   tableHead.className = "table-dark";

//   let tHeadRow = document.createElement("tr");
//   let hCount = document.createElement("th");
//   hCount.innerHTML = "#";
//   let hName = document.createElement("th");
//   hName.innerHTML = "Name";
//   let hCapital = document.createElement("th");
//   hCapital.innerHTML = "Capital";
//   let hRegion = document.createElement("th");
//   hRegion.innerHTML = "Region";

//   tHeadRow.appendChild(hCount);
//   tHeadRow.appendChild(hName);
//   tHeadRow.appendChild(hCapital);
//   tHeadRow.appendChild(hRegion);

//   tableHead.appendChild(tHeadRow);
//   table.appendChild(tHeadRow);
//   table.appendChild(tableBody);
//   rw.appendChild(table);
// }
