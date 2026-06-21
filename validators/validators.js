export const isNameValid = name => {
  if (name.length > 10) {
    console.log("Username is too long, please choose the shorter one.")
    return false
  }
  return true
}
