// let products = [  //product
//   {
//         id: 1,
//         imageUrl: "tomato.img",
//         name: "Tomato",
//         count: 5,
//         weight: "200g",
//         comments: ["Great tomatos"]
//   },
//   {
//         id: 2,
//         imageUrl: "orange.img",
//         name: "Orange",
//         count: 2,
//         weight: "500g",
//         comments: ["Yeah! I like oranges!"]
//   },
//   {
//         id: 3,
//         imageUrl: "banana.img",
//         name: "Banana",
//         count: 10,
//         weight: "245g",
//         comments: ["Baa-a-aa-na-na-sss..."]
//   },
//   {
//         id: 4,
//         imageUrl: "apple.img",
//         name: "Apple",
//         count: 25,
//         weight: "612g",
//         comments: ["Apples!!!"]
//   }
// ];
let product;
if (localStorage.getItem("productList")) {
  product = JSON.parse(localStorage.getItem("productList"));
} else {
  product = [];
}

let btnAdd = document.querySelector('.btnAdd');
let btnGet = document.querySelector('.btnShow');
// let myTable = document.querySelector('#table');


//showing all items by pressing on show all button

// let headers = ['ID', 'Image', 'Name', 'Amount', 'Weight', 'Comments', 'Delete?'];

// function showDetails() {
  //ev.preventDefault();
  //document.querySelector("table").remove();
//   let table = document.createElement('table');
//   let headerRow = document.createElement('tr');

//   headers.forEach(headerText => {
//     let header = document.createElement('th');
//     let textNode = document.createTextNode(headerText);
//     header.appendChild(textNode);
//     headerRow.appendChild(header);
//   });
 
//   table.appendChild(headerRow);
 
//   product.forEach(pro => {
//     let row = document.createElement('tr');
 
//     Object.values(pro).forEach(text => {
//       let cell = document.createElement('td');
//       let textNode = document.createTextNode(text);
//       cell.appendChild(textNode);
//       row.appendChild(cell);
//     })
//     table.appendChild(row);
//   });
//   myTable.appendChild(table);
 
// }
function showDetails() {
  for (const prod of product) {
    let productBlock = document.createElement('div');
    productBlock.classList.add("product-block");

    let itemId = document.createElement("div");
    itemId.classList.add("product-style");
    itemId.innerText = prod.id;
    
    let itemImage = document.createElement("div");
    itemImage.classList.add("product-style");
    itemImage.innerText = prod.image;

    let itemName = document.createElement("div");
    itemName.innerText = prod.name;
    itemName.classList.add("product-style");
    
    let itemAmount = document.createElement("div");
    itemAmount.classList.add("product-style");
    itemAmount.innerText = prod.amount;
    
    let itemWeight = document.createElement("div");
    itemWeight.classList.add("product-style");
    itemWeight.innerText = prod.weight;

    let itemComments = document.createElement("div");
    itemComments.innerText = prod.comment;
    itemComments.classList.add("product-style");

    productBlock.appendChild(itemId);
    productBlock.appendChild(itemImage);
    productBlock.appendChild(itemName);
    productBlock.appendChild(itemAmount);
    productBlock.appendChild(itemWeight);
    productBlock.appendChild(itemComments);

    document.getElementById("presenter").appendChild(productBlock);
    
  }
}

btnGet.addEventListener('click', () => {
  showDetails();
});
function clearForm() {
    document.querySelector("#id").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#comments").value = "";
}
//adding object to array after pressing button addItem

btnAdd.addEventListener('click', () => {
  //ev.preventDefault();
  let newItem = {
    id: document.querySelector("#id").value,
    image: document.querySelector("#image").value,
    name: document.querySelector("#name").value,
    amount: document.querySelector("#amount").value,
    weight: document.querySelector("#weight").value,
    comment: document.querySelector("#comments").value
  }
  product.push(newItem);
  localStorage.setItem('productList', JSON.stringify(product));
  clearForm();
  // showDetails();
});

// $(".btnAdd").click(function () {
//     displayProducts();
// });
// function displayProducts(){
//   for (let i = 0; i < product.length; i++){
//     $("<tr class='row'></tr>").appendTo("table");
//     $("<td class='itemName disp'></td>" ).appendTo( ".row" ).text(product[i].imageUrl);
    // $("<td class='itemAmount disp'></td>" ).appendTo( ".row" ).text(product[i].name);
    // $("<td class='itemDetails disp'></td>" ).appendTo( ".row" ).text(product[i].count);
    // $("<button class='itemDetails disp'>Details</button>" ).appendTo( ".row" );
//   };
// };

// let btnAdd = document.querySelector('.btnAdd');
// let table = document.querySelector('table');

// let nameInput = document.querySelector('#name');
// let amountInput = document.querySelector('#amount');
// let detailsInput = document.querySelector('#details');

// btnAdd.addEventListener('click', () => { 

  
//     let name = nameInput.value;
//     let amount = amountInput.value;
//     let details = detailsInput.value;

//     let template = `
//         <tr>
//             <td>${name}</td>
//             <td>${amount}</td>
//             <td>${details}</td>
//             <td><button class="btnDetails">Show Details</button></td>
//         </tr>`;

//     table.innerHTML += template;

// });
