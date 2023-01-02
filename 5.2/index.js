const studentsApi = 'https://apigenerator.dronahq.com/api/g4C15xPP/students'
const tasksApi = 'https://apigenerator.dronahq.com/api/75U0yEKU/tasks'
const gradesApi = 'https://apigenerator.dronahq.com/api/5Bba_f-L/grades'

async function GetData(api) {
    let result = await fetch(api)
    result = await result.json()
    return (result)
}


async function AllTasks(id) {
    let matchTasks = []
    let matchGrades = []

    GetData(studentsApi + '/' + JSON.stringify(id)).then(
        function (data) {
            console.log('Atividades do aluno: ' + data.Name)
        }
    )

    await GetData(gradesApi).then(
        function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].studentId === JSON.stringify(id)) {
                    matchGrades.push(data[i])
                }
            }
        }
    )

    GetData(tasksApi).then(
        function (data) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < matchGrades.length; j++) {
                    if (data[i].id == matchGrades[j].taskId) {
                        matchTasks.push(data[i])
                    }
                }
            }

        }
    ).then(
        function () {
            for (let i = 0; i < matchTasks.length; i++) {
                console.log('Atividade ' + JSON.stringify(i + 1) + ' ' + matchTasks[i].title)
                for (let j = 0; j < matchGrades.length; j++) {
                    if (matchTasks[i].id == matchGrades[j].taskId) {
                        console.log('Nota: ' + matchGrades[i].number)
                    }
                }
                console.log('-----------')
            }
        }

    )
}

async function AverageCalc(id) {
    let matchGrades = []
    await GetData(gradesApi).then(
        function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].studentId === JSON.stringify(id)) {
                    matchGrades.push(parseInt(data[i].number))
                }
            }
        }
    )
    let sum = matchGrades.reduce((t, n) => t + n)
    let average = sum / matchGrades.length
    console.log(average)
}

AllTasks(2)
AverageCalc(2)