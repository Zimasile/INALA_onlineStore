let products = JSON.parse(localStorage.getItem('products'));

let btnSorting = document.querySelector('#sorting');

let btnAddProduct = document.querySelector('#addProducts');
let adminTbody = document.querySelector('#admin');
let formWrapper = document.querySelector('.formWrapper');
function display() {
    try{
        console.log(products);
        adminTbody.innerHTML = "";
        if(!products.length) throw "Please add products";
        products.forEach(item=>{
            adminTbody.innerHTML += `
                <tr>
                    <td>
                        <div class="flex-wrapper">
                            <img src="${item.image}" alt="${item.id}" loading="lazy"/>
                            <h4>${item.make}</h4>
                        </div>
                    </td>
                    <td>${item.description}</td>
                    <td>R${item.price}</td>
                    <td id="btnCols">
                        <button>Edit</button>
                        <button onclick='deleteProduct(${JSON.stringify(item)})'>Delete</button>
                    </td>     
                </tr>
            `
        });
    }catch(e) {
        alert(e);
    }
};
display();
// Sorting
let isToggle = false;
btnSorting.addEventListener('click',()=>{
    if(!isToggle) {
        products.sort((a, b)=> b.id - a.id);
        btnSorting.textContent = "Sorting (desisn)";
        isToggle = true;
    }else {
        products.sort((a, b)=> a.id - b.id);
        btnSorting.textContent = "Sorted by asc (ID)";
        isToggle = false;
    }
    display();
})

btnAddProduct.addEventListener('click', ()=>{
    formWrapper.innerHTML = `
        <div class="addingProduct">
            <form>
                <div class="container">
                    <button id="btnClose">Close</button>
                    <input type="text" placeholder="Enter your laptop make">
                </div>
            </form>
        </div>
    `
});

function deleteProduct(item) {
    let index = products.findIndex(a => {
        return a.id == item.id
    });
    products.splice(index, 1);
    localStorage.setItem('products', products);
    display();
}  