const prompt = require("prompt-sync")()

// NOT in use yet
const showOptions = () => {
  console.log("\n=========================")
  console.log("   Choose Your Weapon:   ")
  console.log("=========================")
  console.log("  [1] 🪨  Rock")
  console.log("  [2] 📄  Paper")
  console.log("  [3] ✂️  Scissors")
  console.log("=========================\n")
}

const getTriesCount = () => {
  while (true) {
    const triesCount = prompt("How much rounds you wish? (3 - 10)times  -  ")

    if (triesCount < 3 || triesCount > 10) {
      console.log("Number of rounds is not legal! Try again")
    } else {
      return Number(triesCount)
      break
    }
  }
}

const getUserChoice = () => {
  showOptions()

  // Define the possible choices
  const options = ["🪨  Rock", "📄  Paper", "✂️  Scissors"]

  const choice = prompt("What is your choice ?  -  ")
  const intChoice = Number(choice)

  return [intChoice, options[intChoice - 1]]
  return
}

const getComputerChoice = () => {
  // Define the possible choices
  const options = ["🪨  Rock", "📄  Paper", "✂️  Scissors"]

  // Get random number
  const randomIndex = Math.floor(Math.random() * options.length)

  return [randomIndex + 1, options[randomIndex]]
}

const checkRoundWinner = (userChoiceArr, computerChoiceArr) => {
  let isRepeat = true
  let isUserWon = true

  const [userNumber, userPicture] = userChoiceArr
  const [compNumber, compPicture] = computerChoiceArr

  const condition =
    (userNumber === 3 && compNumber === 2) || (userNumber === 2 && compNumber === 1) || (userNumber === 1 && compNumber === 3)

  console.log("\n\tYou - " + userPicture) // Show comp's choice
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

const viewScore = (userWins, compWins) => {
  console.log("\n        ╭─────────────╮")
  console.log("        │  YOU ┆ BOT  │")
  console.log(`        │   ${userWins}  ┆  ${compWins}   │`)
  console.log("        ╰─────────────╯")
  console.log(`\n────────────────────────────────────────`)
}

const roundFrame = counter => {
  // 3. ROUND START FRAME (Prints at the top of every loop)
  console.log(`\n╭────────────────────────╮`)
  // We use some spacing to make the round number look centered
  console.log(`│        ROUND ${counter}         │`)
  console.log(`╰────────────────────────╯\n`)
}

const showDate = () => {
  const dateTimeNow = new Date()
  const readableDate = dateTimeNow.toLocaleString()
  console.log("\n\n📅", readableDate)

  return dateTimeNow
}

const initGame = () => {
  showDate()

  let userWins = 0
  let compWins = 0
  let roundCount = 1

  console.log("\n╔════════════════════════════════════════╗")
  console.log("║            🚀 GAME START! 🚀           ║")
  console.log("╚════════════════════════════════════════╝")

  return [userWins, compWins, roundCount]
}

const playGame = () => {
  let [userWins, compWins, roundCount] = initGame()

  while (true) {
    roundFrame(roundCount)

    const userChoice = getUserChoice()
    const computerChoice = getComputerChoice()

    const [isRepeat, isUserWon] = checkRoundWinner(userChoice, computerChoice)
    if (isRepeat) {
      viewScore(userWins, compWins)
      roundCount++
      continue
    }

    // add score
    if (isUserWon) userWins++
    else compWins++

    viewScore(userWins, compWins)

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
