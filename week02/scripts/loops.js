myInfo = {
    name: "Andrea R",
    photo: "../../images/andy1.jpeg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

//Activity2

 /* myInfo.favoriteFoods.forEach(food => {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    document.querySelector("#favorite-foods").appendChild(favoriteFood);
  }); */

  /*document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join("");*/

//Activity 3

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let i=0;

// for
for (i=0; i < studentReport.length; i++){
    if (studentReport[i] < LIMIT){
        console.log("for",studentReport[i])
    }
}

// while
i = 0;

while (i < studentReport.length) {
    if(studentReport[i] < LIMIT){
      console.log("while: ", studentReport[i]);
    }
    i++;
}

//forEach
studentReport.forEach(e => 
  {
    if (e < LIMIT){
      console.log("forEach: ", e);
    }
  }
)

// for in
for ( i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log("for in: ", studentReport[i]);
  }
  i++;
}

//produce the day names

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
n = 6;
const output = document.getElementsByTagName("ul");
const options = { weekday: 'long'}; //No entiendo para que es!!
weekday = new Date().getDay();


console.log(options)
console.log(weekday)

let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
console.log(todaystring)
//document.getElementById('today').innerHTML = `To







