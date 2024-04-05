const pigLatin = (word) => {
  // Your code here
  const vowels = ['a', 'e', 'i', 'o', 'u']
  word = word.toLowerCase().trim()
  let wordArray = word.split('')
  for (let i = 0; i < vowels.length; i++) {
    if (wordArray[0] === vowels[i]) {
      wordArray.push('yay')
      return wordArray.join('')
    }
  }
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[0] === 'a'|| wordArray[0] === 'e'|| wordArray[0] === 'i'|| wordArray[0] === 'o'|| wordArray[0] === 'u') {
      wordArray.push('ay')
      return wordArray.join('')
    }
    else {
      let firstLetter = wordArray.splice(0, 1)
      wordArray.push(firstLetter)
    }
  }

}


document.body.style.backgroundColor = 'lightblue'
// Created GUI in the DOM for user
let title = document.createElement('h1')
title.style.textAlign = 'center'
title.style.paddingTop = '50pt'
title.innerText = 'Pig Latin'
title.style.color = 'darkblue'
document.body.appendChild(title)

document.body.appendChild(document.createElement('hr'))

let div = document.createElement('div')
div.style.textAlign = 'center'
div.style.paddingTop = '20pt'
document.body.appendChild(div)

let input = document.createElement('input')
input.type = "text"
input.id = "userInput"
input.required = true
div.appendChild(input)

let result = document.createElement('h3')
result.style.textAlign = 'center'
result.style.paddingTop = '20pt'
result.style.color = 'darkblue'
document.body.appendChild(result)

let button = document.createElement('button')
button.innerText = 'translate'
button.addEventListener('click', () => {
  let userInput = document.getElementById('userInput').value
  result.innerText = pigLatin(userInput)
})
div.appendChild(button)
