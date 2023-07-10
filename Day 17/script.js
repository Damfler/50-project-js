const API_URL = 'https://api.anilibria.tv/v3/title/updates?limit=20'
const IMG_PATH = 'https://static-libria.weekstorm.one'
const SEARCH_URL = 'https://api.anilibria.tv/v3/title/search?search='

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial animes
getAnimes(API_URL)

async function getAnimes(url) {
    const res = await fetch(url)
    const data = await res.json()

    showAnimes(data.list)
}

function showAnimes(animes) {
    main.innerHTML = ''

    animes.forEach((anime) => {
        const { names, posters, status, description } = anime

        const animeEl = document.createElement('div')
        animeEl.classList.add('movie')

        animeEl.innerHTML = `
                <img
                src="${IMG_PATH + posters.original.url}"
                alt="${names.ru}"
                />
                <div class="movie-info">
                    <h3>${names.ru}</h3>
                    <span class="${getClassByRate(status.string)}">${status.string}</span>
                </div>
                <div class="overview">
                    <h3>overview</h3>
                    ${description}
                </div>
            `

        main.appendChild(animeEl)
    })
}

function getClassByRate(vote) {
    if (vote === 'В работе') {
        return 'red'
    } else {
        return 'green'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getAnimes(SEARCH_URL + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})