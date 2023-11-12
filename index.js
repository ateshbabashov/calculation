let pTag = document.querySelector("#result");
let plusBtn = document.querySelector('#plus');
let resetBtn = document.querySelector('#reset');
let minusBtn = document.querySelector('#minus');
let score = 0 

plusBtn.addEventListener("click", ()=>{
    score ++;
    pTag.innerHTML = score;

    if(score >= 1){
        pTag.style.color = "green";
        pTag.style.transform = 'scale(1.1)';
    }else if(score == 0){
        pTag.style.color = "white";
    };
});

minusBtn.addEventListener("click", ()=>{
    score --;
    pTag.innerHTML = score;

   
    if(score == 0){
        pTag.style.color = "white";
    }else if(score < 1){
        pTag.style.color = "red";
        pTag.style.transform = 'scale(1.1)';
    };
});

resetBtn.addEventListener("click", ()=>{
    score = 0;
    pTag.innerHTML = score;
    pTag.style.color = "white";
});