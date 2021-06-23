let i = 0,
  myname;
myname = "Mzwandile Stuurman";

function typing() {
  if (i < myname.length) {
    document.getElementById("type-heading").innerHTML += myname.charAt(i);
    i++;
    setTimeout(typing, 90);
  }
}
typing();

let projects = [
  {
    imgURL: "../Images/contact-form.PNG",
    imgALT: "Contact-form-image",
    title: "Contact-Form",
    techStack: "HTML/CSS",
    description:
      "Contact form created for, <br> any queries/messages that may be directed to me.",
    githubURL: "https://github.com/mzwandile-stuurman/contact-form",
    liveProjectURL: "https://mzwandile-stuurman-contact-form.netlify.app/",
  },
  {
    imgURL: "../Images/timeline.jpg",
    imgALT: "Card2 Image",
    title: "Time-Line",
    techStack: "HTML/CSS",
    description:
      "Time-Line of all my edcational qualifications and experiences.",
    githubURL: "https://github.com/mzwandile-stuurman/timeline",
    liveProjectURL: "https://mzwandile-stuurman-timeline.netlify.app/",
  },
  {
    imgURL: "../Images/Screenshot from 2021-05-14 09-13-34.png",
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
