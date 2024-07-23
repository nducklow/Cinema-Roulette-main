const router = require('express').Router();
// /api/request

router.get('/', async (req, res) => {
  const genres = req.query.genres
  console.log(req.query.genres)

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.BEARER
      }
    };
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`, options)
    const data = await response.json()
    res.json(data)
  }
  catch (err) {
    res.json(err)
    console.log(err)
  }
})



module.exports = router;