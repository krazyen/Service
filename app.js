
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
window.onload = function() {
  // Change the content of each column
  document.getElementById("column1").innerHTML = "Column 1 Content";
  document.getElementById("column2").innerHTML = "Column 2 Content";
  document.getElementById("column3").innerHTML = "Column 3 Content";
};