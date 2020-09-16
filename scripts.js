window.addEventListener("load", function () {
  console.log("Page loaded");

  fetch("https://dog.ceo/api/breeds/list")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      for (let index = 0; index < data.message.length; index++) {
        const breed = data.message[index];
        breeds = document.createElement("option");
        breeds.setAttribute("value", breed);
        breeds.textContent = breed;
        document.getElementById("breeds").appendChild(breeds);
      }
    });
});

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
  }
};
request.open("GET", "./sample.txt");
request.send();

fetch("./data.json").then((response) => {
  console.log(response.text());
});

function dogChoice() {
  breed = document.getElementById("breeds").value;
  if (breed) {
    console.log(breed);
    let whichBreed = `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(whichBreed);
    return whichBreed;
  } else {
    return "https://dog.ceo/api/breeds/image/random";
  }
}
// document.getElementById("breeds").addEventListener("change", function () {
//   const url = dogChoice();
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.message);
//       let doggo = document.createElement("img");
//       document.getElementById("dogPic").setAttribute("src", data.message);
//       document.getElementById("doggoButt").textContent = "Generated Doggo!";
//     });
// });
document.getElementById("doggoButt").addEventListener("click", function () {
  document.getElementById("doggoButt").textContent = "Generating Doggo...";
  const url = dogChoice();
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      let doggo = document.createElement("img");
      document.getElementById("dogPic").setAttribute("src", data.message);
      document.getElementById("doggoButt").textContent = "Generated Doggo!";
    });
});
