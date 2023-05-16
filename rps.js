let userWins = 0    
let computerWins = 0
let userLosses = 0  
let computerLosses = 0   
let userTies = 0    
let computerTies = 0 


function computerChoice() {
    const rando = Math.floor(Math.random() * 3)
    const choices = ['rock', 'paper', 'scissors']
    
//modifcation to see if itll change in the cmd git status just from saving
    console.log(choices[rando])
    return choices[rando]
}

// function userChoice() {
//     return prompt('What you pickin ya punk bitch?')
// }

function playRound(choice, computer) {
   

    // let computer = computerChoice()
    console.log(`The computer chose ${computer}`)
    console.log(`The player chose ${choice}`)
    if(choice.toLowerCase() === 'rock' && computer === 'scissors') {
        // alert('Oh shit you actually won ya punk bitch')
        console.log('Win')
        userWins++
        computerLosses++
        // return 'Win'
} 
    if(choice.toLowerCase() === 'rock' && computer === 'paper') {
        console.log('Naw you still trash, bum boy')
        console.log('Loss')
        userLosses++
        computerWins++
    // return 'Loss'
    }
    if(choice.toLowerCase() === 'rock' && computer === 'rock') {
        // alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        userTies++
        computerTies++
        // return 'Tie'
    }

    if(choice.toLowerCase() === 'paper' && computer === 'scissors') {
        console.log('Naw you still trash, bum boy')
        console.log('Loss')
        userLosses++
        computerWins++
        // return 'Loss'
    } 
    if(choice.toLowerCase() === 'paper' && computer === 'paper') {
        // alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        userTies++
        computerTies++
        // return 'Tie'
            
    }
    if(choice.toLowerCase() === 'paper' && computer === 'rock') {
        // alert('Oh shit you actually won ya punk bitch')
        console.log('Win')
        userWins++
        computerLosses++
        // return 'Win'
    }

    if(choice.toLowerCase() === 'scissors' && computer === 'scissors') {
        // alert('You tied vs the computer?  You trash bruh')
        console.log('Tie')
        userTies++
        computerTies++
        // return 'Tie'
        } 


        if(choice.toLowerCase() === 'scissors' && computer === 'paper') {
            // alert('Oh shit you actually won ya punk bitch')
            console.log('Win')
            userWins++
            computerLosses++
            // return 'Win'
            
        }
        if(choice.toLowerCase() === 'scissors' && computer === 'rock') {
            console.log('Naw you still trash, bum boy')
            console.log('Loss')
            userLosses++
            computerWins++
            // return 'Loss'
        }    
        
        const results = document.querySelector('.results')
        if(results.querySelector('div')){
            const newElement = results.querySelectorAll('div')
            console.log(newElement.length)
            for(let i = 0; i < newElement.length; i++) {
                const removing = results.querySelector('div')
        results.removeChild(removing)
        }
    }

    if(userWins === 5) {
         results.textContent = ' Damn you actually won the match, congrats.'
         userLosses = 0
         userTies = 0
         userWins = 0
         computerLosses = 0
         computerTies = 0
         computerWins = 0
        
    }
    else if(computerWins === 5) { 
        results.textContent = 'You lost a match to the computer?? You trash b'
        userLosses = 0
        userTies = 0
        userWins = 0
        computerLosses = 0
        computerTies = 0
        computerWins = 0
}
    else {
        results.textContent = ''
        const computerScore = document.createElement('div')
        const userScore = document.createElement('div')
        userScore.textContent = `User Record ${userWins}-${userLosses}-${userTies}`
        computerScore.textContent = `Computer Record ${computerWins}-${computerLosses}-${computerTies}`
        console.log(computerScore)
        console.log(results)
        results.appendChild(computerScore)
        results.appendChild(userScore)
    }




  
}

const btn = document.querySelectorAll('button')

btn.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id, computerChoice())
    })
})



// const ele = document.getElementById('rock')
// ele.addEventListener('click', function() {
//     playRound('rock', computerChoice())})










// function playGame() {
//     let wins = 0
//     let losses = 0
//     let ties = 0

//     for(let i = 0; i<5;i++) {
  
//         let play = playRound(userChoice(), computerChoice())
//         console.log(play)
//         switch(play) {
//             case 'Win':
//                 wins++
//                 break;
//             case 'Loss':
//                 losses++
//                 break;
//             case 'Tie':
//                 ties++
//                 break;
//                 default:
//                     console.log('I guess were in a bit of a pickle')

//         }

// }
// console.log(wins + '-' + losses + '-' + ties)
// }
