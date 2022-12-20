 
let LocalAdult;
let LocalChild;
let ForeignerAdult;
let ForeignerChild;
let infant;
let LocalAdultCount;
let LocalChildCount;
let ForeignerAdultCount;
let ForeignerChildCount;
let infantCount;




 
window.addEventListener('load',() =>{
    LocalChildCount=0;
    LocalAdultCount=0;
    ForeignerAdultCount=0;
    ForeignerChildCount=0;
    infantCount =0;
    LocalAdult=1200.00;
    LocalChild=700.00;
    ForeignerAdult=5500.00;
    ForeignerChild=2700.00;
    infant = 0;
    total = LocalAdult*LocalAdultCount + ForeignerAdult*ForeignerAdultCount + LocalChild*LocalChildCount + ForeignerChild*ForeignerChildCount + infant*infantCount;
      
   
    
});

//ticket count increase and decrease
 const plus = document.querySelector(".plus");
 const minus = document.querySelector(".minus");
 const num = document.querySelector(".num");
//counter variables
//  let a = 0;
//local adult count
plus.addEventListener('click',()=>{
    LocalAdultCount++;
    num.innerHTML = LocalAdultCount;
 });
minus.addEventListener('click',()=>{
    if(LocalAdultCount>0){
        LocalAdultCount--;
        num.innerHTML = LocalAdultCount;
    }
});
const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const num1 = document.querySelector(".num1");

// let b=0;

plus1.addEventListener('click',()=>{
    LocalChildCount++;
    num1.innerHTML =LocalChildCount;
});
minus1.addEventListener("click",()=>{
    if(LocalChildCount>0){
    LocalChildCount--;
    num1.innerHTML = LocalChildCount;
    }
 });

const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");

// let c = 0;

plus2.addEventListener("click",()=>{
    ForeignerAdultCount++;
    num2.innerHTML = ForeignerAdultCount;
});

minus2.addEventListener("click",()=>{
    if(ForeignerAdultCount>0){
        ForeignerAdultCount--;
         num2.innerHTML = ForeignerAdultCount;
    
    }
 });

 const plus3 = document.querySelector(".plus3");
 const minus3 = document.querySelector(".minus3");
 const num3 = document.querySelector(".num3");
 
// let d = 0;
 
plus3.addEventListener("click",()=>{
    ForeignerChildCount++;
    num3.innerHTML = ForeignerChildCount;
});

 minus3.addEventListener("click",()=>{
    if(ForeignerChildCount>0){
        ForeignerChildCount--;
        num3.innerHTML = ForeignerChildCount;
     }
}); 
const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");
const num4 = document.querySelector(".num4");

// let  e = 0;

plus4.addEventListener("click",()=>{
    infantCount++;
    num4.innerHTML = infantCount;
    console.log(infantCount)
});

minus4.addEventListener("click",()=>{
   if(infantCount>0){
    infantCount--;
    num4.innerHTML = infantCount;
}
});



//  let InDe = document.querySelectorAll('span');
//  const  txtTotalCostOutput = document.getElementById('outputTotal')
//   for(x of InDe){
//        x.addEventListener('click',() =>{
//            if(duration.value ==='3Hrs'){
//                LocalAdult = 1200.00;
//                LocalChild = 700.00;
//               ForeignerAdult = 5500.00;
//                ForeignerChild = 2700.00;
         
//             ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
//               ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
            
//            }

//           if(duration.value ==='half day'){
//                LocalAdult = 1200.00 + 350.00;
//                LocalChild = 700.00 + 350.00;
//                ForeignerAdult = 5500.00 + 450.00;
//                ForeignerChild = 2700.00 + 450.00;
         
//              ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
//               ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;

//          }
//          if(duration.value ==='half day'){
//              LocalAdult = 1200.00 + 600.00;
//              LocalChild = 700.00 + 600.00;
//              ForeignerAdult = 5500.00 + 800.00;
//               ForeignerChild = 2700.00 + 800.00;
         
//               ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
//               ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;

//          }
//          total = ticketTot;
//          console.log(total);
//           txtTotalCostOutput.innerHTML = `Total is ${total.toFixed(2)} LKR
//           for ${duration.value}`;
//       });
//  }
 
