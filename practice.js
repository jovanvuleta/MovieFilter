var select = document.querySelector("select");
var imgDiv = document.querySelector("#image-div");
var breed = select.value;

select.addEventListener("change", changeBreed);

function changeBreed() {
  breed = select.value;
  if (select.options.length === 6) {
    select.removeChild(select.options[0]);
  }
  request();
}

function request() {
  var newRequest = new XMLHttpRequest();
  newRequest.open(
    "GET",
    "https://dog.ceo/api/breed/" + breed + "/images/random"
  );

  newRequest.onload = function() {
    var imgSrc = JSON.parse(newRequest.responseText).message;
    var imgs = imgDiv.childNodes.length;

    if (imgs == 0) {
      createImg(imgSrc);
    } else {
      changeImg(imgSrc);
    }
  };

  newRequest.send();
}

function createImg(imgSrc) {
  var img = document.createElement("img");
  img.setAttribute("src", imgSrc);
  imgDiv.appendChild(img);
}

function changeImg(imgSrc) {
  imgDiv.querySelector("img").removeAttribute("src");
  imgDiv.querySelector("img").setAttribute("src", imgSrc);
}
request();
setInterval(request, 5000);
