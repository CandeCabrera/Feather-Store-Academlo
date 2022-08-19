'use strict'
//import {} from './index.js'


//! ******************* ELEMENTOS DEL DOM *********************

//* ••••••••• MAIN
const contadorCarrito = document.querySelector('.cart-number')
const addBtnCard = document.querySelectorAll('.card-circle')
const cartIcon = document.querySelector('.cart')


//* ••••••••• CART


const moreItems = document.querySelectorAll('.mas')
const lessItems = document.querySelectorAll('.menos')
const trash = document.querySelectorAll('.icon-tabler-trash')
const contadorTarjeta = document.querySelector('.cart-counter')

const myCart = document.querySelector('.my-cart')
const cartArea = document.querySelector('.cart-area')
const closeBtn = document.querySelector('.close-btn')

const itemPrice = document.querySelector('.item-price')
const finalPrice = document.querySelector('.final-price')
const subTotal = document.querySelectorAll('.subtotal')




//! •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
//? –––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//? ************************ FUNCIONES ************************

function subtotal(unitPrice, times) {
    return unitPrice * times
}


function total(a, b, c) {
    return a + b + c
}


//************************* LISTENERS ************************


let counterAdd = 0;
let counterHoodies = 0
let counterShirt = 0
let counterHat = 0

let sumaCart = 0

let subHoodies = 0
let subShirts = 0
let subHats = 0

//* –––––––––––––––––––––––– CART ICON

if (sumaCart <= 0) {
    sumaCart = 0
}



function events() {

    //*  –––––––––––––––––––––––– HOODIE

    moreItems[0].addEventListener('click', ()=> {
        counterHoodies++;
        sumaCart = counterHat + counterHoodies + counterShirt;

        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        contadorTarjeta.children[1].textContent = `${counterHoodies} units`;
       
        subTotal[0].textContent = `Subtotal: $${subtotal(24, counterHoodies)}.00`;
        subHoodies = subtotal(24, counterHoodies);
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

        
        if (counterHoodies >= 10 ) {
            alert('Tenemos en Stock solo 10 unidades');
            counterHoodies = 9;
        };
    });
    
    lessItems[0].addEventListener('click', ()=> {
        counterHoodies--;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        contadorTarjeta.children[1].textContent = `${counterHoodies} units`;

        subTotal[0].textContent = `Subtotal: $${subtotal(24, counterHoodies)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;


    
        if (counterHoodies <= 0 ) {
            counterHoodies = 0;
            
            contadorTarjeta.children[1].textContent = `0 units`;

            contadorCarrito.textContent = `${counterHat + counterShirt}`;
            itemPrice.children[0].textContent = `${counterShirt + counterHat} items`;
            subTotal[0].textContent = `Subtotal: $0.00`;
            finalPrice.textContent = `Total: $${subtotal(18, counterShirt) + subtotal(14, counterHat)}.00`;
        };
    });
    
    //*  –––––––––––––––––––––––– SHIRT
    
    moreItems[1].addEventListener('click', ()=> {
        counterShirt++;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent = `${counterShirt} units`;

        subTotal[1].textContent = `Subtotal: $${subtotal(18, counterShirt)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterShirt >= 18 ) {
            alert('Tenemos en Stock solo 18 unidades');
            counterShirt = 17;
         };
    });
    
    lessItems[1].addEventListener('click', ()=> {
        counterShirt--
        sumaCart = counterHat + counterHoodies + counterShirt
        contadorCarrito.textContent = sumaCart
        itemPrice.children[0].textContent = `${sumaCart} items`
        contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent = `${counterShirt} units`

        subTotal[1].textContent = `Subtotal: $${subtotal(18, counterShirt)}.00`
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterShirt <= 0 ) {
            counterShirt = 0
          
            contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent = `0 units`

            contadorCarrito.textContent = `${counterHat + counterHoodies}`
            itemPrice.children[0].textContent = `${counterHat + counterHoodies} items`
            subTotal[1].textContent = `Subtotal: $0.00`
            finalPrice.textContent = `Total: $${subtotal(24, counterHoodies) + subtotal(14, counterHat)}.00`;
    
        }
    })
    
    
    
    //*  –––––––––––––––––––––––– HAT
    
    moreItems[2].addEventListener('click', ()=> {
        counterHat++;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        contadorTarjeta.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].children[1].textContent = `${counterHat} units`;

        subTotal[2].textContent = `Subtotal: $${subtotal(14, counterHat)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;
    
    
        if (counterHat >= 20 ) {
            alert('Tenemos en Stock solo 20 unidades');
            counterHat = 19;
        };

    });
    
    lessItems[2].addEventListener('click', (e)=> {
        counterHat--
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        contadorTarjeta.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].children[1].textContent = `${counterHat} units`;

        subTotal[2].textContent = `Subtotal: $${subtotal(14, counterHat)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterHat <= 0 ) {
            counterHat = 0;
            
            contadorTarjeta.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].children[1].textContent = `0 units`;

            contadorCarrito.textContent = `${counterShirt + counterHoodies}`;
            itemPrice.children[0].textContent = `${counterShirt + counterHoodies} items`;
            subTotal[2].textContent = `Subtotal: $0.00`;
            finalPrice.textContent = `Total: $${subtotal(18, counterShirt) + subtotal(24, counterHoodies)}.00`;
        };
    });

    //* –––––––––––––––––––––––– CART ICON


    cartIcon.addEventListener('click', ()=>{
        cartArea.style.display = 'flex'
    })

    //* –––––––––––––––––––––––– CLOSE BUTTON

    closeBtn.addEventListener('click', ()=>{
        cartArea.style.display = 'none'
    })
    
   
}


