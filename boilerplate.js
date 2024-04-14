function showGreeting() {
    var today = new Date();
    var hour = today.getHours();
    var greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById("greeting").textContent = greeting;
}

window.onload = showGreeting;

// Create an observer instance
var observer = new IntersectionObserver(function(entries) {
    // If the bottom element is visible in the viewport, show the popup
    if (entries[0].isIntersecting) {
        window.alert('You have scrolled to the bottom of the page!');
        window.open('https://i.imgflip.com/541qur.jpg', '_blank');
    }
}, { threshold: 1.0 });  // 1.0 means that 100% of the element is visible

// Select the element you want to observe
var bottomElement = document.getElementById('bottom');

// Start observing the element
observer.observe(bottomElement);
