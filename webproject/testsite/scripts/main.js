var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
/*document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
  跳出小視窗
  */
var myImage = document.querySelector("img");

/*myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/html-icon.png") {
    myImage.setAttribute("src", "images/js-icon.png");
  } else {
    myImage.setAttribute("src", "images/html-icon.png");
  }
};*/

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
/*function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Mozilla is cool, " + myName;
}*/
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello Welcome, ' + myName + '   !';
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Welcome, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
  