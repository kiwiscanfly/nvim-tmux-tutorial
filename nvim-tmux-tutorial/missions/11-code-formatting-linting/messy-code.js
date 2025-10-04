// Intentionally Messy Code for Format-on-Save Practice
// This file has terrible formatting - save it and watch conform.nvim clean it

function calculateTotal(items){
const tax=0.08;
let subtotal=0;
  for(let i=0;i<items.length;i++){
subtotal+=items[i].price*items[i].quantity;}
      return subtotal*(1+tax);}

const processOrder=(order)=>{
if(!order||!order.items)  {throw new Error('Invalid order')  ;}
  const total=calculateTotal(order.items);
      const discount=order.coupon?order.coupon.value:0;
return{
total:total,
      discount:discount,
        final:total-discount
};}

// PRACTICE INSTRUCTIONS:
// 1. Notice the terrible formatting above
//    - Inconsistent indentation
//    - Missing spaces around operators
//    - Irregular bracket placement
// 2. Save this file: :w
// 3. Watch conform.nvim + Prettier instantly clean it
// 4. Check the git diff: :!git diff %
// 5. See how formatting creates clean, reviewable changes
//
// Dr. Vimsworth never manually formatted code after March 1, 2022.
// The machine handled all styling. Zero cognitive overhead.
