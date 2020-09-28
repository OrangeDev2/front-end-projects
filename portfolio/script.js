$(document).ready(function() {
    $("html").on("click", function() {
      var randR = Math.floor(Math.random() * 256) + ", ";
      var randG = Math.floor(Math.random() * 256) + ", ";
      var randB = Math.floor(Math.random() * 256);
  
      var randomRgb = "rgb(" + randR + randG + randB + ")";
      // .res -> body
      //$(".res").html(randomRgb);
      $("body").css("background-color", randomRgb);
      $("body").css("color", "white");
    });
  });