const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML =
        '<img src="https://avatars.githubusercontent.com/u/72968420?v=4" alt="" />'
    name.innerHTML = 'Dima Gashuk'

    let DateOBJ = new Date();

    const month = DateOBJ.getMonth()
    const day = DateOBJ.getDate()
    const year = DateOBJ.getFullYear()

    date.innerHTML = `${months[month]} ${day}, ${year}`

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}