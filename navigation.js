let z = 0,
  myname;
myname = "Mzwandile Stuurman";

function typing() {
  if (z < myname.length) {
    document.getElementById("type-heading").innerHTML += myname.charAt(z);
    z++;
    setTimeout(typing, 90);
  }
}
typing();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let projects = [
  {
    imgURL: "./contact-form.PNG",
    imgALT: "My Project 1",
    title: "Contanct form",
    techStack: "HTML/CSS",
    description: "A simple neomorphism contact form.",
    githubURL: "https://github.com/mzwandile-stuurman/contact-form",
    liveProjectURL: "https://mzwandile-stuurman-contact-form.netlify.app",
  },
  {
    imgURL: "./lotto.png",
    imgALT: "My Project 2",
    title: "Lotto numbers generator",
    techStack: "Python",
    description: "A simulation of the S.A lotto generator",
    githubURL: "https://github.com/mzwandile-stuurman/python_lotto_machine",
    liveProjectURL:
      "https://replit.com/@Mzwandile/Pythonlottogenerator#main.py",
  },
  {
    imgURL: "./PokeDex.png",
    imgALT: "My Project 3",
    title: "PokeDex",
    techStack: "JavaScript",
    description: "a PokeDex to choose any random Pokemon from Poke-API",
    githubURL: "github.com/mzwandile-stuurman/pokemon-API",
    liveProjectURL: "https://mzwandile-pokedex.netlify.app/",
  },

  {
    imgURL: "./Screenshot from 2021-05-14 09-13-34.png",
    imgALT: "My Project 4",
    title: "Sneaker site",
    techStack: "HTML/CSS",
    description: "Dummy Sneaker site for advertising, orders and purchase.",
    githubURL: "https://github.com/mzwandile-stuurman/new-seaker-site",
    liveProjectURL: "https://mzwandile-stuurman-seaker-site.netlify.app/",
  },
  {
    imgURL: "./Python.png",
    imgALT: "My Project 5",
    title: "Temparature conveter.",
    techStack: "Python",
    description:
      "Python tempareture converter that convertes given degrees celius to fahrenheit and fahrenheit to degrees celcius.",
    githubURL: "https://github.com/mzwandile-stuurman/temperature",
    liveProjectURL:
      "https://replit.com/@Mzwandile/tempareture-converter#main.py",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card" techStack=${card.techStack} >
      <img src="${card.imgURL}" alt="${card.imgALT}">
      <h4>${card.title}</h4>
      <h6>${card.techStack}</h6>
      <p>${card.description}</p>
      <a href="${card.githubURL}" target="_blank" >Github</a>
      <a href="${card.liveProjectURL}" target="_blank" >Live</a>
    </div>
  `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}

function toggleNav() {
  document.getElementsByClassName("navbar-links")[0].classList.toggle("active");
}

// Testimonial filter//////////

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-s");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
