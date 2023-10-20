// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const signup = require('./signup')
const post = require('./post')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', signup)
router.use('/', post)
// Використовуйте інші файли роутів, якщо є

router.get('/', (req, res) => {
  res.status(200).json('Hello World')
})

// Експортуємо глобальний роутер
module.exports = router
