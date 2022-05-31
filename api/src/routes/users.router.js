const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) res.json({ limit, offset, message: "este es otro producto" },)
  else res.json({ message: "No hay parametros" },)
})

module.exports = router
