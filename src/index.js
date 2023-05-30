let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const URL="http://localhost:3000/toys"
  fetch(URL)
  .then(response=>response.json())
  .then(toys=>{
    toys.forEach(toy=>createToy(toy))
  })
});

function createToy(toy){
  const toyList=document.querySelector("#toy-collection")
  //get toy name
  const name=document.createElement("h2")
  name.textContent=toy.name
  //get toy image
  const image=document.createElement("img")
  image.src=toy.image
  image.classList.add("toy-avatar")
  //get toy likes
  const likes=document.createElement("p")
  likes.textContent=toy.likes+" likes"
  //displaying likes for toys using alternate
  //likes.textContent=`${toy.likes} likes`
  //add like button
  const button=document.createElement("button")
  button.textContent="like"
  button.id=toy.id
  button.classList.add("like-btn")
  //add toy card
  const card=document.createElement("div")
  card.append(name,image,likes,button)
  card.classList.add("card")
  //add toy card to toy list or collection
  toyList.append(card)
}




