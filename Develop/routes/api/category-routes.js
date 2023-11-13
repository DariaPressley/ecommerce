const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   // try {
//   //   const locationData = await Location.findByPk(req.params.id, {
//   //     include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
//   //   });

//   //   if (!locationData) {
//   //     res.status(404).json({ message: 'No location found with this id!' });
//   //     return;
//   //   }

//   //   res.status(200).json(locationData);
//   // } catch (err) {
//   //   res.status(500).json(err);
//   }
// });

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
