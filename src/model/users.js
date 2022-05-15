const bcrypt = require('bcryptjs')

const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true},
  date: { type: Date, default: Date.now },
},{
  timestamps: true,
})

UserSchema.methods.encryptPasswprd = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password,salt)
}

UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password,this.password)
}

const User = model("User",UserSchema)
module.exports = User