const button = document.querySelector(".icon-upload");
const container = document.querySelector("#container");
const input = document.querySelector("#input");
const trash = document.querySelectorAll(".icon-trash");
const finish = document.querySelector(".finish");
const star = document.querySelector(".icon-star");
console.log(star);

// add ele
button.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
   <div class="task">
   <span class="icon-star icon"> </span>
   <p class="task-text">${input.value}</p>

   <div>
     <span class="icon-trash icon"> </span>

     <span class="icon-angry2 icon"> </span>
   </div>

 </div>
   `;
  container.innerHTML += task;
  input.value = "";
});

// remove ele
// container.addEventListener("click", (eo) => {
//   // السله
//   if (eo.target.className == "icon-trash icon") {
//     eo.target.parentElement.parentElement.remove();

//   //  angry
// } else if (eo.target.className == "icon-angry2 icon") {
//   eo.target.classList.add("dn");
//   const heart = `<span class="icon-heart"></span>`;

//   eo.target.parentElement.parentElement
//     .getElementsByClassName("task-text")[0]
//     .classList.add("finish");

//   eo.target.parentElement.innerHTML += heart;

// heart
// } else if (eo.target.className == "icon-heart") {
//   eo.target.parentElement.parentElement
//   .getElementsByClassName("task-text")[0]
//   .classList.remove("finish");

//   eo.target.classList.add("dn")
//   const angry = `<span class="icon-angry2 icon"> </span>`
//   eo.target.parentElement.innerHTML += angry

// star
//   } else if (eo.target.className == "icon-star icon") {
//        eo.target.classList.add("orange")
//        container.prepend(eo.target.parentElement)

//   } else if (eo.target.className == "icon-star icon orange") {
//     eo.target.classList.remove("orange")
//   }
// });

container.addEventListener("click" , (eo) => {
  switch (eo.target.className) {
    // السله
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;
  
    // angry
    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heart = `<span class="icon-heart"></span>`;
  
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
  
      eo.target.parentElement.innerHTML += heart;
      break;
  
    // heart
    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");
  
      eo.target.classList.add("dn");
      const angry = `<span class="icon-angry2 icon"> </span>`;
      eo.target.parentElement.innerHTML += angry;
      break;
  
    // star
    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;
  
    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      break;
  
    // default:

    //   break;
  }
  
})
