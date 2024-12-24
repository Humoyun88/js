let containers = document.querySelectorAll('.container');
let box =  document.querySelector('.box');
let boxImg =  document.querySelector('.box_img');

containers.forEach((container, index) => {
  container.addEventListener("click", function () {
    let newImageSrc = container.querySelector('img').src;   
    boxImg.src = newImageSrc;
  });
});