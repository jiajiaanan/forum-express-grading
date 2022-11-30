const { Restaurant, Category } = require('../models')
const restaurantController = {
  getRestaurants: (req, res) => {
    return Restaurant.findAll({
      include: Category,
      nest: true,
      raw: true
    }).then(restaurants => {
      const data = restaurants.map(r => ({
        ...r,
        description: r.description.substring(0, 50) // 將description擷取前五十字元覆蓋原始的description
      }))
      return res.render('restaurants', { restaurants: data })
    })
  }
}
module.exports = restaurantController
