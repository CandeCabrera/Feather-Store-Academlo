'use strict'
//import {} from './index.js'


//! ******************* ELEMENTOS DEL DOM *********************

//* ••••••••• MAIN
const contadorCarrito = document.querySelector('.cart-number');
const addBtnCard = document.querySelectorAll('.card-circle');
const addToCart = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('.cart');
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.card');



//* ••••••••• CART


const moreItems = document.querySelectorAll('.mas');
const lessItems = document.querySelectorAll('.menos');
const trash = document.querySelectorAll('.icon-tabler-trash');
const contadorTarjeta = document.querySelector('.cart-counter');
const emptyCart = document.querySelector('.empty-cart');
const filledCart = document.querySelector('.filled-cart');
const cartCard = document.querySelectorAll('.cart-card');
const units = document.querySelectorAll('.units')


const myCart = document.querySelector('.my-cart');
const cartArea = document.querySelector('.cart-area');
const closeBtn = document.querySelector('.close-btn');
const buyBtn = document.querySelector('.buy-btn');

const itemPrice = document.querySelector('.item-price');
const finalPrice = document.querySelector('.final-price');
const subTotal = document.querySelectorAll('.subtotal');




console.log(units[0].textContent);


  


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


//! ••••••••••••••••••••• LOCAL STORAGE 



//* –––––––––––––––––––––––– CART ICON

if (sumaCart <= 0) {
    sumaCart = 0
}





