let requestURL = "https://rjmcgill.github.io/COMP1073FinalExam/Q3/cats.json";
let pressedAgain = false;

const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  let catJson = request.response;
  let button = document.querySelector('button').addEventListener('click', function() {
    getInfo(catJson);
  });
};

function makeInfo(cat, jsonObj) {
  let promise = new Promise(function(resolve, reject) {
    if(cat > 2 || cat < 0) {
      reject("Cat out of bounds");
    } else {
      resolve();
    }
  });
  return promise;
}

async function getInfo(jsonObj) {
  try {

    for(let i = 0; i < 3; i++) {

      let catInfo = await makeInfo(i, jsonObj).then(function() {
        let cats = jsonObj.cats;

        let main = document.querySelector('main');
        if(pressedAgain == true) {
          main.clear();
        }

        let name = document.createElement('h3');
        let img = document.createElement('img');
        img.src = "assets/" + cats[i].name.toLowerCase() + ".jpg";
        let species = document.createElement('p');
        let favFoods = document.createElement('p');
        let age = document.createElement('p');

        name.innerHTML = "Name: " + cats[i].name + "<br>";
        species.innerHTML = "Species: " + cats[i].species + "<br>";
        favFoods.innerHTML = "Favourite Foods: ";
        let foodList = document.createElement('ul');

        for(let x = 0; x < cats[i].favFoods.length; x++) {
          let foodItem = document.createElement('li');
          foodItem.innerHTML = cats[i].favFoods[x];
          foodList.appendChild(foodItem);
        }
        age.innerHTML = "Age: " + cats[i].age + "\n";

        main.appendChild(name);
        main.appendChild(img);
        main.appendChild(species);
        main.appendChild(favFoods);
        main.appendChild(foodList);
        main.appendChild(age);

      });
    }
  } catch(e) {
    console.log(e);
  }
pressedAgain = true;
}