//overall price */
/* const txtOverall = document.getElementById('overall')
 const durationHour = document.getElementById('hours'); 
 const bookingAmountwithJS = document.getElementById('bookingAmount');
 const btnRemove = document.getElementById('remove');
 const bookingAmountswithJS =document.getElementById('bookingAmounts');
 const addOrder = document.getElementById('add');

 let book=[];
 let ordersTot =[];
 let mainCountArray = [];
 let favs =[];

 addOrder.addEventListener('click',(btnOrder)=>{
     if(durationHour.value === '3 hrs'){
             LocalAdult = 1200.00;
             LocalChild = 700.00;
             ForeignerAdult = 5500.00;
             ForeignerChild = 2700.00;
         
              ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
              ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
            
          }
          if(durationHour.value === 'half day'){
             LocalAdult = 1200.00 + 350.00;
             LocalChild = 700.00 + 350.00;
             ForeignerAdult = 5500.00 + 450.00;
             ForeignerChild = 2700.00 + 450.00;
         
             ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
              ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
            
          }  
          if(durationHour.value === 'full day'){
             LocalAdult = 1200.00 + 600.00;
             LocalChild = 700.00 + 600.00;
             ForeignerAdult = 5500.00 + 800.00;
            ForeignerChild = 2700.00 + 800.00;
         
              ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
             ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
            
          }

          bookingAmountwithJS.innerHTML=`
         <div id="CostOfTickets">
          <h2> details of the order
          <p id="FinalCost">
          Local Adult:${LocalAdultCount}<br>
          Local Child:${LocalChildCount}<br>
          Foreigner Adult:${ForeignerAdultCount}<br>
          Foreigner  Adult:${ForeignerChildCount}<br>
          Infant:${InfantCount}<br>
         Final total cost :${ticketTot.toFixed(2)} Rs. <br>
          For${durationHour.phonenumberValue}
          </p></h3>
          </div>`;

         total += ticketTot;
          mainCount = LocalAdultCount + LocalChildCount + ForeignerAdultCount + 
         ForeignerChildCount + infantCount;
          mainCountArray.push(mainCount);
          console.log(mainCountArray);

          ordersTot.push(ticketTot);
          console.log(ordersTot);

          book.push({slAdult:LocalAdultCount,slChild:LocalChildCount,foreignAdult:ForeignerAdultCount,
         foreignChild:ForeignerChildCount,Infants:infantCount,Duration:durationHour.value,Total:ticketTot});
        
         displayTableData();

         txtTotalCostOutput.innerHTML=` `;
         LocalAdultCount =0,LocalChildCount=0,ForeignerAdultCount=0,infantCount=0;
         num.innerHTML =0,num1.innerHTML=0,num2.innerHTML=0,num3.innerHTML=0,num4.innerHTML=0;

         });

         function btnOrder(){
             if(durationHour.value === '3 hrs'){
                LocalAdult = 1200.00;
                 LocalChild = 700.00;
                 ForeignerAdult = 5500.00;
                 ForeignerChild = 2700.00;
             
                 ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                  ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
                  overall.innerText = `Total:${LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                     ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild}Rs.`;
              }
              if(durationHour.value === 'half day'){
                 LocalAdult = 1200.00 + 350.00;
                 LocalChild = 700.00 + 350.00;
                 ForeignerAdult = 5500.00 + 450.00;
                ForeignerChild = 2700.00 + 450.00;
             
                  ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                 ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;
                 overall.innerText = `Total:${LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                     ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild}Rs.`;
              }
                
              }  
              if(durationHour.value === 'full day'){
                LocalAdult = 1200.00 + 600.00;
                 LocalChild = 700.00 + 600.00;
                 ForeignerAdult = 5500.00 + 800.00;
                 ForeignerChild = 2700.00 + 800.00;
             
                 ticketTot = LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild;                
                overall.innerText = `Total:${LocalAdultCount*LocalAdult + LocalChildCount*LocalChild + 
                   ForeignerAdultCount*ForeignerAdult + ForeignerChildCount*ForeignerChild}Rs.`;
            }*/
                
        
//   btnRemove.addEventListener('click',()=>{
//      LocalAdultCount =0,LocalChildCount=0,ForeignerAdultCount=0,infantCount=0;
//     num.innerHTML =0,num1.innerHTML=0,num2.innerHTML=0,num3.innerHTML=0,num4.innerHTML=0;
//      total=0;
    
//      bookingAmountwithJS.innerHTML=`<br>`;
//      bookingAmountswithJS.innerHTML=`<br>`;
//      book.splice(0,book.length);
//      displayTableData();
//      txtTotalCostOutput.innerHTML=` `;
    
//  });


 


const fullname = document.getElementById('fullname');
const countryCode = document.getElementById('phone')
const phonenumber = document.getElementById('phone1');

const email = document.getElementById('email');
const email2 = document.getElementById('email2');



    
 add.addEventListener("click", addOrder);
//  place.addEventListener("click", PlaceOrder);
const currentOrder = document.getElementById('currentOrder')
const durationHours = document.getElementById('hours')   

 
  function addOrder(){
    

    if (durationHours.value === "3hours"){
        LocalAdult = 1200.00;
        ForeignerAdult = 5500.00;
        LocalChild = 700.00;
        ForeignerChild = 2700.00;
     infant = 0 ;
 
    
      total = LocalAdult*LocalAdultCount + ForeignerAdult*ForeignerAdultCount + LocalChild*LocalChildCount + ForeignerChild*ForeignerChildCount + infant*infantCount;
      currentOrder.innerText = `Total : ${total} LKR`;
    }
 
    if(durationHours.value === "half day"){
        LocalAdult = 1200.00 + 350.00;
        ForeignerAdult = 5500.00 + 450.00;
        LocalChild = 700.00 + 350.00;
      ForeignerChild = 2700.00 + 450.00;
      infant = 0 ;

     
      total = LocalAdult*LocalAdultCount + ForeignerAdult*ForeignerAdultCount + LocalChild*LocalChildCount + ForeignerChild*ForeignerChildCount + infant*infantCount;
      currentOrder.innerText = `Total : ${total} LKR`;
    }
 
    if(durationHours.value === "full Day"){
        LocalAdult = 1200.00 + 600.00;
        ForeignerAdult = 5500.00 + 800.00;
        LocalChild = 700.00 + 600.00;
      ForeignerChild = 2700.00 + 800.00;
     infant = 0 ;
    
     total = LocalAdult*LocalAdultCount + ForeignerAdult*ForeignerAdultCount + LocalChild*LocalChildCount + ForeignerChild*ForeignerChildCount + infant*infantCount;
     currentOrder.innerText = `Total : ${total} LKR`;}
    }


  // Place to order 
  const placeOrderBtn = document.getElementById('place')
  placeOrderBtn.addEventListener('click',()=>{
  const displayOverallOrder = document.getElementById('bookingAmount');
  
    
 displayOverallOrder.innerHTML=`<div id="totalCostTickets">
 <h3>Your e-bill
 <p id="overall">
 Name : ${fullname.value} <br>
 Phone : +${countryCode.value} ${phonenumber.value} <br>
 Email : ${email.value} <br>
 ----------------------------------------<br>
 Total : ${total.toFixed(2)} LKR <br>
 </p></h3>
 </div>`;

  
    });
  
 








    
