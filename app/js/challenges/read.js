fetch('https://raw.githubusercontent.com/aunimhsn/data-format/main/json/quiz.json')
    .then(response => response.json())
    .then(data => {

        let quiz = data.quiz

        // 1
        console.log(quiz.maths.q2);

        // 2
        console.log(quiz.sport.q1.options[2]);

        // 3
        console.log(quiz.sport.q1.question)

        // 4
        console.log(quiz.maths.q2.question);

        // Bonus 1
        console.log(quiz.sport.q1.options.reverse()[0])

        // Bonus 2
        console.log(quiz.maths.q2.options.length)
    })