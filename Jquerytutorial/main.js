var stars = 0;

$(document).ready(function () {

  $(".scene").hide();
  $("#s1").show();

  $("#option1").click(function(){
    $("#s1").hide();
    $("#s2").show();
    // stars++;
    stars = stars + 1;
    $("#star").html(stars);
  });

  $("#option2").click(function(){
    $("#s1").hide();
    $("#s3").show();
  });

  $("#option3").click(function(){
    stars = stars + 1;
    $("#star").html(stars);
    if(stars > 5){
      $("body").css("background", "red");
    }
  });

});
