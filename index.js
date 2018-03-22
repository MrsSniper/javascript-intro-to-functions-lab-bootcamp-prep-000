function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if(string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if(string.toUpperCase() === string) {
=======
  if(string.toLowerCase === string) {
    return "I can't hear you!"
  } else if(string.toUpperCase === string) {
>>>>>>> dd31666a24f386d8f890bbfe484a5df4e0c3fc05
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}