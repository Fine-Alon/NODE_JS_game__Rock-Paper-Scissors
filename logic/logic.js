import { showOptions } from "../UI/ui_cli.js"
import promptSync from "prompt-sync"
import { optionsTools as options } from "../settings.js"

const prompt = promptSync()

export const getUserChoice = userName => {
  showOptions(userName)

  while (true) {
    const choice = prompt(`What is your choice ${userName} ? (1, 2, or 3)  -  `)
    const intChoice = Number(choice)

    if ([1, 2, 3].includes(intChoice)) {
      return [intChoice, options[intChoice - 1]]
    }
    console.log(`\n\t❌ Invalid choice! Please enter exactly 1, 2, or 3.\n`)
  }
}
