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

let projects = [
  {
    imgURL: "./lotto.png",
    imgALT: "Contact-form-image",
    title: "Lotto number generator",
    techStack: "Python",
    description: "Software to generate lotto numbers.",
    githubURL: "https://github.com/mzwandile-stuurman/python_lotto_machine",
    liveProjectURL:
      "https://replit.com/@Mzwandile/Pythonlottogenerator#main.py",
  },
  {
    imgURL: "./PokeDex.png",
    imgALT: "Card2 Image",
    title: "Pokedex",
    techStack: "JavaScript",
    description: "Pokedex that gives a list of Pokemons to chose from.",
    githubURL: "https://github.com/mzwandile-stuurman/pokemon-API",
    liveProjectURL: "https://mzwandile-pokedex.netlify.app/",
  },
  {
    imgURL: "./Screenshot from 2021-05-14 09-13-34.png",
    imgALT: "Card3 Image",
    title: "Sneaker Site",
    techStack: "HTML/CSS",
    description: "Dummy Sneaker site for advertising, orders and purchase",
    githubURL: "https://github.com/mzwandile-stuurman/new-seaker-site",
    liveProjectURL: "https://mzwandile-stuurman-seaker-site.netlify.app/",
  },
  {
    imgURL: "../Images/Python.png",
    imgALT: "Card3 Image",
    title: "Temperature Converter",
    techStack: "Python",
    description:
      "Python tkinter, temperature converter. <br> Converts Ceclius to Fahrenheit and vise-versa",
    githubURL: "https://github.com/mzwandile-stuurman/temperature",
    liveProjectURL:
      "https://replit.com/@Mzwandile/tempareture-converter#main.py",
  },
];

function createCard(card) {
  let createdCard = ` 
  <div class = project-card>
    <img src="${card.imgURL}" alt="${card.imgALT}">
    <h2>${card.title}</h2>
    <h3>${card.techStack}</h3>
    <p>${card.description}</p>
    <a href="${card.githubURL}">Github</a>
    <a href="${card.liveProjectURL}">Live</a>
</div>`;
  return createCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".portfolio-container");
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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
