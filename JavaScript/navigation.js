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
