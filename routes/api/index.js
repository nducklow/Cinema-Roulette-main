const router = require('express').Router();

const requestsRoutes = require('./requestRoutes')
const favoritesRoutes = require('./favoritesRoutes')

router.use('/request', requestsRoutes)
router.use('/favorites', favoritesRoutes)

module.exports = router;
