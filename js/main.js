import '../scss/main.scss'

async function getMovie(name, page = 1) {
  let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${name}&page=${page}`)
  res = await res.json()
  return res
}

let page = 1
let totalResults = 0
const searchEl = document.querySelector('input')
const searchBtnEl = document.querySelector('button.search-btn')
const ulEl = document.querySelector('ul')

searchBtnEl.addEventListener('click', async () => {
  page = 1
  const movies = await getMovie(searchEl.value, page)
  // page = 2
  
  const { Search, totalResults } = movies
  
  console.log(movies)
  console.log(typeof totalResults)

  Search.forEach(movie => {
    const PosterEl = document.createElement('img')
    const liEl = document.createElement('li')
    const spanEl = document.createElement('span')
    PosterEl.src = movie.Poster
    spanEl.textContent = movie.Title
    ulEl.append(liEl)
    liEl.append(spanEl)
    liEl.append(PosterEl)
  })

  const moreBtnEl = document.querySelector('button.more-btn')

})

const moreBtnEl = document.querySelector('button.more-btn')

moreBtnEl.addEventListener('click', async () => {
  page += 1
  const data = await getMovie(searchEl.value, page)
  const { Search, totalResults } = data
  console.log(Number(totalResults))
  if (page) {
    Search.forEach(movie => {
      const PosterEl = document.createElement('img')
      const liEl = document.createElement('li')
      const spanEl = document.createElement('span')
      PosterEl.src = movie.Poster
      spanEl.textContent = movie.Title
      ulEl.append(liEl)
      liEl.append(spanEl)
      liEl.append(PosterEl)
    })
  } 
})