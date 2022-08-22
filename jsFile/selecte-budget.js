// selected five list ...

const ol = document.getElementById('list-container');
const players = document.getElementsByClassName('player');

function handelOnClick (event) {
   
    const playersName = document.getElementById(event);
    const playerName = playersName.innerText;
    const li = document.createElement('li') ;
    li.innerText = playerName;
    li.classList = 'player';
    if (players.length >= 5) {
        alert('you can not more than 5');
        return;
    }
    else{
        ol.appendChild(li);
        return;
    }
   
}

//btn disabled part...
const clicksOnButton = document.getElementsByClassName('btn-style');
    let incrementButton = 0;
    for(const clickButton of clicksOnButton) {
        clickButton.addEventListener('click', function(){
            incrementButton++;
            
           if(incrementButton <= 4) {
            clickButton.setAttribute('disabled', true);
            console.log(incrementButton)
           }
          else {
            clickButton.setAttribute('disabled', false)
          }
        
        })
    }
   

    // players budget part 

    document.getElementById('claculate-button').addEventListener('click', function(){
        // console.log('calculate button are clicked');
        const perPlayersBudeget = document.getElementById('players-money-field');
        const perPlayersBudgetString = perPlayersBudeget.value;
        const perPlayersBudgetAmount = parseFloat(perPlayersBudgetString);
        // console.log(perPlayersBudgetAmount);
    })