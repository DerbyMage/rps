

function computerChoice() {
    const rando = Math.floor(Math.random() * 3)
    const choices = ['rock', 'paper', 'scissors']
    
//midoficiation to see if itll change in the cmd git status just from saving
    console.log(choices[rando])
    return choices[rando]
}

function userChoice() {
    return prompt('What you pickin ya punk bitch?')
}

function playRound(choice, computer) {
    // let computer = computerChoice()
    console.log(computer)
    console.log(choice)
    if(choice.toLowerCase() === 'rock' && computer === 'scissors') {
        alert('Oh shit you actually won ya punk bitch')
        console.log('Win')
        return 'Win'
} 
    if(choice.toLowerCase() === 'rock' && computer === 'paper') {
        console.log('Naw you still trash, bum boy')
        console.log('Loss')
    return 'Loss'
    }
    if(choice.toLowerCase() === 'rock' && computer === 'rock') {
        alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        return 'Tie'
    }

    if(choice.toLowerCase() === 'paper' && computer === 'scissors') {
        console.log('Naw you still trash, bum boy')
        console.log('Loss')
        return 'Loss'
    } 
    if(choice.toLowerCase() === 'paper' && computer === 'paper') {
        alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        return 'Tie'
            
    }
    if(choice.toLowerCase() === 'paper' && computer === 'rock') {
        alert('Oh shit you actually won ya punk bitch')
        console.log('Win')
        return 'Win'
    }

    if(choice.toLowerCase() === 'scissors' && computer === 'scissors') {
        alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        return 'Tie'
        } 
        if(choice.toLowerCase() === 'scissors' && computer === 'paper') {
            alert('Oh shit you actually won ya punk bitch')
            console.log('Win')
            return 'Win'
            
        }
        if(choice.toLowerCase() === 'scissors' && computer === 'rock') {
            console.log('Naw you still trash, bum boy')
            console.log('Loss')
            return 'Loss'
        }    
}



function playGame() {
    let wins = 0
    let losses = 0
    let ties = 0

    for(let i = 0; i<5;i++) {
  
        let play = playRound(userChoice(), computerChoice())
        console.log(play)
        switch(play) {
            case 'Win':
                wins++
                break;
            case 'Loss':
                losses++
                break;
            case 'Tie':
                ties++
                break;
                default:
                    console.log('I guess were in a bit of a pickle')

        }

}
console.log(wins + '-' + losses + '-' + ties)
}

playGame()