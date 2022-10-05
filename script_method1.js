// confirm("Please Enter  your name")

let r1c1 = document.querySelector("#r1c1");
let r1c2 = document.querySelector("#r1c2");
let r1c3 = document.querySelector("#r1c3"); 
let r2c1 = document.querySelector("#r2c1");
let r2c2 = document.querySelector("#r2c2");
let r2c3 = document.querySelector("#r2c3");
let r3c1 = document.querySelector("#r3c1");
let r3c2 = document.querySelector("#r3c2");
let r3c3 = document.querySelector("#r3c3");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let StartGameBtn = document.querySelector("#StartGameBtn");
let tossWinner = document.querySelector("#tossWinner");
let item = document.querySelector(".item");
// let alert1 = document.querySelector("#alert");




//  tossWinner.innerHTML = `manish singh`;



let check_r1c1 = false;
let check_r1c2 = false;
let check_r1c3 = false;
let check_r2c1 = false;
let check_r2c2 = false;
let check_r2c3 = false;
let check_r3c1 = false;
let check_r3c2 = false;
let check_r3c3 = false;

let var_r1c1 = false;
let var_r1c2 = false;
let var_r1c3 = false;
let var_r2c1 = false;
let var_r2c2 = false;
let var_r2c3 = false;
let var_r3c1 = false;
let var_r3c2 = false;
let var_r3c3 = false;



let O_var_r1c1 = false;
let O_var_r1c2 = false;
let O_var_r1c3 = false;
let O_var_r2c1 = false;
let O_var_r2c2 = false;
let O_var_r2c3 = false;
let O_var_r3c1 = false;
let O_var_r3c2 = false;
let O_var_r3c3 = false;



function map1(player2) {
       alert(` Game over Winner is ${player2}`);
        let text = "press a button either ok or cancel  \n\n ok for play again and cancel for exit";
        if (confirm(text) == true) {
            location.reload();
        }
        else {
            window.close('');
        }
}
    
function main_check_function() {
    if (var_r1c1 == true && var_r1c2 == true && var_r1c3)
    {map1(player1.value);}
    else if (var_r2c1 == true && var_r2c2 == true && var_r2c3) 
    {map1(player1.value); }
    else if (var_r3c1 == true && var_r3c2 == true && var_r3c3)
    {map1(player1.value);}
    else if (var_r1c1 == true && var_r2c1 == true && var_r3c1)
    { map1(player1.value);}
    else if (var_r1c2 == true && var_r2c2 == true && var_r3c2)
    {map1(player1.value); }
    else if (var_r1c3 == true && var_r2c3 == true && var_r3c3)
    { map1(player1.value);}
     else if (var_r1c1 == true && var_r2c2 == true && var_r3c3) 
    {  map1(player1.value);}
    if (var_r1c3 == true && var_r2c2 == true && var_r3c1)
    {   map1(player1.value);}



    else if (O_var_r1c1 == true && O_var_r1c2 == true && O_var_r1c3)
        { map1(player2.value); }
   else if (O_var_r2c1 == true && O_var_r2c2 == true && O_var_r2c3)
    { map1(player2.value); }
    else if (O_var_r3c1 == true && O_var_r3c2 == true && O_var_r3c3)
    { map1(player2.value); }
    else if (O_var_r1c1 == true && O_var_r2c1 == true && O_var_r3c1)
    {  map1(player2.value);}
    else if (O_var_r1c2 == true && O_var_r2c2 == true && O_var_r3c2)
    {  map1(player2.value); }
    else if (O_var_r1c3 == true && O_var_r2c3 == true && O_var_r3c3)
    { map1(player2.value); }
    else if (O_var_r1c1 == true && O_var_r2c2 == true && O_var_r3c3)
    {  map1(player2.value);}
    else if (O_var_r1c3 == true && O_var_r2c2 == true && O_var_r3c1)
    { map1(player2.value); }
    else if (ulternate >= 9)
    { alert("game draw "); }

      
}




let ulternate = (Math.trunc(Math.random() * 10)%2);
let a = document.getElementById('mytext');
let mybtn = document.getElementById('StartGameBtn');
let find = true;
mybtn.addEventListener('click', function () {
  if (find == true)
  {
    if (ulternate % 2 == 0)
    {
        a.textContent = ` First chance to run ${(player1.value).toUpperCase()}`;
    }
    else {
              a.textContent = ` first chance to run ${(player2.value)}`;
    }
    }
})



