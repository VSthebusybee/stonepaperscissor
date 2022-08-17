function getcomputerchoice()
{
    let choices=new Array("rock","paper","scissor");
    let result=choices[Math.floor(Math.random()* choices.length)];
    return result;
}
getcomputerchoice();    

let playerscore=0;
let computerscore=0;
let roundwinner=0;

function playround(playerselection,computerselection)
{
   if(playerselection==computerselection)
   {
    console.log("Tier!!");
   }
   else if(playerselection ==computerselection)
   {
    console.log("Hurray You won!!");
   }
   else
   {
    console.log("Ahh!! You loose");
   }
   
}
const playerselection=game();
const computerselection=getcomputerchoice();
playround(playerselection,computerselection);

function game()
{
    for(let i=0;i<5;i++)
    {
        let user=prompt("Enter your choice");
        console.log(i+1);
        var pro=user;    
    }
    return pro;
}

