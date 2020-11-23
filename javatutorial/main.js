var stars = 0;

$(document).ready(function () {

$(".scene").hide();
$("#s1").show();

$("#option1").click(function(){
  $("#s1").hide();
  $("#s2").show();

  stars ++ ;
  $("#stars").html(stars);
})


  $("#option2").click(function(){
    $("#s1").hide();
    $("#s3").show();

});

});