function events() {

    //counterHoodies = localStorage.getItem(JSON.stringify('hoddies'))
    // counterShirt = localStorage.getItem('shirt')
    // counterHat = localStorage.getItem('hat')

    //! ••••••••••••••••••••• LOCAL STORAGE 

    //*  –––––––––––––––––––––––– HOODIE

    moreItems[0].addEventListener('click', ()=> {
        counterHoodies++;
        sumaCart = counterHat + counterHoodies + counterShirt;

      
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[0].textContent = `${counterHoodies} units`;

        //localStorage.setItem('hoddies', JSON.stringify(counterHoodies) );


        subTotal[0].textContent = `Subtotal: $${subtotal(24, counterHoodies)}.00`;
        subHoodies = subtotal(24, counterHoodies);
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

        
        if (counterHoodies >= 10 ) {
            alert('Tenemos en Stock solo 10 unidades');
            counterHoodies = 10;
            itemPrice.children[0].textContent = 10 + counterHat + counterShirt + " items";
            units[0].textContent = `10 units`;

        };
    });
    
    lessItems[0].addEventListener('click', ()=> {
        counterHoodies--;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[0].textContent = `${counterHoodies} units`;
        
      
        //localStorage.setItem('hoddies', JSON.stringify(counterHoodies) );

        subTotal[0].textContent = `Subtotal: $${subtotal(24, counterHoodies)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;


    
        if (counterHoodies <= 0 ) {
            counterHoodies = 0;
            
            units[0].textContent = `0 units`;

            contadorCarrito.textContent = `${counterHat + counterShirt}`;
            itemPrice.children[0].textContent = `${counterShirt + counterHat} items`;
            subTotal[0].textContent = `Subtotal: $0.00`;
            finalPrice.textContent = `Total: $${subtotal(18, counterShirt) + subtotal(14, counterHat)}.00`;
        };

        if (counterHat === 0 && counterHoodies === 0 && counterShirt === 0 ) {
            emptyCart.style.display = 'flex';
            filledCart.style.display = 'none';
            buyBtn.style.display = 'none';
        };
    });
    
    //*  –––––––––––––––––––––––– SHIRT
    
    moreItems[1].addEventListener('click', ()=> {
        counterShirt++;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[1].textContent = `${counterShirt} units`;

        //localStorage.setItem('shirt', JSON.stringify(counterShirt) );

        subTotal[1].textContent = `Subtotal: $${subtotal(18, counterShirt)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterShirt >= 18 ) {
            alert('Tenemos en Stock solo 18 unidades');
            counterShirt = 18;
            itemPrice.children[0].textContent = 18 + counterHat + counterHoodies + " items";
            units[1].textContent = `18 units`;
           
         };
    });
    
    lessItems[1].addEventListener('click', ()=> {
        counterShirt--;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[1].textContent = `${counterShirt} units`;

        //localStorage.setItem('shirt', JSON.stringify(counterShirt) );

        subTotal[1].textContent = `Subtotal: $${subtotal(18, counterShirt)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterShirt <= 0 ) {
            counterShirt = 0;
          
            units[1].textContent = `0 units`;

            contadorCarrito.textContent = `${counterHat + counterHoodies}`;
            itemPrice.children[0].textContent = `${counterHat + counterHoodies} items`;
            subTotal[1].textContent = `Subtotal: $0.00`;
            finalPrice.textContent = `Total: $${subtotal(24, counterHoodies) + subtotal(14, counterHat)}.00`;
    
        };

        if (counterHat === 0 && counterHoodies === 0 && counterShirt === 0 ) {
            emptyCart.style.display = 'flex';
            filledCart.style.display = 'none';
            buyBtn.style.display = 'none';
        };
    });
    
    
    
    //*  –––––––––––––––––––––––– HAT
    
    moreItems[2].addEventListener('click', ()=> {
        counterHat++;
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[2].textContent = `${counterHat} units`;

        //localStorage.setItem('hat', JSON.stringify(counterHat) );

        subTotal[2].textContent = `Subtotal: $${subtotal(14, counterHat)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;
    
    
        if (counterHat >= 20 ) {
            alert('Tenemos en Stock solo 20 unidades');
            counterHat = 20;
            itemPrice.children[0].textContent = 20 + counterHoodies + counterShirt + " items";
            units[2].textContent = `20 units`;
        
        };

    });
    
    lessItems[2].addEventListener('click', (e)=> {
        counterHat--
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[2].textContent = `${counterHat} units`;

        //localStorage.setItem('hat', JSON.stringify(counterHat) );

        subTotal[2].textContent = `Subtotal: $${subtotal(14, counterHat)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    
        if (counterHat <= 0 ) {
            counterHat = 0;
            
            units[2].textContent = `0 units`;

            contadorCarrito.textContent = `${counterShirt + counterHoodies}`;
            itemPrice.children[0].textContent = `${counterShirt + counterHoodies} items`;
            subTotal[2].textContent = `Subtotal: $0.00`;
            finalPrice.textContent = `Total: $${subtotal(18, counterShirt) + subtotal(24, counterHoodies)}.00`;
        };


        if (counterHat === 0 && counterHoodies === 0 && counterShirt === 0 ) {
            emptyCart.style.display = 'flex';
            filledCart.style.display = 'none';
            buyBtn.style.display = 'none';
        }

    });

    //* –––––––––––––––––––––––– CART ICON


    cartIcon.addEventListener('click', ()=>{
        cartArea.style.display = 'flex'
        emptyCart.style.display = 'flex';
        filledCart.style.display = 'none';
        buyBtn.style.display = 'none';

        if (counterHat > 0 || counterHoodies > 0 || counterShirt > 0 ) {
            emptyCart.style.display = 'none';
            filledCart.style.display = 'flex';
            buyBtn.style.display = 'flex';
        }

    })

    //* –––––––––––––––––––––––– CLOSE BUTTON

    closeBtn.addEventListener('click', ()=>{
        cartArea.style.display = 'none'
    })


    //*  –––––––––––––––––––––––– BUY BUTTON
     
    buyBtn.addEventListener('click', ()=> alert("Thank you for your purchase!"))

    //*  –––––––––––––––––––––––– TRASH BUTTON

    trash.forEach((button, index) => {
        button.addEventListener('click', ()=>{
            trash[index].parentElement.remove();
            console.log(trash[index].parentElement);
            

        });

    });

    //*  –––––––––––––––––––––––– ADD BUTTON

    addBtnCard.forEach((button) => {
        button.addEventListener('click', () =>{
            myCart.parentElement.style.display = 'flex'
            emptyCart.style.display = 'none';
            filledCart.style.display = 'flex';
            buyBtn.style.display = 'flex';
        })
    })

    addToCart.addEventListener('click', () =>{
        myCart.parentElement.style.display = 'flex'
        emptyCart.style.display = 'none';
        filledCart.style.display = 'flex';
        buyBtn.style.display = 'flex';
       
        counterShirt = 1
        sumaCart = counterHat + counterHoodies + counterShirt;
        contadorCarrito.textContent = sumaCart;
        itemPrice.children[0].textContent = `${sumaCart} items`;
        units[1].textContent = `${counterShirt} units`;


        subTotal[1].textContent = `Subtotal: $${subtotal(18, counterShirt)}.00`;
        finalPrice.textContent = `Total: $${
            total(subtotal(24, counterHoodies), 
            subtotal(18, counterShirt),
            subtotal(14, counterHat))}.00`;

    })


    //*  –––––––––––––––––––––––– FILTER BUTTONS


    //?  –––––––––––––––––––––––– FILTER BY HOODIES


    filterBtns[0].addEventListener('click', ()=>{
        productCards[0].style.display = 'flex';
        productCards[1].style.display = 'flex';
        productCards[2].style.display = 'flex';

    });

    //?  –––––––––––––––––––––––– FILTER BY HOODIES
    filterBtns[1].addEventListener('click', ()=>{
        productCards[0].style.display = 'flex';
        productCards[1].style.display = 'none';
        productCards[2].style.display = 'none';
    });
    
    //?  –––––––––––––––––––––––– FILTER BY SHIRTS

    filterBtns[2].addEventListener('click', ()=>{
        productCards[0].style.display = 'none';
        productCards[1].style.display = 'flex';
        productCards[2].style.display = 'none';

    })

    //?  –––––––––––––––––––––––– FILTER BY HAT
    filterBtns[3].addEventListener('click', ()=>{
        productCards[0].style.display = 'none'
        productCards[1].style.display = 'none'
        productCards[2].style.display = 'flex'

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






