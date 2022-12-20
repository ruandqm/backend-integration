const api = 'https://apigenerator.dronahq.com/api/GFBm-mNl/movies'

function AddData() {
    getInputs()

    let input = {
        title: title.value,
        overview: overview.value,
        genre: genre.value,
        vote_average: average.value,
    }
    console.log(input)
    const init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    }
    let myRequest = new Request(api, init)
    fetch(myRequest)
        .then(
            function (response) {
                return response.json
            }
        )
        .then(function (data) {
            console.log(data)
        })
}

function getInputs() {
    let title = document.getElementById('title')
    let genre = document.getElementById('genre')
    let average = document.getElementById('average')
    let overview = document.getElementById('overview')

    return (title, genre, average, overview)
}