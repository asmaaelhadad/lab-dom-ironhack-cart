// ITERATION 1
  //... your code goes here
function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span').innerText;
  
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = quantity * priceElement ;
  const subTotal = product.querySelector('.subtotal span');
console.log('Calculating subtotal, yey!' , priceElement ,quantity ,subtotal);
subTotal.innerText =subtotal;
return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product').innerText;
 // updateSubtotal(singleProduct);
  // end of test
//const allProducts = document.getElementsByClassName('.produdt');
// ITERATION 2
  //... your code goes here
  let total=0 ;
 let totalValue = document.querySelector('#total-value span');
 const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product)=>{ total += updateSubtotal(product)});
  totalValue.innerText= Number(total) ;

  console.log(total);

  // ITERATION 3
  //... your code goes here


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
