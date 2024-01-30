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
// Check if the screen width is greater than a certain value (e.g., 768 pixels)
if (window.innerWidth > 768) {
  // Your code for larger screens here
  console.log("You are on a larger screen");
  var newScript = document.createElement('script');
  newScript.type = 'module';
  newScript.id = 'can';
  // Set the source attribute to the URL of the script you want to add
  newScript.src = './dist/index.22d30fb2.js';

  // Optionally, you can set other attributes like type or async
  // newScript.type = 'text/javascript';
  // newScript.async = true;
  

  // Append the new script element to the body
  document.body.appendChild(newScript);
} else {
  // Your code for smaller screens here
  console.log("You are on a smaller screen");
}
function scrollToBottom(event) {
  // Prevent the default behavior (page reload)
  event.preventDefault();
  // Scroll to the bottom of the page
  window.scrollTo({
    top: 10000,
    behavior: 'smooth' // You can use 'auto' for instant scrolling
  });
}