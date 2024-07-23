const router = require('express').Router();
const { Movie } = require('../models');

router.get('/', async (req, res) => {
  res.render('questionnaire');
});
module.exports = router;

router.get('/favorites', async (req, res) => {
  try {
    const favoriteMovieData = await Movie.findAll({
    });

    const movies = favoriteMovieData.map((movie) =>
      movie.get({ plain: true })
    );
    res.render('favorites', {
      movies
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;