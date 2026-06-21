// Define the possible choices
export const optionsTools = ["🪨  Rock", "📄  Paper", "✂️  Scissors"]

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
