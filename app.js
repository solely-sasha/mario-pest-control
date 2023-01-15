const totalButton = document.getElementById('total');
const form = document.baddies;


function baddiesTotal() {
    const goombasCaught = form.goombas.value;
    const bombsCaught = form.bombs.value;
    const cheepsCaught = form.cheeps.value;

    // console.log("goombas", goombasCaught)
    let totalGoombas = document.getElementById('goombasInput');
    let totalBombs = document.getElementById('bombsInput');
    let totalcheeps = document.getElementById('cheepsInput');

    let goombaCaughtTotal = goombasCaught * 5;
    let bombsCaughtTotal = bombsCaught * 7;
    let cheepsCaughtTotal = cheepsCaught * 11;

    totalGoombas.value = goombaCaughtTotal;
    totalBombs.value = bombsCaughtTotal;
    totalcheeps.value = cheepsCaughtTotal;

    let totalPrice = goombaCaughtTotal + bombsCaughtTotal + cheepsCaughtTotal; 
    console.log(totalPrice)

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
     let finalTotal = document.getElementById('finalTotal');
     
    finalTotal.value = totalPrice;
    
    })

}


