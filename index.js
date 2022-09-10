let score = document.querySelector('.score')
let restartBtn = document.querySelector('.back-btn')
let submitBtn = document.querySelector('.submit-btn')
let nextBtn = document.querySelector('.next-btn')
let start = document.querySelector('.start')
let overlayDiv = document.querySelector('.overlay')
let question = document.querySelector('.question')

let questionCount = document.querySelector('.que-count')
let optionDiv1 = document.querySelector('.option-div1')
let optionDiv2 = document.querySelector('.option-div2')
let optionDiv3 = document.querySelector('.option-div3')
let optionDiv4 = document.querySelector('.option-div4')

let optionA = document.querySelector('.opetionA')
let optionB = document.querySelector('.opetionB')
let optionC = document.querySelector('.opetionC')
let optionD = document.querySelector('.opetionD')

// start
function quizeStart() {
  overlayDiv.classList.add('none')
  newQuestion()
}
setInterval((e) => {
  start.classList.add('scale')
}, 4000)
setInterval(() => {
  start.classList.remove('scale')
}, 6000)

// question
let alloption = [optionA, optionB, optionC, optionD]
let i = 0
function newQuestion() {
  cq()
  optionDiv1.classList.remove('border')
  optionDiv2.classList.remove('border')
  optionDiv3.classList.remove('border')
  optionDiv4.classList.remove('border')
  optionDiv1.classList.remove('borderRed')
  optionDiv2.classList.remove('borderRed')
  optionDiv3.classList.remove('borderRed')
  optionDiv4.classList.remove('borderRed')
  //
  optionDiv1.addEventListener('click', option1)
  optionDiv2.addEventListener('click', option2)
  optionDiv3.addEventListener('click', option3)
  optionDiv4.addEventListener('click', option4)
  //
  for (let obj of quizCollection) {
    question.innerText = quizCollection[i].title
    let arr = quizCollection[i].options
    var objArr = { arr }
    alloption.forEach((elm, index) => {
      elm.innerText = objArr.arr[index]
    })
    questionCount.innerText = i + 1
    if (i < 10) {
      i++
    }
    return
  }
}
let j = 1
// option1
function option1() {
  let ansIndex = quizCollection[i - 1].answerIndex
  let rightans = quizCollection[i - 1].options[ansIndex]
  if (optionDiv1.innerText == rightans) {
    optionDiv1.classList.add('border')
    score.innerText = j++
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  } else {
    optionDiv1.classList.add('borderRed')
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  }
}
// option2
function option2() {
  let ansIndex = quizCollection[i - 1].answerIndex
  let rightans = quizCollection[i - 1].options[ansIndex]

  if (optionDiv2.innerText == rightans) {
    console.log('222')
    optionDiv2.classList.add('border')
    score.innerText = j++
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  } else {
    optionDiv2.classList.add('borderRed')
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  }
}

//option3
function option3() {
  let ansIndex = quizCollection[i - 1].answerIndex
  let rightans = quizCollection[i - 1].options[ansIndex]

  if (optionDiv3.innerText == rightans) {
    console.log('3333')
    optionDiv3.classList.add('border')
    score.innerText = j++
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  } else {
    optionDiv3.classList.add('borderRed')
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  }
}
// option4
function option4() {
  let ansIndex = quizCollection[i - 1].answerIndex
  let rightans = quizCollection[i - 1].options[ansIndex]

  if (optionDiv4.innerText == rightans) {
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)

    console.log('4444')
    optionDiv4.classList.add('border')
    score.innerText = j++
  } else {
    optionDiv4.classList.add('borderRed')
    optionDiv1.removeEventListener('click', option1)
    optionDiv2.removeEventListener('click', option2)
    optionDiv3.removeEventListener('click', option3)
    optionDiv4.removeEventListener('click', option4)
  }
}

//restart
function restart() {
  j = 0
  score.innerText = j++
  i = 0
  for (let obj of quizCollection) {
    question.innerText = quizCollection[i].title
    let arr = quizCollection[i].options
    var objArr = { arr }
    alloption.forEach((elm, index) => {
      elm.innerText = objArr.arr[index]
    })
    questionCount.innerText = i + 1

    newQuestion()
    return
  }
}

// submit
function checkScore() {
  alert(
    `👉👉Your score ${score.innerText}.👍👍👍👍 you have done  ${score.innerText} correct answer`,
  )
}
function cq() {
  if (questionCount.innerText == 10) {
    alert(
      ' 👉👉question number is ten.it is done .you want to play again .you will restart button',
    )
  }
}

start.addEventListener('click', quizeStart)
nextBtn.addEventListener('click', newQuestion)
optionDiv1.addEventListener('click', option1)
optionDiv2.addEventListener('click', option2)
optionDiv3.addEventListener('click', option3)
optionDiv4.addEventListener('click', option4)
restartBtn.addEventListener('click', restart)
submitBtn.addEventListener('click', checkScore)
