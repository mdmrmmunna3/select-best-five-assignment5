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
            console.log(incrementButton);
           }
          else {
            clickButton.setAttribute('disabled', false)
          }
        
        })
    }
   

    // players budget part 

    //  Function for input field 
    function getElementValueById(inputFieldId) {
        const perPlayerDisplay = document.getElementById(inputFieldId);
        const perPlayerStringValue = perPlayerDisplay.value;
        const perPlayerValueNumber = parseFloat(perPlayerStringValue);
        return perPlayerValueNumber;
    }
    
    
    // function for text field 
    function getElementTextById(inputFieldId) {
        const perPlayerDisplay = document.getElementById(eventId);
        const perPlayerStringValue = perPlayerDisplay.innerText;
        const perPlayerValueNumber = parseFloat(perPlayerStringValue);
        return perPlayerValueNumber;
    }
    
    
    // per player calculation 
    document.getElementById('claculate-button').addEventListener('click', function() {
        const perPlayer = getElementValueById('per-players-field');
        console.log(perPlayer);
    
        const playerExpensesField = document.getElementById('player-expenses');
        const playerExpensesAmount = 5 * perPlayer;
        console.log(playerExpensesField);
        playerExpensesField.innerText = playerExpensesAmount;
    })
    
    