
var accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.classList.toggle("active-bg");
  });
});



const navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach(link =>
{
  link.addEventListener('mouseover',function(){
    link.classList.add("link-hover")
  })
  link.addEventListener('mouseout',function(){
    link.classList.remove("link-hover")
  })
  
}
)


document.addEventListener('DOMContentLoaded', function () {
  const postsPerPage = 8;
  const posts = document.querySelectorAll('.row .col-6');
  const paginationLinks = document.querySelectorAll('.pagination .page-link');
  const totalPages = Math.ceil(posts.length / postsPerPage);

  function showPage(pageNumber) {
    posts.forEach((post, index) => {
      post.style.display = (index >= (pageNumber - 1) * postsPerPage && index < pageNumber * postsPerPage) ? 'block' : 'none';
    });
  }

  function setupPagination() {
    paginationLinks.forEach((link, index) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const pageNumber = index + 1;
        showPage(pageNumber);
      });
    });
    showPage(1);
  }

  setupPagination();
});


