//фото / назва  / короткий опис / кылькысть одиниць / кнопка переходу на сторінку деталів
// var soldiers = [];

// function Soldier(allegiance, armor, weapon){
//   this.allegiance = allegiance;
//   this.armor = armor;
//   this.weapon = weapon;
//   this.doReport = function () {
//     return this.armor + ' and ' + this.weapon;
//   }
// }

// function doReport() {
//    output = "";
//    for(var i = 0; i < soldiers.length; i++) {
//       output += (i + 1) + ") " + soldiers[i].doReport() + "; ";
//    }
//    document.getElementById("output").innerHTML = output;
// }

// function hire() {
//   var soldier =  new Soldier(
//     document.getElementById("allegiance").value, 
//     document.getElementById("armor").value, 
//     document.getElementById("weapon").value
//   );
//   soldiers.push(soldier);
//   doReport();
// }
let product = [
  {
        id: 1,
        imageUrl: "tomato.img",
        name: "Tomato",
        count: 5,
        size: {
          width: 100,
          height: 100,
        },
        weight: "200g",
        comments: ["Great tomatos"]
  },
  {
        id: 2,
        imageUrl: "orange.img",
        name: "Orange",
        count: 2,
        size: {
          width: 100,
          height: 100,
        },
        weight: "500g",
        comments: ["Yeah! I like oranges!"]
  },
  {
        id: 3,
        imageUrl: "banana.img",
        name: "Banana",
        count: 10,
        size: {
          width: 10,
          height: 30,
        },
        weight: "245g",
        comments: ["Baa-a-aa-na-na-sss..."]
  },
  {
        id: 4,
        imageUrl: "apple.img",
        name: "Apple",
        count: 25,
        size: {
          width: 10,
          height: 30,
        },
        weight: "612g",
        comments: ["Apples!!!"]
  }
];

$(".getItemsBtn").click(function(){
    displayProducts();
});

function displayProducts(){
for(let i = 0; i < product.length; i++){
    $( "<div class='itemName disp'></div>" ).appendTo( ".wrapper" ).text(product[i].imageUrl);
    $( "<div class='itemAmount disp'></div>" ).appendTo( ".wrapper" ).text(product[i].name);
    $( "<div class='itemDetails disp'></div>" ).appendTo( ".wrapper" ).text(product[i].count);
    $( "<button class='itemName disp'>Details</button>" ).appendTo( ".wrapper" );
  };
};