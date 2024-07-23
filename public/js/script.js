const movie = document.querySelector('#movies')

const apiRequest = async (event) => {
    event.preventDefault();
    let genres = []
    movie.innerHTML = ''
    const inputs = document.querySelectorAll('#checkboxForm >div>input')
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            genres.push(inputs[i].value)
        }
    }

    const response = await fetch(`/api/request/?genres=${genres}`, {
        method: 'GET',

    });
    const movies = await response.json()
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('div')
        const addToFavorites = document.createElement('button')
        const movieName = document.createElement('h2')
        const movieImage = document.createElement('img')
        card.className = "cardClass"
        addToFavorites.value = movies.results[i].id
        addToFavorites.textContent = "Add to Favorites!"
        addToFavorites.className = "addToFavorites"
        addToFavorites.addEventListener('click', addToFavoritesDB)
        movieName.textContent = movies.results[i].title
        movieName.className = "cardName"
        movieImage.src = `https://image.tmdb.org/t/p/w200/${movies.results[i].poster_path}`
        card.appendChild(movieName)
    
        card.appendChild(movieImage)
        card.appendChild(addToFavorites)
        
        movie.appendChild(card)
    }
}

const addToFavoritesDB = async (event) => {
    const movieID = event.target.value
    const response = await fetch(`/api/favorites/?movieID=${movieID}`, {
        method: 'POST',

    })
    const movie = await response.json()
    alert(movie.message)
}

document
    .querySelector('#submit')
    .addEventListener('click', apiRequest);




