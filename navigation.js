let z = 0,
  myname;
myname = "Mzwandile Stuurman";

function typing() {
  if (z < myname.length) {
    document.getElementById("type-heading").innerHTML += myname.charAt(z);
    z++;
    setTimeout(typing, 100);
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
    imgURL: "./PokeDex.png",
    imgALT: "My Project 3",
    title: "PokeDex",
    techStack: "JavaScript",
    description: "a PokeDex to choose any random Pokemon from Poke-API",
    githubURL: "https://github.com/mzwandile-stuurman/pokemon-API",

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
    title: "Temperature conveter.",
    techStack: "Python",
    description:
      "Python tempereture converter that convertes given degrees celius to fahrenheit and fahrenheit to degrees celcius.",
    githubURL: "https://github.com/mzwandile-stuurman/temperature",
    liveProjectURL:
      "https://replit.com/@Mzwandile/tempareture-converter#main.py",
  },
  {
    imgURL: "./weather.png",
    imgALT: "My Project 6",
    title: " Python weather App.",
    techStack: "Python",
    description: "Weather checking app using python tkinter GUI.",
    githubURL: "https://github.com/mzwandile-stuurman/weather_checker",
    liveProjectURL:
      "https://replit.com/@Mzwandile/MzwandileWeatherapp#weather_check.py",
  },
  {
    imgURL: "./BMI.png",
    imgALT: "My Project 7",
    title: " Body Mass Index calculator",
    techStack: "Python",
    description: "An app calculating a person BMI.",
    githubURL: "https://github.com/mzwandile-stuurman/mzwandile-BMI",
    liveProjectURL: "https://replit.com/@Mzwandile/BMInottry#BMInottry.py",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card" techStack=${card.techStack} >
      <img src="${card.imgURL}" alt="${card.imgALT}">
      <h4 class ="card-title">${card.title}</h4>
      <h6 class= "card-tech">${card.techStack}</h6>
      <p class = "card-description">${card.description}</p>
      <a class="card-git" href="${card.githubURL}" target="_blank" >Github</a>
      <a class="card-live" href="${card.liveProjectURL}" target="_blank" >Live</a>
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

// typing text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Aspiring Full Stack Developer."];
const typingDelay = 100;
const erasingDelay = 20;
const newTextDelay = 900;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

type();

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
window.addEventListener("load", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