function WrongClickFun() {
    alert("Wrong click");
}

function Color_change1(select1) {
  select1.innerHTML = imgRed;
  select1.style.backgroundColor = "black";
  select1.style.color = "red";
select1.style.fontSize = "90px";
ulternate++;
}
function Color_change2(select2) {
  select2.innerHTML = imgGreen;
  select2.style.backgroundColor = "black";
  select2.style.color = "green";
select2.style.fontSize = "90px";
ulternate++;
}




let imgRed=`O`;
let imgGreen = `X`;
let EvenOdd = Math.round(ulternate % 2);
r1c1.addEventListener('click', function () {
if (check_r1c1 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r1c1 = true;
         Color_change1(r1c1);
         setTimeout(function () { 
             main_check_function();  
        },10)     

     }
    else 
     {
        Color_change2(r1c1);
       O_var_r1c1 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     

  }
    check_r1c1 = true;
}
    else { WrongClickFun() }
   
})


r1c2.addEventListener('click', function () {
if (check_r1c2 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r1c2 = true;
       Color_change1(r1c2);
         setTimeout(function () { 
             main_check_function();  
        },10)     
     }
    else 
     {
        Color_change2(r1c2);
         O_var_r1c2 = true;  
         setTimeout(function () { 
             main_check_function();  
        },10)     
  }
check_r1c2 = true;
}
    else { WrongClickFun() }
   
})



r1c3.addEventListener('click', function () {
if (check_r1c3 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r1c3 = true;
       Color_change1(r1c3);
         setTimeout(function () { 
             main_check_function();  
        },10)     
     }
    else 
     {
        Color_change2(r1c3);
       O_var_r1c3 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     
  }
check_r1c3 = true;
}
    else { WrongClickFun() }
   
})



r2c1.addEventListener('click', function () {
if (check_r2c1 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r2c1 = true;
       Color_change1(r2c1);
         setTimeout(function () { 
             main_check_function();  
        },10)     

     }
    else 
     {
        Color_change2(r2c1);
       O_var_r2c1 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     

  }
check_r2c1 = true;
}
    else { WrongClickFun() }
   
})



r2c2.addEventListener('click', function () {
if (check_r2c2 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r2c2 = true;
       Color_change1(r2c2);
         setTimeout(function () { 
             main_check_function();  
        },10)     

     }
    else 
     {
        Color_change2(r2c2);
       O_var_r2c2 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     

  }
check_r2c2 = true;
}
    else { WrongClickFun() }
   
})



r2c3.addEventListener('click', function () {
if (check_r2c3 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r2c3 = true;
       Color_change1(r2c3);
         setTimeout(function () { 
             main_check_function();  
        },10)     

     }
    else 
     {
        Color_change2(r2c3);
       O_var_r2c3 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     
  }
check_r2c3 = true;
}
    else { WrongClickFun() }
   
})



r3c1.addEventListener('click', function () {
if (check_r3c1 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r3c1 = true;
       Color_change1(r3c1);
         setTimeout(function () { 
             main_check_function();  
        },10)     
     }
    else 
     {
        Color_change2(r3c1);
       O_var_r3c1 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     
  }
check_r3c1 = true;
}
    else { WrongClickFun() }
   
})



r3c2.addEventListener('click', function () {
if (check_r3c2 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r3c2 = true;
       Color_change1(r3c2);
         setTimeout(function () { 
             main_check_function();  
        },10)     

     }
    else 
     {
        Color_change2(r3c2);
       O_var_r3c2 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     

  }
check_r3c2 = true;
}
    else { WrongClickFun() }
   
})




r3c3.addEventListener('click', function () {
if (check_r3c3 == false)
{ 
     if ( Math.round(ulternate % 2)== 0)
     {
      var_r3c3 = true;
         Color_change1(r3c3);
         setTimeout(() => {
                        main_check_function();   

         },10)
             

     }
    else 
     {
        Color_change2(r3c3);
       O_var_r3c3 = true;    
         setTimeout(function () { 
             main_check_function();  
        },10)     

  }
check_r3c3 = true;
}
    else { WrongClickFun() }
   
})