events();
//! ``````````` TEMPLATES 
























// moreItems[0].addEventListener('click', ()=> {
//     counterHoodies++
//     sumaCart = counterHat + counterHoodies + counterShirt

//     contadorTarjeta.children[1].textContent = `${counterHoodies} units`
//      //console.log(contadorTarjeta.children[1].textContent);
    
//      if (counterHoodies >= 10 ) {
//         alert('Tenemos en Stock solo 10 unidades')
//         counterHoodies = 9
//     }
// })

// lessItems[0].addEventListener('click', ()=> {
//     counterHoodies--
//     sumaCart = counterHat + counterHoodies + counterShirt
//     console.log("esto es sumaCart",sumaCart);
//     contadorTarjeta.children[1].textContent = `${counterHoodies} units`

//     if (counterHoodies < 1 ) {
//         counterHoodies = 1
//     }
// })

// //* ================ SHIRT

// moreItems[1].addEventListener('click', ()=> {
//     counterShirt++
//     sumaCart = counterHat + counterHoodies + counterShirt

//     contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent = `${counterShirt} units`
//  //console.log(contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent);

//  if (counterShirt >= 18 ) {
//     alert('Tenemos en Stock solo 18 unidades')
//     counterShirt = 17
// }
// })

// lessItems[1].addEventListener('click', ()=> {
//     counterShirt--
//     sumaCart = counterHat + counterHoodies + counterShirt

//     contadorTarjeta.parentElement.parentElement.nextElementSibling.children[1].children[1].children[1].textContent = `${counterShirt} units`

//     if (counterShirt < 1 ) {
//         counterShirt = 1
//     }
// })



// //* ================ HAT

// moreItems[2].addEventListener('click', ()=> {
//     counterHat++
//     sumaCart = counterHat + counterHoodies + counterShirt

//     contadorTarjeta.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].children[1].textContent = `${counterHat} units`


//     if (counterHat >= 20 ) {
//         alert('Tenemos en Stock solo 20 unidades')
//         counterHat = 19
//     }
// })

// lessItems[2].addEventListener('click', ()=> {
//     counterHat--
//     sumaCart = counterHat + counterHoodies + counterShirt
    

//     contadorTarjeta.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1].children[1].children[1].textContent = `${counterHat} units`

//     if (counterHat < 1 ) {
//         counterHat = 1
//     }
// })





//* ================ LIL CART



//contadorCarrito.textContent = sumaCart











/*moreItems.addEventListener('click', ()=> console.log('More items is listen'))

lessItems.addEventListener('click', ()=> console.log('Less items is listen'))

trash.addEventListener('click', ()=> console.log('Trash is listen'))*/






