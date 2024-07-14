let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let h2=document.querySelector("h2");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let main=document.querySelector("main");
let popUpMsg=document.querySelector(".pop-up-msg");
let playerX=document.querySelector("#playerX");
let playerO=document.querySelector("#playerO");

playerX.addEventListener("click",()=>{
    popUpMsg.classList.add("hide");
    turnX=true;
    h2.innerText="X's Turn";
    main.classList.remove("hide");
});

playerO.addEventListener("click",()=>{
    popUpMsg.classList.add("hide");
    turnX=false;
    h2.innerText="O's Turn";
    main.classList.remove("hide");
});


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    h2.innerText="X's Turn";
    popUpMsg.classList.remove("hide");
    main.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX){
            h2.innerText="O's Turn"
            box.innerText="X";
            turnX=false;
            box.style.color="darkred";
        }else{
            h2.innerText="X's Turn"
            box.style.color="blue";
            box.innerText="O";
            turnX=true;
        };


        box.disabled= true;
        
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations🎉🎊, ${winner} is the Winner.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    main.classList.add("hide");
};

const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){

                showWinner(pos1Val);
            };
        };
    };
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);