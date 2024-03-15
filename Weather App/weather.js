function findWeather() {
  var bro = document.querySelector(".searchResults");
  bro.replaceChildren();
  var place = document.getElementById("searchbar").value;
  var apiURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    place +
    "&limit=1&appid=b79019184e1fd39004cbff7b93667480";

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let newData = `${data[0].name},${data[0].state},${data[0].country}`;
      console.log(newData);
      var apiURL3 =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        newData +
        "&APPID=3b9e0c9f57edaec346609d61ec42ddd4";

      fetch(apiURL3)
        .then((response) => {
          if (!response.ok) {
            throw new Error("There was an error");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let weatherInformation =
            document.getElementById("weatherInformation");
          var information2 = document.createElement("div");
          let weatherType = document.createTextNode(data.weather[0].main);
          let weathertype2 = data.weather[0].main;
          var imagine = document.createElement("img");
          let box = document.createElement("div");
          box.style.gridColumnStart = "2";
          box.style.gridColumnEnd = "span 1";
          if (weathertype2 == "Clear") {
            imagine.src = "images/clear.png";
            box.appendChild(imagine);
          } else if (weathertype2 == "Clouds") {
            imagine.src = "images/cloud.png";
            box.appendChild(imagine);
          } else if (weathertype2 == "Rain") {
            imagine.src = "images/rain.png";
            box.appendChild(imagine);
          }
          console.log(box);
          // else {
          //   //pass
          // }
          information2.appendChild(weatherType);
          for (let n in data.main) {
            console.log(data.main[n]);
            let information = document.createElement("div");
            let informationNode = document.createTextNode(
              `${n}: ${data.main[n]}`
            );
            information.appendChild(informationNode);
            information2.appendChild(information);
          }
          if (weatherInformation.hasChildNodes()) {
            weatherInformation.replaceChildren(information2);
            weatherInformation.appendChild(box);
          } else {
            weatherInformation.appendChild(information2);
            weatherInformation.appendChild(box);
          }
          weatherInformation.style.backgroundColor = "#007AFF";
          weatherInformation.style.backgroundImage =
            "linear-gradient(45deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)";
        });
    })
    .catch((error) => {
      console.error("Error", error);
    });
}
document.getElementById("searchbar").addEventListener("input", function () {
  var pop = document.getElementById("weatherInformation");
  while (pop.firstChild) {
    pop.removeChild(pop.firstChild);
  }
  pop.style.backgroundColor = "#145DA0";
  pop.style.backgroundImage = "none";
  var dad = document.querySelector(".searchResults");
  dad.replaceChildren();
  let place2 = document.getElementById("searchbar").value;
  console.log(place2);
  var apiURL =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    place2 +
    "&limit=5&appid=b79019184e1fd39004cbff7b93667480";

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error:" + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      for (let n in data) {
        let searchResult = document.createElement("div");
        let text;
        if (data[n].state === undefined) {
          let type1 = `${data[n].name},${data[n].country}`;
          text = document.createTextNode(type1);
        } else {
          text = document.createTextNode(
            `${data[n].name},${data[n].state},${data[n].country}`
          );
        }
        // let text = document.createTextNode(
        //   `${data[n].name},${data[n].state},${data[n].country}`
        // );

        searchResult.appendChild(text);
        searchResult.style.backgroundColor = "#f8f8ff";
        searchResult.style.paddingLeft = "10px";
        searchResult.style.paddingTop = "5px";
        searchResult.style.paddingBottom = "5px";
        searchResult.addEventListener("click", function () {
          let bar = document.getElementById("searchbar");
          console.log(bar.value);
          console.log(text.textContent);
          bar.value = text.textContent;
        });
        searchResult.addEventListener("mouseover", function () {
          searchResult.style.backgroundColor = "#cccccc";
        });
        searchResult.addEventListener("mouseout", function () {
          searchResult.style.backgroundColor = "#f8f8ff";
        });
        dad.appendChild(searchResult);
      }
    })
    .catch((error) => {
      console.error("Error:" + error);
    });
});

document
  .getElementById("searchButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    findWeather();
  });
