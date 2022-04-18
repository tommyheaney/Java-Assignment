// Changes initial script to Blue

var blues = "I have the blues ";
var blues = blues.fontcolor("blue");
document.write(blues);

// Change document write from Dad to Son or Daughter will change the name away from Gordon on Frotend browser

var Family = "McKenzie ", Dad = "Gordon ", Son = "Paul ", Daughter = "Lucy ";
document.write(Dad);
document.write("Have a nice day!");

// Script for the Try it Button

function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace(/microsoft/i, "W3Schools");
  }