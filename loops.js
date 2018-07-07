function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  if (i == 0) {
    return "I am 1 strange loop."
  } else {
    return `I am ${i} strange loops.`
  }
  }
}

function whileLoop(number) {
  while (number > 0) {
    console.log(parseInt(number--, 10))
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue())
  return array
}