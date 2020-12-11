addItem = document.getElementsByClassName("add-Item");

for(var i =0 ; addItem.length > i ; i++){
    addItem[i].addEventListener("click", addItemCart);
}

function addItemCart(e){
    var child =  e.target;
    var product = child.parentElement
    var find = product.querySelector("i")
    i=i+1;
    modal = `<div class=" my-2 d-flex justify-content-between text-dark add-cart-${i}" id=''>
            <button class="btn btn-sm btn-danger deleteId${i}" onclick="deleteItem(${i})" id="deleteId-${i}">Delete form cart</button>
        </div>`
    add = document.getElementsByClassName("model-get-value")[0].innerHTML += modal
    document.getElementsByClassName("add-cart-"+i)[0].append(find)
}

function deleteItem(value){
    let div = document.getElementsByClassName("deleteId"+value)[0].parentElement.remove()
    console.log(div)
}



 // var parent =  addItem[i].parentElement;
// var product = parent.querySelector("i")
// i=i+1;
// modal = `<div class=" my-2 d-flex justify-content-between text-dark add-cart-`+i+`" id=''>
//         <button class="btn btn-sm btn-danger ">Delete form cart</button>
//     </div>`
// add = document.getElementsByClassName("model-get-value")[0].innerHTML += modal
// document.getElementsByClassName("add-cart-"+i)[0].append(product)