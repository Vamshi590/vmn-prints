var name = document.getElementById("inputname").value;
var whatsappnumber = document.getElementById("inputnumber").value;
var city = document.getElementById("inputcity").value;
var name = document.getElementById("inputname").value;



const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("inputname").value;
  var whatsappnumber = document.getElementById("inputnumber").value;
  var city = document.getElementById("inputcity").value;
  var numberOfTshirt = document.getElementById("numberOfTshirt").value;

  var tstype = document.getElementsByName("ttype");
  var vals = "";
  for (var i = 0, n = tstype.length; i < n; i++) {
    if (tstype[i].checked) {
      vals += " ," + tstype[i].value;
    }
  }
  console.log(vals);

  var tsdesign = document.getElementsByName("tdesign");
  var tval = "";
  for (var i = 0, n = tsdesign.length; i < n; i++) {
    if (tsdesign[i].checked) {
      tval += " ," + tsdesign[i].value;
    }
    console.log(tval);
  }

  var Whatsappurl =
    "https://wa.me/917842125042?text=" +
    "Name of Customer : " +
    name +
    "%0a" +
    "Number : " +
    whatsappnumber +
    "%0a" +
    "city : " +
    city +
    "%0a" +
    "Number Of Tshirts : " +
    numberOfTshirt +
    "%0a" +
    "Type Of Tshirt : " +
    vals +
    "%0a" +
    "Design Colour : " +
    tval;

  window.open(Whatsappurl, "_blank").focus;
});


// const form = document.querySelector('form');

// form.addEventListener('submit', () =>{
// //     var type = document.getElementsByName("ttype");
// //   var vals = "";
// //   for (var i = 0, n = type.length; i < n; i++) {
// //     if (type[i].checked) {
// //       vals += "," + type[i].value;
// //     }
// //   }
//   if (vals) vals = vals.substring(1);

//   console.log(vals);
// })
  

