const keyframes = [
  { opacity: 0, transform: 'translateX(-100%)' },
  { opacity: 1, transform: 'translateX(0)' }
];
const options = {
  duration: 2000, // animation duration in milliseconds
  easing: 'ease-in-out', // easing function
  fill: 'forwards' // keep the element at the final state after the animation
};  
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      targetElement.animate(keyframes, options);
      targ.animate(keyframes, options);
      targ.style.zIndex = '-1';
      // You can also disconnect the observer if you only want to trigger the log once
      
      observer.disconnect();
    }
  });
}

// Create an Intersection Observer with the callback function
const observer = new IntersectionObserver(handleIntersection);

// Target the element with the id "unprof"
const targetElement = document.getElementById('unprof');
const targ = document.getElementById('heading')

// Start observing the target element
observer.observe(targetElement);

let para = document.getElementById("para");
let slides = ["img.png ","img1.png ","img3.png ","img4.png "]
let i = 0;
function changeslides() {
  if (i!=4) {
    para.innerHTML = "<img src=imgs/" + slides[i] + "class='para'>"
    i++;
  }
  else{
    i = 0;
  }
}
setInterval(changeslides,1000)
