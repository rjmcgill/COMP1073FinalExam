let requestURL = "https://rjmcgill.github.io/COMP1073FinalExam/Q3/cats.json";

const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  let productJson = request.response;
  let button = document.querySelector('button').addEventListener('click', function() {
    getInfo(productJson);
  });
};

function makeInfo(product, jsonObj) {
  let promise = new Promise(function(resolve, reject) {
    if(product > 2 || product < 0) {
      reject("Cat out of bounds");
    } else {
      resolve();
    }
  });
  return promise;
}

async function getInfo(jsonObj) {
  try {
    for(let i = 0; i > 3; i++) {
      let catInfo = await makeInfo(i, jsonObj).then(function() {

        let cats = jsonObj.cats;

        let main = document.querySelector('main');

        let name = document.createElement('h3');
        let species = document.createElement('p');
        let favFoods = document.createElement('p');
        let age = document.createElement('p');

        name.innerHTML = "Name: " + cats[i].name + "<br>";
        species.innerHTML = "Species: " + cats[i].species + "<br>";
        favFoods.innerHTML = "Favourite Foods: ";
        let foodList = document.createElement('ul');
        for(let x = 0; i < cats[i].favFoods.length; x++) {
          let foodItem = document.createElement('li');
          foodItem.innerHTML = cats[i].favFoods[x];
          foodList.appendChild(foodItem);
        }
        age.innerHTML = cats[i].age;
      });
    }
  } catch(e) {
    console.log(e);
  }

}
