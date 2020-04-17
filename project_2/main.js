//setting up the variable i for the counter
var i=0;
//function()
function genPic(){
  //set up a list of images to be refreshed in the background
  var images = ["assets/asset_1.png","assets/falling.gif", "assets/asset_2.png",
  "assets/asset_3.png","assets/asset_5.png", "assets/pillsFalling.gif",
   "assets/walking.gif", "assets/textPage.gif"];

  //change the css tag bacgroundimages to whatever random image in the arraylist
  $('.randomImages').css({'background-image': "url("+images[Math.floor(Math.random() *images.length)]+")"})

}
//making a function so every time a click is sensed the penPic function is run again
// basicaaly making it so clicking refreshes the oage
$(document).click(function(){

  if(i==0){
    $("canvas").remove();
  }
  genPic();
  //adding 1 to i to start the counter
  i++;


  //KRIS so its probably something dumb but I tried hiding it before genPic (22)
  //i tried doing if i=0 to hide it tried if i=0 || i<15 tried doing the reverse
  //like if i=15 show else hide and nothing has worked now im big sad
  if ( i<20){
    $("#end").hide();
    $(".randomImages").show();
    // $("sketch.js").hide(); how do i hide this?
  }

  else {
    $("#end").show();
    $(".randomImages").hide();
  }
});
