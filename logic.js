let budget, exp,  bal, texp=0, sexp;
let nbudget;
let a = 1;
if(isNaN(a)){
   console.log(a);
}else{
  console.log(a);
}

btncal.addEventListener("click",function(){
  budget = document.getElementById("budget").value;
  m();
    document.getElementById("budget").value = "";
    console.log("old"+budget);
  fn();

})

btnexp.addEventListener("click", function(){
   exp = document.getElementById("expval").value;
   nexp = parseInt(exp);
   let para1 = document.createElement("p");
   para1.innerText = nexp;
   resexpval.appendChild(para1);
   console.log(nexp);


   expname = document.getElementById("expname");
   let para2 = document.createElement("p");
   para2.innerText = expname.value;
   resexpname.appendChild(para2);
   console.log(expname.value);

  //  document.getElementById("resexp").innerText= nexp;

   n();
   document.getElementById("expval").value = "";
   console.log("oldexp"+exp);
   fn();
})

 function m(){
  if(budget != ""){
    nbudget = parseInt(budget);
    console.log("new"+nbudget);
    document.getElementById("resbudget").innerText= nbudget;
    
  }
    else{
      console.log("fail");}
 }

 function n(){
  if(exp != ""){
    nexp = parseInt(exp);
    texp = parseInt(texp);
    sexp = parseInt(sexp);

    texp = nexp + texp;
   

  
    console.log("new"+exp);
    console.log("new"+nbudget);
    document.getElementById("resexp").innerText= nexp;
  }
    else{
      console.log("fail");}
 }

  function fn(){
    
    if((Number.isInteger(nbudget))  && (Number.isInteger(nexp))){
      console.log("success");
      console.log(texp);
      bal = nbudget - texp;
      bal = parseInt(bal);
      document.getElementById("resbal").innerText= bal;
    }
    else{
      console.log("unsuccess");

    }
  }






















// btncal.addEventListener("click", function(){
//   budget = document.getElementById("budget");
//   // budget = parseInt(budget.value);
//   console.log(budget)
 
//   x();
 

//   if(budget.value != ""){
//     budget = parseInt(budget.value);
//   document.getElementById("resbudget").innerText= budget;
//   budget = parseInt(budget.value)
//   document.getElementById("budget").value = "";

//   exp = document.getElementById("expval");
//   exp = parseInt(exp.value)
// document.getElementById("resexp").innerText= exp.value;

// document.getElementById("expval").value = "";

// texp = exp + texp;
// bal = budget - texp;

// document.getElementById("resbal").innerText= bal.value;


// console.log(texp);
// console.log(bal)



//   }
// })

// btnexp.addEventListener("click", function(){
//   console.log(budget);
// y();
//   expname = document.getElementById("expname");
//   exp = document.getElementById("expval");
// //   if(expname.value != "" && exp.value != ""){

// //   let para = document.createElement("P");
// //   para.innerText = expname.value;
// //   resexpname.appendChild(para);

// //   let para2 = document.createElement("P");
// //   para2.innerText = exp.value;
// //   resexpval.appendChild(para2);

// //   budget = document.getElementById("budget");

// //   budget = parseInt(budget.value)

// // exp = parseInt(exp.value)

// // texp = exp + texp;
// // bal = budget - texp;

// // document.getElementById("resbal").innerText= bal


// // console.log(texp);
// // console.log(bal)  

// //   document.getElementById("expname").value = "";
// //   document.getElementById("expval").value = "";

//  // }
// })

// function x(){
//   if(budget == NaN){
// nbudget = budget;
//   console.log(nbudget.innerText);}
// y();
// document.getElementById("budget").value = "";
// }

// function y(){console.log(nbudget);
// }

