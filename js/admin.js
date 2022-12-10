let storageProducts = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [
    {
        "id": 1,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "purple",
        "price": "1 000",
        "imgUrl": "https://i.postimg.cc/C5VLNpvF/312161614-147791677962904-8794326037841940307-n.jpg"
    },
    {
        "id": 2,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "yellow",
        "price": "1 000",
        "imgUrl": "https://i.postimg.cc/Nj1FP49s/311987402-147784904630248-4843105992973323708-n.jpg"
    },
    {
        "id": 3,
        "description": "Dress",
        "design": "plus size",
        "size": "30-34",
        "color": "black with white floral",
        "price": "1 000",
        "imgUrl": "https://i.postimg.cc/Gmh3qCCQ/312025777-147386548003417-7561275927352785044-n.jpg"
    },
    {
        "id": 4,
        "description": "dress",
        "design": "plus size",
        "size": "30-36",
        "color": "Black & gold",
        "price": "1 000",
        "imgUrl": "https://i.postimg.cc/44bybYQ9/312230677-147780027964069-1962493219002362187-n.jpg"
    },
    {
        "id": 5,
        "description": "Dress",
        "design": "Slim",
        "size": "26-30",
        "color": "Black",
        "price": "1 200",
        "imgUrl": "https://i.postimg.cc/hvTgZdVd/306778188-136477075761031-2819533161889739751-n.jpg"
    },
    {
        "id": 6,
        "description": "Dress",
        "design": "Slim",
        "size": "26-30",
        "color": "dark-green",
        "price": "1 200",
        "imgUrl": "https://i.postimg.cc/rwn6JJ7H/306801021-136477082427697-4596670800144649092-n.jpg"
    },
    {
        "id": 7,
        "description": "Dress",
        "design": "Slim",
        "size": "28-32",
        "color": "Orange",
        "price": "1200",
        "imgUrl": "https://i.postimg.cc/1zmtgJwY/306833579-136463679095704-2639895560092509327-n.jpg"
    },
    {
        "id": 8,
        "description": "Dress",
        "design": "Slim",
        "size": "28-32",
        "color": "White",
        "price": "1200", 
        "imgUrl": "https://i.postimg.cc/02Z72W6r/306905149-136464419095630-5417287620612295914-n.jpg"
    },
    {
        "id": 9,
        "description": "Blazer",
        "design": "Formal",
        "size": "Medium",
        "color": "Blue",
        "price": "900",
        "imgUrl": "https://i.postimg.cc/ydwf1VNm/301357706-131383799603692-2016116021559828040-n.jpg"
    },
    {
        "id": 10,
        "description": "Blazer",
        "design": "Formal",
        "size": "Medium",
        "color": "Black",
        "price": "900",
        "imgUrl": "https://i.postimg.cc/v8Kzd8KD/301388117-131383782937027-7170277627433445644-n.jpg"
    }

]
    

function productDisplay(id){
    const table = document.getElementById('card')
    for(var i = 0; i < storageProducts.length; i++) {
        table.innerHTML +=
                `
                
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Design</th>
          <th scope="col">Size</th>
          <th scope="col">Color</th>
          <th scope="col">Price</th>
        </tr>
      </thead>

      <tbody>
        <tr>
        <th scope="row"># : ${storageProducts[i].index}</th>
        <td> ${storageProducts[i].description}</td>
        <td> ${storageProducts[i].design}</td>
        <td> ${storageProducts[i].size}</td>
        <td> ${storageProducts[i].color}</td>
        <td> ${storageProducts[i].price}</td>
        </tr>
      </tbody> 
                `
    }
}
productDisplay()
// let products = JSON.parse(localStorage.getItem('products'));

// let btnSorting = document.querySelector('#sorting');

// let btnAddProduct = document.querySelector('#addProducts');
// let adminTbody = document.querySelector('#admin');
// let formWrapper = document.querySelector('.formWrapper');
// function display() {
//     try{
//         console.log(products);
//         adminTbody.innerHTML = "";
//         if(!products.length) throw "Please add products";
//         products.forEach(item=>{
//             adminTbody.innerHTML += `
//                 <tr>
//                     <td>
//                         <div class="flex-wrapper">
//                             <img src="${item.image}" alt="${item.id}" loading="lazy"/>
//                             <h4>${item.make}</h4>
//                         </div>
//                     </td>
//                     <td>${item.description}</td>
//                     <td>R${item.price}</td>
//                     <td id="btnCols">
//                         <button>Edit</button>
//                         <button onclick='deleteProduct(${JSON.stringify(item)})'>Delete</button>
//                     </td>     
//                 </tr>
//             `
//         });
//     }catch(e) {
//         alert(e);
//     }
// };
// display();
//

// let isToggle = false;
// btnSorting.addEventListener('click',()=>{
//     if(!isToggle) {
//         products.sort((a, b)=> b.id - a.id);
//         btnSorting.textContent = "Sort by design";
//         isToggle = true;
//     }else {
//         products.sort((a, b)=> a.id - b.id);
//         btnSorting.textContent = "Sort by size";
//         isToggle = false;
//     }
//     display();
// })

// btnAddProduct.addEventListener('click', ()=>{
//     formWrapper.innerHTML = `
//         <div class="addProduct">
//             <form>
//                 <div class="container">
//                     <button id="btnClose">Close</button>
//                     <input type="text" placeholder="dress or blazer?">
//                 </div>
//             </form>
//         </div>
//     `
// });

// function deleteProduct(item) {
//     let index = products.findIndex(a => {
//         return a.id == item.id
//     });
//     products.splice(index, 1);
//     localStorage.setItem('products', products);
//     display();
// }  