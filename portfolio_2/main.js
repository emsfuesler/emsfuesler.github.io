$(document).ready(function () {

  $(".homesInfo").hide();
  $(".pollenInfo").hide();
  $(".treeInfo").hide();
  $(".ficusInfo").hide();
  $(".fernInfo").hide();
  $(".mouseInfo").hide();
  $(".sporesInfo").hide();

  $(".homes").click(function(){
    $(".homesInfo").toggle();
  });

  $(".pollen").click(function(){
    $(".pollenInfo").toggle();
  });

  $(".tree").click(function(){
    $(".treeInfo").toggle();
  });

  $(".ficus").click(function(){
    $(".ficusInfo").toggle();
  });

  $(".fern").click(function(){
    $(".fernInfo").toggle();
  });

  $(".mouse").click(function(){
    $(".mouseInfo").toggle();
  });

  $(".spores").click(function(){
    $(".sporesInfo").toggle();
  });

});
