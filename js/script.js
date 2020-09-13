$(document).ready(function () {
  $(".box").on("click", function () {
    /**
     * when we click on an element that has
     * a 'box' class, this event will initiate.
     */
    let classNames = $(this).attr("class").split(" ");
    let boxClass = classNames[0];
    let className = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      // If this object is already red, turn it black
      $("." + className).css("background-color", "#000");
    } else {
      // Else turn all elements with a box class black
      // and then change the color of all elements
      // with the same class name as the clicked element
      // to red.
      $("." + boxClass).css("background-color", "#000");
      $("." + className).css("background-color", "red");
    }
  });
});

$("p").click(function () {
  $(this).slideToggle("slow"); //this selects just the one p tag clicked on to be acted upon
});

$("button").mouseenter(function () {
  $(this).removeClass("makeRed").addClass("makeBlue");
});
$("button").mouseleave(function () {
  $(this).removeClass("makeBlue").addClass("makeRed");
});
