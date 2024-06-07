document.addEventListener("DOMContentLoaded", function() {
   // Get all the anchor tags
   var links = document.querySelectorAll("a");

   // Add event listener to each anchor tag
   links.forEach(function(link) {
       link.addEventListener("click", function(event) {
           // Prevent the default action of the link
           event.preventDefault();
           
           // Get the href attribute of the clicked link
           var href = this.getAttribute("href");

           // Smoothly scroll to the target
           document.querySelector(href).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
});