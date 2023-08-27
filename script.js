let random_number = 0;

function makeBubble() {
    let clutter = "";

    for (i = 1; i <= 158; i++) {
        let random_number = Math.floor(Math.random() * 10);
        clutter = clutter + ` <div class="bubble">${random_number}</div>`;
    }
    document.querySelector('#panel-btm').innerHTML = clutter;
}

let time = 60;
function timer() {
    let timerval = setInterval(function () {
        if (time > 0) {
            time = time - 1;
            document.querySelector('#timeval').textContent = time;
        } else{
            clearInterval(timerval);
            document.querySelector('#panel-btm').innerHTML = `<h1>Game Over</h1>`;

        }
    }, 1000)
}

function hit(){
    random_number = Math.floor(Math.random()*10);
    document.querySelector('#hit-value').textContent = random_number;
}


let score = 0;
function increase_score(){
    score = score + 10;
    document.querySelector('#score-value').textContent = score;
}

document.querySelector('#panel-btm').addEventListener('click' , function(details){
     let clicked_number = Number(details.target.textContent);
     if(clicked_number === random_number){
        increase_score();
        makeBubble();
        hit();
     }
})

timer();
makeBubble();
hit();