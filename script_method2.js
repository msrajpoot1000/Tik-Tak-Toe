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


// $(document).ready(function () {
//     $('html').animate({ "scrollTop": 0 }, 1);
//         $('body').animate({ "scrollTop": 0 }, 1);

// });
window.onload = function () {
    document.body.scrollTop = 0;
};
function map2() {
    if (imgRed = `X`) { alert(`Winner is player ${player1.value}`); }
    else  { alert(`Winner is player ${player2.value}`); } 

        let text = "press a button either ok or cancel  \n\n ok for play again and cancel for exit";
        if (confirm(text) == true) {
            location.reload();

        }
        else {
            window.close('');
        }



  }
   
    
function main_check_function() {
    if (r1c1.textContent == imgRed && r1c2.textContent == imgRed && r1c3.textContent == imgRed)
    {map2();                }  
    else if (r1c1.textContent == imgGreen && r1c2.textContent == imgGreen && r1c3.textContent == imgGreen)
    { map2(); }

    else if (r2c1.textContent == imgRed && r2c2.textContent == imgRed && r2c3.textContent == imgRed)
    { map2(); }
    else if (r2c1.textContent == imgGreen && r2c2.textContent == imgGreen && r2c3.textContent == imgGreen)
    {  map2();  }
    

    else if (r3c1.textContent == imgRed && r3c2.textContent == imgRed && r3c3.textContent == imgRed)
    { map2(); }
    else if (r3c1.textContent == imgGreen && r3c2.textContent == imgGreen && r3c3.textContent == imgGreen)
    {  map2();  }


    else if (r1c1.textContent == imgRed && r2c1.textContent == imgRed && r3c1.textContent == imgRed)
    { map2(); }
    else if (r1c1.textContent == imgGreen && r2c1.textContent == imgGreen && r3c1.textContent == imgGreen)
    {  map2();  }

    else if (r1c2.textContent == imgRed && r2c2.textContent == imgRed && r3c2.textContent == imgRed)
    { map2(); }
    else if (r1c2.textContent == imgGreen && r2c2.textContent == imgGreen && r3c2.textContent == imgGreen)
    {  map2();  }

    else if (r1c3.textContent == imgRed && r2c3.textContent == imgRed && r3c3.textContent == imgRed)
    { map2(); }
    else if (r1c3.textContent == imgGreen && r2c3.textContent == imgGreen && r3c3.textContent == imgGreen)
    {  map2();  }

    else if (r1c1.textContent == imgRed && r2c2.textContent == imgRed && r3c3.textContent == imgRed)
    { map2(); }
    else if (r1c1.textContent == imgGreen && r2c2.textContent == imgGreen && r3c3.textContent == imgGreen)
    {  map2();  }

    else if (r1c3.textContent == imgRed && r2c2.textContent == imgRed && r3c1.textContent == imgRed)
    { map2(); }
    else if (r1c3.textContent == imgGreen && r2c2.textContent == imgGreen && r3c1.textContent == imgGreen)
    { map2(); }
    if (num == 0) { if (ulternate == 9) { alert("game  is draw"); } }
    else { if (ulternate == 10) { alert("game  is draw"); } }       
}




let imgRed=`O`;
let imgGreen = `X`;



let ulternate = (Math.trunc(Math.random() * 10) % 2);
const num = ulternate;
let a = document.getElementById('mytext');
let mybtn = document.getElementById('StartGameBtn');
let find = true;
mybtn.addEventListener('click', function () {
  if (find == true)
  {
    if (num == 0)
    {
        a.textContent = ` First chance to run ${(player1.value).toUpperCase()}`;
    imgRed=`X`;
    imgGreen = `O`;
    }
    else {
        a.textContent = ` first chance to run ${((player2.value)).toUpperCase()}`;
        imgRed=`O`;
        imgGreen = `X`;

    }
    }
    find = false;
})



function WrongClickFun() {
    alert("Wrong click");
}




function Color_change(select)
{
    if (Math.round(ulternate % 2) == 0)
        {
  select.innerHTML = imgRed;
  select.style.backgroundColor = "black";
  select.style.color = "red";
select.style.fontSize = "90px";
        }
else{
  select.innerHTML = imgGreen;
  select.style.backgroundColor = "black";
  select.style.color = "green";
select.style.fontSize = "90px";
    }
    ulternate++;
console.log(r1c1.textContent);

}




let EvenOdd = Math.round(ulternate % 2);


r1c1.addEventListener('click', function () {
if (check_r1c1 == false)
{ 
    check_r1c1 = true;
    var_r1c1 = true;
    Color_change(r1c1);
    setTimeout(()=>{
    main_check_function();    
    })
}
    else { WrongClickFun() }
   
})


r1c2.addEventListener('click', function () {
if (check_r1c2 == false)
{ 
    check_r1c2 = true;
    Color_change(r1c2);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})



r1c3.addEventListener('click', function () {
if (check_r1c3 == false)
{ 
    check_r1c3 = true;
    Color_change(r1c3);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})




r2c1.addEventListener('click', function () {
if (check_r2c1 == false)
{ 
    check_r2c1 = true;
    Color_change(r2c1);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})





r2c2.addEventListener('click', function () {
if (check_r2c2 == false)
{ 
    check_r2c2 = true;
    Color_change(r2c2);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})




r2c3.addEventListener('click', function () {
if (check_r2c3 == false)
{ 
    check_r2c3 = true;
    Color_change(r2c3);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})




r3c1.addEventListener('click', function () {
if (check_r3c1 == false)
{ 
    check_r3c1 = true;
    Color_change(r3c1);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})




r3c2.addEventListener('click', function () {
if (check_r3c2 == false)
{ 
    check_r3c2 = true;
    Color_change(r3c2);
    setTimeout(()=>{
    main_check_function();    
    })
    

}
    else { WrongClickFun() }
   
})




r3c3.addEventListener('click', function () {
if (check_r3c3 == false)
{ 
    check_r3c3 = true;
    Color_change(r3c3);
    setTimeout(()=>{
    main_check_function();    
    })
}
else { WrongClickFun() }
   
})

