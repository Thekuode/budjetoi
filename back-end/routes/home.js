express = require('express');
router = express.Router();

router.get('/', (req, res) => {
  res.send('Tämä on koti')
})

module.exports = router;