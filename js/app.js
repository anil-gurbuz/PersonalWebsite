// const collapsibles = document.querySelectorAll('.collapsible');
// collapsibles.forEach((item) => item.addEventListener('click', function () {
//   this.classList.toggle('collapsible--expanded');
// }))


// Add navigation bar and the collapsible functionality
document.addEventListener('DOMContentLoaded', function () {
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(nav_html=> {
      document.getElementById('navigation').innerHTML = nav_html;

      const collapsibles = document.querySelectorAll('.collapsible');
      collapsibles.forEach((item) => item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded');
      }))

    })
    .
      catch(error => {
        console.error('Error fetching navbar:', error);
      });
    });
