const router = require('express').Router();
const { Movie } = require('../../models');
// /api/favorites

router.post('/', async (req, res) => {
    const movieID = req.query.movieID
    let favoriteMovie = {}

    try {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: process.env.BEARER
            }
        };
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, options)
        const data = await response.json()
        favoriteMovie = {
            movie_id: data.id,
            title: data.title,
            thumbnail: data.poster_path
        }
    }
    catch (err) {
        res.json(err)
        console.log(err)

    }
    try {
        await Movie.create(favoriteMovie);
        res.status(201).json({
            message: "Movie Successfully Added!"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Favorite already added!"
        });
    }
});






module.exports = router;
