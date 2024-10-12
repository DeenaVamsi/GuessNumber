'use strict';

let oNum=Math.trunc(Math.random()*20)+1;
let gNum;
console.log(oNum);
let points=20;
let hScore=0;



document.querySelector('.check').addEventListener('click',function(){
    gNum=Number(document.querySelector('.guess').value);
    console.log(gNum);
    if(gNum===0)
    {
        document.querySelector('.message').textContent="⛔Number is Not Given"
    }
    else if(gNum===oNum)
    {
        document.querySelector('.number').style.backgroundColor='green';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.message').textContent="🎆Number is Correct🎆";
        document.querySelector('.number').textContent=oNum;
        document.querySelector('.highscore').textContent=hScore;
        
    }
    else if(gNum<oNum)
    {
        document.querySelector('.message').textContent="Number is too low";
        points--;
        document.querySelector('.score').textContent=points;
        document.querySelector('.highscore').textContent=hScore;
       
        
    }
    else 
    {
        document.querySelector('.message').textContent="Number is too high";
        points--;
        document.querySelector('.score').textContent=points;
        document.querySelector('.highscore').textContent=hScore;
       
    }
});



document.querySelector('.again').addEventListener('click',function(){
    oNum=Math.trunc(Math.random()*20)+1;
    gNum=Number(document.querySelector('.guess').value);
    console.log(oNum);
    if(hScore<=points)
    {
        hScore=points;
        document.querySelector('.highscore').textContent=hScore;
    }
    points=20;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').style.backgroundColor='#eee';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value='';

});



