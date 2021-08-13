// User interface logic:

let sideA;
let sideB;
let sideC;

let equal = "Equilateral";
let isos = "Isosceles";
let scal = "Scalene";

// Business logic:
$(document).ready(function() {
  $("form#calculate").submit(function(event) {
   event.preventDefault();
   $(".card-hidden").show();
    const sideA = parseInt($("input#sideA").val());
    const sideB = parseInt($("input#sideB").val());
    const sideC = parseInt($("input#sideC").val());

    if (sideA === sideB && sideB === sideC) {
      $("#equal").show();
      $("#isos").hide();
      $("#scal").hide();
    } else if ( sideA === sideB || sideB === sideC || sideC === sideA ) {
      $("#equal").hide();
      $("#isos").show();
      $("#scal").hide();
    } else {
      $("#equal").hide();
      $("#isos").hide();
      $("#scal").show();
    }

    // $("#output").show();
  });
});



