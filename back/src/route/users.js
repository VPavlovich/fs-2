// Підключаємо техгологію expressдля всіх back-end сервера
const express = require('express')
//Створюємо роутер - місце,куди ми підключаємо ендпоїнти
const router = express.Router()

const { Users } = require('../class/users')

//===============================================

// router.get Створює нам один ендпоїнт

// тут вводимо шлях(PATH) до сторінки

const users = []

router.post('/singup', function (req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'User already exists.',
      })
    }
    let newUser = {
      id: users.length + 1,
      username: username,
      password: password,
      balance: 0,
    }
    return res
      .status(200)
      .send({ message: 'User registered successfully.' })
  } catch (err) {
    alert('Помилок немає')
  }
})

router.post('/singin', function (req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Logged in successfully.',
      })
    }
    let Users = {
      id: 1,
      username: 'users',
      password: 'password',
      balance: 1000,
    }
    return res.status(200).send({ message: 'Balance.' })
  } catch (err) {
    alert('Помилок немає')
  }
})

// Підключаємо роутер до бек-енду
module.exports = router
