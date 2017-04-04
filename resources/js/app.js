
var i;
var list = document.querySelector('ul');
var topicsEntered = document.getElementById("topicsEntered");
var delButton = document.getElementsByClassName("delButton");
var topicHeader = document.getElementById("topicHeader");
var listCollection = document.body.childNodes[1].getElementsByTagName('ul').topicsEntered.getElementsByTagName('li');

function newTopic() {
  var createdItem = document.createElement("li");
  var entered = document.getElementById("topic").value;
  var enteredText = document.createTextNode(entered);

  // logTopic();
  createdItem.appendChild(enteredText);
  if (entered === '') {
    // do not create new topic
    return false
    } 
  else {
    document.getElementById("topicsEntered").appendChild(createdItem);
    }


// Create a delete button and append it to each topic
  document.getElementById("topic").value = "";
  var attachButton = document.createElement("SPAN");
  var crissCross = document.createTextNode("\u2612");
  attachButton.className = "delButton";
  attachButton.appendChild(crissCross);
  createdItem.appendChild(attachButton);
// Click on a delete button to remove the current topic element
for (i = 0; i < delButton.length; i++) {
  delButton[i].onclick = function() {
    var listItem = this.parentElement;
    list.removeChild(listItem);
    }
  }
}


console.log(listCollection);