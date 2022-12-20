const moviesSection = document.getElementById('movies')
const api = 'https://apigenerator.dronahq.com/api/GFBm-mNl/movies'

function GetData() {
    fetch(api)
        .then(function (response) {
            let body = response.json()
            return body
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                let title = JSON.stringify(data[i].title)
                let genre = JSON.stringify(data[i].genre)
                let average = JSON.stringify(data[i].vote_average)
                let overview = JSON.stringify(data[i].overview)
                let actMovie = [title, genre, average, overview]
                RenderData(actMovie)
            }
        })
}

function RenderData(actMovie) {
    let movieProperties = ['Título: ', 'Gênero: ', 'Nota: ', 'Sinopse: ']
    let article = document.createElement('article')

    for (let j = 0; j < actMovie.length; j++) {
        let b = document.createElement('b')
        b.appendChild(document.createTextNode(movieProperties[j]))
        let text = document.createElement('p')
        text.appendChild(b)
        text.appendChild(document.createTextNode(actMovie[j]))
        article.appendChild(text)
    }
    moviesSection.appendChild(article)
}

GetData()