const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')


let result = 0
let hitPosition
let currentTime = 60
let timerId = null

// function to make balloon appear in random grid box
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

// function to increment score with balloon is clicked by mouse
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

// function to make balloon move to random grid box every 500 milliseconds
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

// function for when timer is finished and game ends
function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  // when timer was over
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Oops...Timer over! You popped ' + result + ' balloons!')
    
    // if the player scored less than 20
    if (result < 20){
      alert('You need to improve your aim! Play Again!')
      // if the player scored 20
    } else if (result == 20){
      alert('Your aim is average, We recommend more practice!')
      //if the player scored above 20
    } else {
      alert('You have amazing aim. GOOD JOB!')
    }

    function saveScore(){
      
      var playerScore = {result};
      // Put the object into storage
      localStorage.setItem('playerScore', JSON.stringify(playerScore));
      // Retrieve the object from storage
      var retrievedObject = localStorage.getItem('playerScore');
      
      storedScore = JSON.parse(retrievedObject);
      // Display retieved object on console    
      console.log('Player Score is: ', storedScore);

    }

    saveScore()
  }

}

// the timer counts down from 60 every 1000 millisecond(1 second)
let countDownTimerId = setInterval(countDown, 1000)

