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
    imgURL: "https://picsum.photos/300?random=23",
    imgALT: "This is cool",
    title: "Some Title",
    techStack: "JavaScript",
    description: "I made this",
    githubURL: "#",
    liveProjectURL: "#",
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
    imgURL: "https://picsum.photos/300?random=5",
    imgALT: "My Project 5",
    title: "My Project Title 5",
    techStack: "Python",
    description: "This is dynamic",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "https://picsum.photos/300?random=6",
    imgALT: "My Project 6",
    title: "My Project Title 6",
    techStack: "HTML/CSS",
    description: "I just created this",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "https://picsum.photos/300?random=7",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "JavaScript",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
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
