let gameseq=[];
let userseq=[];

let btns=["orange","red","blue","violet"];
let started=false;
let level=0;

let h3= document.querySelector("h3");


document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game started");
    started=true;
   
  levelup();}

})
  
function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  },250)
}function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash")
  },250)
}

function levelup(){
  userseq=[];
    level++;
  h3.innerText=`level ${level}`;
  let ranIdex=Math.floor((Math.random()*3)+1);
  let rancolor=btns[ranIdex];
  let randbtn=document.querySelector(`.${rancolor}`);
 gameseq.push(rancolor);
  console.log(gameseq);
  btnflash(randbtn);
}

function ans(idx){

  // let idx= level-1;

  if(gameseq[idx]===userseq[idx]){
   if(userseq.length==gameseq.length){
   setTimeout(levelup,1000);
   }
  }else{
    h3.innerHTML=`game over!  Your score was <b>${level}</b> <br>
     Press any key to start`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
      
    document.querySelector("body").style.backgroundColor="white";
    },250);
   reset();
  }
}



function btnpress(){
  let btn= this;
  userflash(btn);
  // console.log(this)
  
 let usercolor=btn.getAttribute("id");
 userseq.push(usercolor);
//  console.log(userseq);

 ans(userseq.length-1);

}

let allbtns= document.querySelectorAll(".box")
for( let btn of allbtns){
   btn.addEventListener("click",btnpress);
}

function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;

}
