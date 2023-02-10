// Have an event listener that brings a dropdown of the project description and the preview photo/link upon click

// Create event listener that listens for click on project title card
// document
//   .getElementById('project-1')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-1-card').style.display = 'block';
//   });
// document
//   .getElementById('project-2')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-2-card').style.display = 'block';
//   });
// document
//   .getElementById('project-3')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-3-card').style.display = 'block';
//   });
// document
//   .getElementById('project-4')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-4-card').style.display = 'block';
//   });
// document
//   .getElementById('project-5')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-5-card').style.display = 'block';
//   });
// document
//   .getElementById('project-6')
//   .addEventListener('click', function displayCardOne() {
//     document.getElementById('project-6-card').style.display = 'block';
//   });
// // Upon click, fluidly bring description and image card down

// // When the title card is highlighted, there is a plus sign at the end of the card to encourage user to click to open description and preview

// // When the description is displayed, there is a minus sign where the plus was that the user can click to hide the description and preview

// // When the user hovers over the main photo, the about me section is displayed

// // When the user clicks on the about me navbar link it takes them to the section with the photo and the text is automatically displayed

// // When the user hovers over the project link in the dropdown of the navbar a small description is displayed to the right

// // While one project is displayed all others shift to make room vertically

// // Only one project card can be displayed at a time

// document
//   .querySelector('card-header::after')
//   .addEventListener('click', function () {
//     document.querySelector('card-header::after').style.content = '-';
//   });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown2').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName('dropdown-card');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
