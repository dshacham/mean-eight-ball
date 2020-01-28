// grab the relevant elements
const getAnswer = document.getElementById('answer');
const animation = document.getElementsByClassName('ball');
const btn = document.getElementById('res');

// define functions

const ballAnimation = () => {
    const ballShake = () => {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });
    }
    ballShake();

    const fadeWhite = () => {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        const opa = 0;
        if (opa === 0) {
            fade.style.opacity = 0;
            fadeIn[0].style.opacity = 1;
            // btn.removeEventListener("click", ballAnimation);
        }
    }
    getAnswer.innerHTML = generateAnswer();
    fadeWhite();
}

const generateAnswer = () => {
    const answers = ['Sure, Jan...', 'Probably but who cares', 'Aha', 'Don\'t be pathetic', 'Yeah no', 'Do whatever you want', 'You disgust me', 'I see a dark future for you', 'I\'m supposed to answer for free?', 'Not sure I care', 'Ask again never', 'Better not ask that out loud', 'Cannot care now', 'Concentrate and go away', 'Don\'t count on it', 'Oh, honey...', 'Are you talking to me?', 'Whatever?', 'Ok bye.'];

    const randomAnswer = answers[Math.floor(answers.length * Math.random())];

    return randomAnswer;
}

const ballReset = () => {
    const ballShakes = () => {
        animation[0].animate([
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(20px)' }
        ], {
            duration: 100,
            iterations: 5
        });

    }
    ballShakes();

    const fadeBack = () => {
        const fade = document.getElementById('white-part');
        const fadeIn = document.getElementsByClassName('answers');
        let opa = 1;
        if (opa === 1) {
            fadeIn[0].style.opacity = 0;
            fade.style.opacity = 1;
            clearInterval(id);
        }
    }
    fadeBack();
}

const resetField = () => {
    const resFunc = () => {
        document.getElementById('askSomething').value = '';
    }
    resFunc();
}


// add event listener
// btn.addEventListener("click", resetField);

