/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

//"carousel-container"
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
linkOne = "./assets/carousel/mountains.jpeg";
linkTwo = "./assets/carousel/computer.jpeg";
linkThree = "./assets/carousel/trees.jpeg";
linkFour = "./assets/carousel/turntable.jpeg";
function carouselMaker(imgOne, imgTwo, imgThree, imgFour){
  //create Elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const pic1 = document.createElement('img');
  const pic2 = document.createElement('img');
  const pic3 = document.createElement('img');
  const pic4 = document.createElement('img');
  const rightButton = document.createElement('div');
  const pics = [pic1, pic2, pic3, pic4];
  var currentPic = 0;
  const hideShow = ()=>{
    pics[currentPic].classList.toggle('imgSeen')};
  //assign classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  pic1.classList.add('imgSeen');
  //assign content/text
  pic1.src = imgOne;
  pic2.src = imgTwo;
  pic3.src = imgThree;
  pic4.src = imgFour;
  leftButton.textContent = '<' ;
  rightButton.textContent = '>' ;
  //create parent child relations
  carousel.appendChild(leftButton);
  carousel.appendChild(pic1);
  carousel.appendChild(pic2);
  carousel.appendChild(pic3);
  carousel.appendChild(pic4);
  carousel.appendChild(rightButton);
  //Events
  rightButton.addEventListener('click',(event) => {
    hideShow;
    if (currentPic === 3){
      currentPic = 0;
    }
    else {currentPic++;}
    hideShow;
  });
  leftButton.addEventListener('click', (event)=>{
    console.log(`Event happened; Current Pic waS ${currentPic}`)
    hideShow;
    if (currentPic === 0){
      currentPic = 3;
    }
    else{currentPic -- ;}
    hideShow;
    console.log(`Event happened; Current Pic waS ${currentPic}`);
  })
  //put on DOM
  console.log(carousel);
  document.querySelector(".carousel-container").appendChild(carousel);
  
  
}
carouselMaker(linkOne,linkTwo, linkThree, linkFour);