

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let moves=document.querySelector("#moves");
let player=document.querySelector("#pscore");
let computer=document.querySelector("#cscore");
let button=document.querySelectorAll(".button");
let resetbtn=document.querySelector("#rstbtn");
let newGameBtn=document.querySelector("#newGame");
let winner=document.querySelector(".winner");
let declare=document.querySelector("#declare");
let stats=document.querySelector("#status");
let count=10;
let playerS=0;
let computerS=0;



button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        
        if(btn==rock)
        {   count--;
            let choice=computerChoice();
            if(choice==1)
            {
                moves.innerText--;
                console.log("Draw",choice);
                stats.innerText="Draw";
            }
            else if(choice==2){
                moves.innerText--;
                computerS++;
                computer.innerText=computerS;
                stats.innerText="Computer Won";
            }
            else if( choice==3){
                moves.innerText--;
                playerS++;
                player.innerText=playerS;
                stats.innerText="Player Won";
            }
        } else if(btn==paper)
        {   count--;
            let choice=computerChoice();
            if(choice==1)
            {
                moves.innerText--;
                playerS++;
                player.innerText=playerS;
                stats.innerText="Player Won";
            }
            else if(choice==2){
                moves.innerText--;
                console.log("Draw",choice);
                stats.innerText="Draw";
            }
            else if( choice==3){
                moves.innerText--;
                computerS++;
                computer.innerText=computerS;
                stats.innerText="Computer Won";
            }
        }else if(btn==scissor)
        {   count--;
            let choice=computerChoice();
            if(choice==1)
            {
                moves.innerText--;
                computerS++;
                computer.innerText=computerS;
                stats.innerText="Computer Won";
            }
            else if(choice==2){
                moves.innerText--;
                playerS++;
                player.innerText=playerS;
                stats.innerText="Player Won";
            }
            else if( choice==3){
                moves.innerText--;
                console.log("Draw",choice);
                stats.innerText="Draw";
            }
        }
        if(count==0){
            announce();
        }
    })
})

const announce=()=>{
resetbtn.disabled=true;
for(let btn of button){
    btn.disabled=true;
}
    if(playerS>computerS)
    {
        declare.innerText="Congratulations! You won the Game.";
    } else if(computerS>playerS){
        declare.innerText="Better luck next Time :)";

    }
    else if(computerS==playerS){
        declare.innerText="That's a Draw. :)";

    }
    winner.style.visibility="visible";


}
const computerChoice=()=>{
    let choice;
    choice=Math.floor(Math.random()*3)+1;
    return choice;
}

const newGame=()=>{
    winner.style.visibility="hidden";
    resetbtn.disabled=false;
    for(let btn of button){
        btn.disabled=false;
    }
    rstGame();
}

const rstGame=()=>{
    moves.innerText=10;
    player.innerText=0;
    computer.innerText=0;
    stats.innerText="Let's start the Game.";
    count=10;
    playerS=0;
    computerS=0;
}

resetbtn.addEventListener("click",rstGame);
newGameBtn.addEventListener("click",newGame);