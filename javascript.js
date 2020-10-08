$(document).ready(() => {
  console.log("test");

  $(".TeamComp .Slika").hide();

  var velikost = 20;

  $(".TeamComp .Naslov").on("click", () => {
    console.log("klik");
    $(".TeamComp .Naslov").css("font-size", velikost + "px");
    $(".TeamComp .Naslov").html(
      '<span style="color:red;">' + velikost + "</span>"
    );
    velikost++;
    $(".TeamComp .Slika").toggle();
  });
});
