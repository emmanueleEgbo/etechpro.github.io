
var input = document.getElementById("userInput");
var addButton = document.getElementById("addButton");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListItems(){
  var li = document.createElement("li");
  li.appendChild (document.createTextNode (input.value + " ") );

  // Creating a delete button and configuring it

  var delButton = document.createElement("button");
  delButton.classList.add("delete");
  delButton.textContent="Delete";

// Dynamically applying some style to the delete button

  delButton.style.heigth ="30px";
  delButton.style.width ="70px";
  delButton.style.margin = "5px";
  delButton.style.backgroundColor ="floralwhite";
 
  delButton.style.alignSelf = "center";

  // Appending the button to the list item

  li.appendChild(delButton);
  ul.appendChild(li);
  input.value = "";
}


function addItemOnButtonClick(){
  if(inputLength() > 0){
    createListItems();
  } 
}

function addItemOnKeyPress(event){
  if(inputLength() > 0 && event.keyCode===13){
      createListItems();
    }
}

function deleteItemOnButtonClick(event){
  // Determine if the button clicked was a delete button
  if(event.target.classList.contains("delete")){
    //Remove the closest li ancestor to the clicked element
    event.target.closest("li").remove();
  }

}

addButton.addEventListener("click", addItemOnButtonClick ) ;

//use keydown, keypress is deprecated.
input.addEventListener("keydown", addItemOnKeyPress );

//Handles all the clicks that occurs within the <ul> at the <ul> level, instead of setting each button within the <ul> up with its own click handler.
ul.addEventListener("click", deleteItemOnButtonClick);