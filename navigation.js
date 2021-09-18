const TypeWriter = function(txtElement, words, wait =500){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait,10);
  this.type();
  this.isDeleting = false;
  
}

// Type Method
TypeWriter.prototype.type = function(){
 // current index of word
 const current = this.wordIndex % this.words.length;
 // Get full text of current word
 const fullTxt = this.words[current];
 
 // check if deleting
 if(this.isDeleting){


  //remove char

     
    this.txt = fullTxt.substring(0, this.txt.length -1);

 }else{
     // Add char

     this.txt = fullTxt.substring(0, this.txt.length +1);

 }

 // insert txt into element
 this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

 // initial Type speed
 let typespeed = 200;

 if(this.isDeleting){
     typespeed /= 2;
 }

 // if word is complete
 if(!this.isDeleting && this.txt === fullTxt){
     // make pause end
     typespeed = this.wait;
     // set delete to true
     this.isDeleting = true;

 }else if(this.isDeleting && this.txt === ''){
     this.isDeleting=false;
     //move to next word
     this.wordIndex++;
     // pause before start typing
     typespeed = 200;
 }

  setTimeout(() => this.type(), typespeed)
}

// Init on DOM Load

document.addEventListener('DOMContentLoaded', init);

// Init App

function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);

}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Card filtering
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


