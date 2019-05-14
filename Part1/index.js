// console.log('hi I am rendering correctly')
let game = []


function play(id){
    let selectedBox = document.getElementById(id)
    let playTurn = document.getElementById('player')
    selectedBox.innerText = playTurn.innerText
    // console.log(id)
    //push value into the array
    game[id] = selectedBox.innerText
    // console.log(game)

    //Toggle between X and O
    if(playTurn.innerText == 'X'){
        playTurn.innerText = 'O'
    } else {
        playTurn.innerText = 'X'
    }
    check()
    
}


function check(){
    if(game[0] !==undefined && game[1]===game[0] && game[2]===game[0]){
        setTimeout(()=>{
            window.alert(`player ${game[0]} wins`);
            reset();
        },
        50)
        return;
    }

    if(game[3] !== undefined && game[4]===game[3] && game[5]===game[3]){
        setTimeout(()=>{
            window.alert(`player ${game[3]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[6] !== undefined && game[7]===game[6] && game[8]===game[6]){
        setTimeout(()=>{
            window.alert(`player ${game[6]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[0] !== undefined && game[3]===game[0] && game[6]===game[0]){
        setTimeout(()=>{
            window.alert(`player ${game[0]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[1] !== undefined && game[4]===game[1] && game[7]===game[1]){
        setTimeout(()=>{
            window.alert(`player ${game[1]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[2] !== undefined && game[5]===game[2] && game[8]===game[2]){
        setTimeout(()=>{
            window.alert(`player ${game[2]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[0] !== undefined && game[4]===game[0] && game[8]===game[0]){
        setTimeout(()=>{
            window.alert(`player ${game[0]} wins`);
            reset();
        },
        50)
        return;
    }
    if(game[2] !== undefined && game[4]===game[2] && game[6]===game[2]){
        setTimeout(()=>{
            window.alert(`player ${game[2]} wins`);
            reset();
        },
        50)
        return;
    } 
    if(game[0] && game[1] && game[2] && game[3] &&game[4] && game[5] &&game[6] && game[7] && game[8]){
        setTimeout(()=>{
            window.alert(`It's a CAT game!`);
            reset();
        },
        50)
        return;
    }
}

function reset(){
    game = []
    let zero = document.getElementById(0).innerText = ''
    let one = document.getElementById(1).innerText = ''
    let two = document.getElementById(2).innerText = ''
    let three = document.getElementById(3).innerText = ''
    let four = document.getElementById(4).innerText = ''
    let five = document.getElementById(5).innerText = ''
    let six = document.getElementById(6).innerText = ''
    let seven = document.getElementById(7).innerText = ''
    let eight = document.getElementById(8).innerText = ''
}