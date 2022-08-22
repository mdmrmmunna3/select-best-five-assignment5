// function handelOnClick (event) {
//    const clickOnFirstButton = document.getElementById('first-btn')
//     // console.log("select btn are clicked");
   
//     const playersName = document.getElementById(event);
//     const player1Name = playersName.innerText;
//     // playersName.innerText = player1Name; 
//     console.log(player1Name);

//     const clickOnScondButton = document.getElementById ('second-btn');
   
//     const player2Name = playersName.innerText;
//     console.log(player2Name);

   
// }

function handelOnClick (event) {
    const playerNameList = document.getElementById (event);
    const fistPlayerNameAdd = playerNameList.innerText;

    const secondPlayerNameAdd = playerNameList.innerText;

    const thirdPlayerNameAdd = playerNameList.innerText;

    const fourthPlayerNameAdd = playerNameList.innerText;

    const fivethPlayerNameAdd = playerNameList.innerText;

    const sixPlayerNameAdd = playerNameList.innerText;

    const listContainer = document.getElementById('list-container');
        const li = document.createElement('li');
        li.innerText = fistPlayerNameAdd, secondPlayerNameAdd, thirdPlayerNameAdd, fourthPlayerNameAdd, fivethPlayerNameAdd, sixPlayerNameAdd;
        const allLiList = li.innerText;
        // li.innerText = secondPlayerNameAdd;
        // li.innerText = thirdPlayerNameAdd;
        // li.innerText = fourthPlayerNameAdd;
        // li.innerText = fivethPlayerNameAdd;
        // li.innerText = sixPlayerNameAdd;
        listContainer.appendChild(li);
        if(allLiList.length >= 5){
            alert("You can't add more than 5 Players");
            }
    
}
