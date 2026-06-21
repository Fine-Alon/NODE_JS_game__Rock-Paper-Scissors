export const showOptions = userName => {
  console.log("\n=========================")
  console.log(`   Choose Your Weapon (${userName}):   `)
  console.log("=========================")
  console.log("  [1] 🪨  Rock")
  console.log("  [2] 📄 Paper")
  console.log("  [3] ✂️  Scissors")
  console.log("=========================\n")
}

export const startGameBanner = () => {
  console.log("\n╔════════════════════════════════════════╗")
  console.log("║            🚀 GAME START! 🚀           ║")
  console.log("╚════════════════════════════════════════╝")
  console.log("\n\t")
}

export const viewScore = (userName, userWins, compWins) => {
  // Calculate the required width for the left column
  const leftWidth = Math.max(userName.length + 2, 5)
  const rightWidth = 5 // Fixed width for BOT

  // helper function to center the text inside the columns
  const centerText = (text, width) => {
    const str = String(text)
    const padTotal = width - str.length
    const padLeft = " ".repeat(Math.floor(padTotal / 2))
    const padRight = " ".repeat(padTotal - Math.floor(padTotal / 2))
    return padLeft + str + padRight
  }

  // Calculate the total width of the roof and floor of the box
  const totalWidth = leftWidth + 3 + rightWidth // +3 is for the " ┆ " separator

  // 4. Draw the dynamic box using .repeat()
  console.log(`\n        ╭${"─".repeat(totalWidth)}╮`)
  console.log(`        │${centerText(userName, leftWidth)} ┆ ${centerText("BOT", rightWidth)}│`)
  console.log(`        │${centerText(userWins, leftWidth)} ┆ ${centerText(compWins, rightWidth)}│`)
  console.log(`        ╰${"─".repeat(totalWidth)}╯\n`)
}

export const showDate = () => {
  const dateTimeNow = new Date()
  const readableDate = dateTimeNow.toLocaleString()
  console.log("\n\n📅", readableDate)

  return dateTimeNow
}
