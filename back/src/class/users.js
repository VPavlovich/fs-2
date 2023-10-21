class Users {
  static USER_ID = {
    USER: 1,
    USER: 2,
    USER: 3,
  }

  static #list = []

  static #count = 1

  constructor({ email, password, id }) {
    this.id = Users.#count++

    this.email = String(email).toLowerCase()
    this.password = String(password)
    this.isConfirm = false
  }

  static create(data) {
    const user = new Users(data)

    console.log(user)

    this.#list.push(user)

    console.log(this.#list)

    return user
  }

  static getByEmail(email) {
    return (
      this.#list.find(
        (user) =>
          user.email === String(email).toLowerCase(),
      ) || null
    )
  }

  static getById(id) {
    return (
      this.#list.find((user) => user.id === Number(id)) ||
      null
    )
  }

  static getList = () => this.#list
}

module.exports = {
  Users,
}
