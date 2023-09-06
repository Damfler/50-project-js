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
        const { names, posters, status, description, genres } = anime

        const animeEl = document.createElement('div')
        animeEl.classList.add('movie')

        let tagHtml = ''
        genres.forEach((tag) => {
            tagHtml += '<span class="tag">' + tag + '</span>'
        })
        console.log(tagHtml);
        animeEl.innerHTML = `
        <div class="card">
        <div class="poster">
                <img
                src="${IMG_PATH + posters.original.url}"
                alt="${names.ru}"
                />
        </div>
        <div class="details">
          <h1>${names.ru}</h1>
          <h2>2021 • PG • 1hr 38min</h2>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <span>4.2/5</span>
          </div>
          <div class="tags">
            ${tagHtml}
          </div>
          <p class="desc">${description.substring(0, 100)}...</p>
        </div>
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