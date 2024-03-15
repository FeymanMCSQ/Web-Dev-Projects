var pageNum = 1;
const appID = "574502";
const accessKey = "2vLRW-_1e8tmdbyQsLOnSePUhdcoOboPSRMUbc6LLNE";
const secretKey = "lSqybepO8OYoEwNK7-TxRow7nPWeI398Remm8qTknFc";
var currentAPI = `https://api.unsplash.com/photos/?client_id=${accessKey}&secret=${secretKey}&application_id=${appID}&per_page=12`;
var search = false;
var wantedquery = null;
function getPhotos(apiURL, searchQuery, startingOut) {
  if (searchQuery === null) {
    apiURL2 = apiURL;
  } else {
    apiURL2 = `${apiURL}&query=${searchQuery}`;
  }
  fetch(apiURL2)
    .then((Response) => {
      if (!Response.ok) {
        throw new Error("There was an error");
      }
      return Response.json();
    })
    .then((data) => {
      var photoColumns = document.querySelectorAll(".flex-container");
      console.log(data);
      for (let i = 0; i < 12; i++) {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("container");
        let image = document.createElement("img");
        const imageDownloadLink = data[i].links.download_location;
        image.src = data[i].urls.small;
        image.alt = data[i].alt_description;
        image.loading = "lazy";
        image.classList.add("image");
        image.style.borderRadius = "10px";
        imageContainer.addEventListener("mouseenter", () =>
          imageHover(
            imageContainer,
            image,
            `${imageDownloadLink}/?client_id=${accessKey}`
          )
        );
        imageContainer.addEventListener("mouseout", () =>
          imageOut(imageContainer, image)
        );
        imageContainer.appendChild(image);
        let index = i % 3;
        if (startingOut === true) {
          if (i === 0 || i === 1 || i === 2) {
            photoColumns[index].replaceChildren(imageContainer);
          } else {
            photoColumns[index].appendChild(imageContainer);
          }
        } else {
          photoColumns[index].appendChild(imageContainer);
        }
      }
      pageNum++;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
document.addEventListener(
  "DOMContentLoaded",
  getPhotos(`${currentAPI}&page=${pageNum}`, null, false)
);

function searchforPhotos() {
  let searchbar = document.getElementById("searchbar");
  wantedquery = searchbar.value;
  console.log(wantedquery);
  getPhotos(`${currentAPI}&page=${pageNum}`, wantedquery, true);
  search = true;
}
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    if (search === true) {
      getPhotos(`${currentAPI}&page=${pageNum}`, wantedquery, false);
    } else {
      getPhotos(`${currentAPI}&page=${pageNum}`, null, false);
    }
  }
});
function imageHover(container, image, imagelink) {
  image.style.filter = "brightness(40%)";
  // downloadlink = document.createElement("a");
  // downloadlink.href = imagelink;
  // downloadlink.setAttribute("download", "Image.jpeg");

  downloadButton = document.createElement("button");
  console.log("broski");
  downloadButton.addEventListener("click", () => {
    photo(imagelink);
  });
  downloadButton.classList.add("download_button");
  downloadButton.textContent = "Download";

  // downloadlink.appendChild(downloadButton);
  container.appendChild(downloadButton);
}
function imageOut(container, image) {
  container.addEventListener("mouseleave", () => {
    removeButPhoto(container, image);
    image.style.filter = "brightness(100%)";
  });
}

function removeButPhoto(container, image) {
  for (const child of container.children) {
    if (child === image) {
      //pass
    } else {
      container.removeChild(child);
    }
  }
}
function photo(imageURL) {
  console.log("pphead");
  var request = new XMLHttpRequest();
  request.open("GET", imageURL, true);
  request.responseType = "json";
  request.onload = function () {
    console.log(request.response);
    let result = request.response;
    console.log(result.url);
    var request2 = new XMLHttpRequest();
    request2.open("GET", result.url, true);
    request2.responseType = "blob";
    request2.onload = function () {
      const imageURL2 = URL.createObjectURL(request2.response);
      let KYS = document.createElement("a");
      KYS.href = imageURL2;
      let filename = imageURL.split("/").pop();
      KYS.download = filename;
      KYS.click();
    };
    request2.send();
  };
  request.send();
}
document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("button clicked");
  searchforPhotos();
});
