/*-----Toggling According -----*/
$(document).ready(function() {
  $("#accordian .about h1").click(function() {
    $('.about h1').addClass('checked');
    $('.blog h1').addClass('small blog-small'); 
    $("#accordian .blog > div").hide(500);
    $("#accordian .blog").animate(
      { width: "9.5%"}, 500,);
    $("#accordian .about").animate(
      { width: "64.55%"}, {duration:500, complete: function(){
        $("#accordian .about > div").show(500);
        $(".icon").show(500);
        $('.blog h1').removeClass('checked');
        $('.about h1').removeClass('small'); 
      }});

  });
  $("#accordian .blog h1").click(function() {
    $('.blog h1').addClass('checked'); 
    $('.about h1').addClass('small');  
    $("#accordian > .about > div").hide(500);
    $("#accordian .about").animate(
      { width: "9.5%" }, 500);
    $("#accordian .blog").animate(
      { width: "64.55%" }, {duration:500, complete:function(){
        $("#accordian > .blog > div").show(500);
        $(".icon").hide(500);
        $('.about h1').removeClass('checked');
        $('.blog h1').removeClass('small blog-small');  
      }});
   
  });

  $(".site").click(function(){
    $("#accordian .blog > div").hide(500);
    $("#accordian .about > div").hide(500);
    $(".icon").hide(500);
    $("#accordian .about").animate(
      { width: "34.75%"}, 500);
    $("#accordian .blog").animate(
      {width: "34.75%"}, 500);

    $('.about h1').removeClass('checked blog-small small');
    $('.blog h1').removeClass('checked small');
  })
});