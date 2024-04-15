// Smooth scrolling for anchor links
$(document).ready(function() {
   $('a[href^="#"]').on('click', function(event) {
     var target = $(this.getAttribute('href'));
     if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
     }
   });
 });
 
 // Toggle active class for navbar links
 $('.navbar-nav .nav-link').on('click', function(){
     $('.navbar-nav').find('.active').removeClass('active');
     $(this).addClass('active');
 });
 
 // Adjust profile height dynamically
window.addEventListener('load', function() {
   var profileImg = document.getElementById('profile-img');
   var profileHeight = profileImg.offsetHeight;
   var profileDetailsBox = document.querySelector('.profile-details-box');
   profileDetailsBox.style.marginTop = profileHeight + 'px';
 });