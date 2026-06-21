const prompt = require("prompt-sync")()
const { optionsTools: options } = require("./settings")
const { showDate, viewScore, showOptions, startGameBanner } = require("./UI/ui_cli")
const { isNameValid } = require("./validators/validators")
const { getUserChoice } = require("./logic/logic")

const getComputerChoice = () => {
  // Define the possible choices

  // Get random number
  const randomIndex = Math.floor(Math.random() * options.length)

  return [randomIndex + 1, options[randomIndex]]
}

const checkRoundWinner = (userName, userChoiceArr, computerChoiceArr) => {
  let isRepeat = true
  let isUserWon = true

  const [userNumber, userPicture] = userChoiceArr
  const [compNumber, compPicture] = computerChoiceArr

  const condition =
    (userNumber === 3 && compNumber === 2) || (userNumber === 2 && compNumber === 1) || (userNumber === 1 && compNumber === 3)

  console.log(`\n\t${userName} - ` + userPicture) // Show comp's choice
  console.log("\n\tBot - " + compPicture) // Show comp's choice

  // If 2 choices are the same return TRUE (for repeating)
  if (userNumber === compNumber) return [isRepeat, null]

  // If USER won we return [ false (NO_REPEAT), true (USER WON)]
  return condition ? [!isRepeat, isUserWon] : [!isRepeat, !isUserWon]
}

const checkGameEnd = (userWins, compWins) => {
  if (userWins === 3) {
    return "\n======================================\n 🏆  CONGRATULATIONS! YOU WIN! 🎉 \n======================================\n"
  }

  if (compWins === 3) {
    return "\n======================================\n 💀  GAME OVER! COMPUTER WINS. 🤖 \n======================================\n\n"
  }

  return null // if no winner yet return null
}

const roundFrame = counter => {
  // ROUND START FRAME (Prints at the top of every loop)
  console.log(`\n╭────────────────────────╮`)
  // We use some spacing to make the round number look centered
  console.log(`│        ROUND ${counter}         │`)
  console.log(`╰────────────────────────╯\n`)
}

const initGame = () => {
  showDate()

  let userWins = 0
  let compWins = 0
  let roundCount = 1

  startGameBanner()

  while (true) {
    const userName = prompt("Enter players name:  ")

    if (isNameValid(userName)) {
      return [userName, userWins, compWins, roundCount]
    }
  }
}

const playGame = () => {
  let [userName, userWins, compWins, roundCount] = initGame()

  while (true) {
    roundFrame(roundCount)

    const userChoice = getUserChoice(userName)
    const computerChoice = getComputerChoice()

    const [isRepeat, isUserWon] = checkRoundWinner(userName, userChoice, computerChoice)
    if (isRepeat) {
      viewScore(userName, userWins, compWins)
      roundCount++
      continue
    }

    // add score
    if (isUserWon) userWins++
    else compWins++

    viewScore(userName, userWins, compWins)

    // check if there is winner
    const winnerMsg = checkGameEnd(userWins, compWins)
    if (winnerMsg) {
      console.log(winnerMsg)
      break
    }

    roundCount++
  }
}

playGame()
