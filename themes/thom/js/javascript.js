$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade",
    items:1,
    
    

    onInitialize: afterOWLinit, // do some work after OWL init
       afterUpdate : afterOWLinit
  });
  function afterOWLinit() {

       // 1) ASSIGN EACH 'DOT' A NUMBER
      dotcount = 1;
   
      jQuery('.owl-dot').each(function() {
        jQuery( this ).addClass( 'dotnumber' + dotcount);
        jQuery( this ).attr('data-info', dotcount);
        dotcount=dotcount+1;
      });
      
       // 2) ASSIGN EACH 'SLIDE' A NUMBER
      slidecount = 1;
   
      jQuery('.owl-item').not('.cloned').each(function() {
        jQuery( this ).addClass( 'slidenumber' + slidecount);
        slidecount=slidecount+1;
      });
      
      // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
      jQuery('.owl-dot').each(function() {
      
          grab = jQuery(this).data('info');

          slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
          console.log(slidegrab);

          jQuery(this).css("background-image", "url("+slidegrab+")");  

      });
      
      // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
        // TO MAKE IT ALL NEAT 
      amount = jQuery('.owl-dot').length;
      gotowidth = 100/amount;
      
      jQuery('.owl-dot').css("width", gotowidth+"%");
      newwidth = jQuery('.owl-dot').width();
      jQuery('.owl-dot').css("height", newwidth+"px");
      
      

      }
      afterOWLinit();
  $('.container').imagesLoaded( function(){
      $('.grid').masonry({
  // options... 
  itemSelector: '.grid-item',
  //columnWidth: 200
 });

 

    
    

  }) 
});