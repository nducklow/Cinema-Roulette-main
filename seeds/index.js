const sequelize = require('../config/connection')
const { Movie } = require('../models')
const favoritesSeedData = require('./favorites.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: false });
    await Movie.bulkCreate(favoritesSeedData, {
        returning: true
    })
    process.exit(0);
};
seedDatabase();