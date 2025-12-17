let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow","red","blue","green"];
 let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

};

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);

};

function levelUp(){
    userSeq = [];
     level++;

h2.innerText =  `Level ${level}`;
let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randbtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
// console.log(randColor,randbtn);
console.log("game seq: ",gameSeq);
gameFlash(randbtn);

};

function checkAns(idx){
 
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length ===gameSeq.length){
        setTimeout(levelUp,1000);
    }
  }
  else{
    h2.innerHTML = `Game Over! Yours score was <b>${level-1}</b> <br> Press any key to start over`;
     document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
  }
}



function btnPress(){
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let btncolor = btn.getAttribute("id");
    userSeq.push(btncolor);
    console.log("userseq : ",userSeq);
    checkAns(userSeq.length-1);


};

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
   btn.addEventListener("click",btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
