// Example: A simple JavaScript to toggle the visibility of the skills section
document.getElementById('skills').addEventListener('click', function() {
    this.querySelector('ul').style.display = this.querySelector('ul').style.display === 'none' ? 'block' : 'none';
});
 
