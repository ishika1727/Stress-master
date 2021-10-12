const questions = [
    {
        q: 'How tired do you feel waking up each morning ?',
        a: 1
    },
    {
        q: 'How often do you experience any of the following symptoms: headaches, chest pain, muscle tension, or nausea?',
        a: 1
    },
    {
        q: 'How often do you experience fatigue and/or struggle to fall or stay asleep?',
        a: 1
    },
    {
        q:'How often do you get irritated by small mishaps ?',
        a: 1
    },
    {
        q: 'How often do you wish to run away ?',
        a: 1
    },
    {
        q: 'How often do you worry excessively about your responsibilities?',
        a: 1
    },
    {
        q: 'How often do you struggle to focus on tasks or stay motivated?',
        a: 1
    },
    {
        q: 'How often do you feel that even though you have friends to talk to, but you still feel lonely ?,',
        a: 1
    },
    {
        q: 'How often do you regret the choices you have made ?',
        a: 1
    },
    {
        q: 'How often do you blame others ?',
        a: 1
    },
    {
        q: 'How often do you overthink and waste the entire day with only one though clinging on your mind ?',
        a: 1
    },
    {
        q: 'How much irritated do you feel after a fully packed day with a lot of workload ?',
        a: 1
    },
    {
        q: 'How often do you experience irritability, sadness, or anger?',
        a: 1
    },
    {
        q: 'How often do you have little appetite or find that you are overeating?',
        a: 1
    },
    {
        q: 'How often do you feel that you had overreacted to a particular situation?',
        a: 1
    }
]

let answer = 1
let currentQuestion = 0
let currentScore = 0
const $questionNum = document.getElementById('question-num')
const $question = document.getElementById('question')
const $answer = document.getElementById('answer')

// Rendering Question Max and Current
const renderQuestionNum = (currentQuestionIndex, maxQuestion) => {
    $questionNum.innerText = `${currentQuestionIndex + 1} / ${maxQuestion}`
}

// Rendering Question Based On Param
const renderQuestion = (questionNumber) => {
    $question.innerText = questions[questionNumber].q
}

// Render Answer Based On Param
const renderAnswer = (answer) => {
    $answer.innerText = answer
}

// Inc Button Logic
const $incButton = document.getElementById('inc-button')
$incButton.onclick = () => {
    if (answer === 5) return null
    answer++
    renderAnswer(answer)
}

//  Decr Button Logic
const $decrButton = document.getElementById('decr-button')
$decrButton.onclick = () => {
    if (answer === 1) return null
    answer--
    renderAnswer(answer)
}

// Next Button Logic
const $nextButton = document.getElementById('next-question-button')
$nextButton.onclick = () => {
    const parsedInt = parseInt($answer.innerText)
    // Check If Its Valid
    if (Number.isNaN(parsedInt)) return alert('Something is Error')
    questions[currentQuestion].a = parsedInt

    // Submit Logic
    if (currentQuestion + 1 === questions.length) {
        const eachScore = questions.map(question => question.a)
        const scores = eachScore.reduce((prev,current) => prev + current)

        return alert(scores)
    }

    // Next QUestion Logic
    
    answer = 1
    currentQuestion++
    renderAnswer(questions[currentQuestion].a)
    renderQuestion(currentQuestion)
    renderQuestionNum(currentQuestion, questions.length)

    // If This is the last question
    if (currentQuestion + 1 === questions.length) {
        $nextButton.innerText = 'Submit'
    }
}

const $prevButton = document.getElementById('prev-question-button')
$prevButton.onclick = () => {
    const parsedInt = parseInt($answer.innerText)
    // Check If Its Valid
    if (Number.isNaN(parsedInt)) return alert('Something is Error')
    currentQuestion--
    answer = questions[currentQuestion].a
    renderAnswer(questions[currentQuestion].a)
    renderQuestion(currentQuestion)
    renderQuestionNum(currentQuestion, questions.length)

    // Changing nextButton innerText
    if ($nextButton.innerText === 'Submit') {
        $nextButton.innerText = 'Next'
    }
}



// For first time render
renderQuestionNum(currentQuestion, questions.length)
renderQuestion(currentQuestion)
renderAnswer(questions[currentQuestion].a)